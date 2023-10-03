import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { IRootState, useAppDispatch } from "redux/store";
import { setTotalPageCount } from "Service/ApiHepler";
import Pagination from "Components/Pagination";
import constant from "config/constant/constant";
import { Loader } from "Components/Loader";
import { getAllContestDetailsAction } from "redux/ContestSlice/ContestAsyncThunk";
import { ContestAction } from "redux/ContestSlice/ContestSlice";
import { Link } from "react-router-dom";
import { Strings } from "Resource/Strings";

const ContestType = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector(
    (state: IRootState) => state.contestStateData
  );
  const { list, id, offset, total, limit } = useSelector(
    (state: IRootState) => state.contestStateData
  );
  list.map((item, index) => {
    const dynamicId = item?.url?.split("/contest-type/");
    return dynamicId;
  });
  useEffect(() => {
    dispatch(
        getAllContestDetailsAction({
        id: 0,
        offset,
        limit,
      })
    );
  }, [dispatch, id, limit, offset]);
  const totalPage = setTotalPageCount(total, limit);
  const pageChangeHandler = (currentPage: number) => {
    const page = Number(currentPage);
    dispatch(ContestAction.setCurrentPage(page));
    dispatch(
        getAllContestDetailsAction({
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
              const ContestIndex = item?.url?.split("/contest-type/");
              const imageUrl = `https://placehold.co/600x400/${item.background}/${item.fontColor}?text=${capitalizedText}`;
              const itemStyle = {
                background: backgroundColor,
                color: fontColor,
              };
              return (
                <div className="list-item" key={index} style={itemStyle}>
                  <img src={imageUrl} />
                  <div>{capitalizedText}</div>
                  <Link to={`/contest-type/${ContestIndex?.[1]?.replace("/", "")}`}>
                <button>{Strings.viewDetail}</button>
                  </Link>
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
export default ContestType;
