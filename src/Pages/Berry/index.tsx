import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { IRootState, useAppDispatch } from "redux/store";
import { setTotalPageCount } from "Service/ApiHepler";
import Pagination from "Components/Pagination";
import constant from "config/constant/constant";
import { Loader } from "Components/Loader";
import { getAllBerryDetailsAction } from "redux/BerrySlice/BerryAsyncThunk";
import { BerryAction } from "redux/BerrySlice/BerrySlice";
import { Link } from "react-router-dom";
import { Strings } from "Resource/Strings";

const BerriesList = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector(
    (state: IRootState) => state.berryStateData
  );
  const { list, id, offset, total, limit } = useSelector(
    (state: IRootState) => state.berryStateData
  );
  list.map((item, index) => {
    const dynamicId = item?.url?.split("/berry/");
    return dynamicId;
  });
  useEffect(() => {
    dispatch(
      getAllBerryDetailsAction({
        id,
        offset,
        limit,
      })
    );
  }, [dispatch, id, limit, offset]);

  const totalPage = setTotalPageCount(total, limit);

  const pageChangeHandler = (currentPage: number) => {
    const page = Number(currentPage);
    dispatch(BerryAction.setCurrentPage(page));
    dispatch(
      getAllBerryDetailsAction({
        id,
        offset,
        limit,
      })
    );
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Fragment>
      {isLoading && list.length === 0 ? (
        <Loader />
      ) : (
        <>
          <div className="list">
            {list.map((item, index) => {
              const backgroundColor = getRandomColor();
              const fontColor = getRandomColor();
              const capitalizedText = item?.name?.toUpperCase();
              const berryIndex = item?.url?.split("/berry/");
              const imageUrl = `https://placehold.co/600x400/${item.background}/${item.fontColor}?text=${capitalizedText}`;
              const itemStyle = {
                background: backgroundColor,
                color: fontColor,
              };
              return (
                <div className="list-item" key={index} style={itemStyle}>
                  <img src={imageUrl}  />
                  <div>{capitalizedText}</div>
                  <div>
                <Link to={`/berry/${berryIndex?.[1]?.replace("/", "")}`}>
                <button>{Strings.viewDetail}</button>
                </Link>
              </div>
                </div>
              );
            })}
          </div>
          <div>
            <Pagination
              page={offset}
              onPageChangeHandler={pageChangeHandler}
              totalPages={
                totalPage > 0
                  ? totalPage
                  : constant.offset.defaultCurrentPaginationNumber
              }
            />
          </div>
        </>
      )}
    </Fragment>
  );
};

export default BerriesList;
