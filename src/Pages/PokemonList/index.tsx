import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { IRootState, useAppDispatch } from "redux/store";
import { getAllDetailsAction } from "redux/PokemonSlice/PokemonAsyncThunk";
import { setTotalPageCount } from "Service/ApiHepler";
import { pokemonAction } from "redux/PokemonSlice/PokemonSlice";
import { Strings } from "Resource/Strings";
import Pagination from "Components/Pagination";
import constant from "config/constant/constant";
import { Loader } from "Components/Loader";

const PokemonList = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector(
    (state: IRootState) => state.pokemonStateData
  );
  const { list, id, offset, total, limit } = useSelector(
    (state: IRootState) => state.pokemonStateData
  );
  list.map((item, index) => {
    const dynamicId = item?.url?.split("/pokemon/");
    return dynamicId;
  });
  useEffect(() => {
    dispatch(
      getAllDetailsAction({
        id: 0,
        offset,
        limit,
      })
    );
  }, [dispatch, id, limit, offset]);
  const totalPage = setTotalPageCount(total, limit);
  const pageChangeHandler = (currentPage: number) => {
    const page = Number(currentPage);
    dispatch(pokemonAction.setCurrentPage(page));
    dispatch(
      getAllDetailsAction({
        id,
        offset,
        limit,
      })
    );
  };
  return (
    <Fragment>
      {isLoading && list.length === 0 ? (
        <Loader />
      ) : (
        <>
          <div className="list">
            {list.map((item, index) => {
              const pokemonIndex = item?.url?.split("/pokemon/");
              const imageUrl = `https://img.pokemondb.net/artwork/large/${item.name}.jpg`;
              return (
                <div className="list-item" key={index}>
                  <img src={imageUrl} />
                  <div>{item.name}</div>
                  <div>
                    <Link
                      to={`/pokemon/${pokemonIndex?.[1]?.replace("/", "")}`}
                    >
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
export default PokemonList;
