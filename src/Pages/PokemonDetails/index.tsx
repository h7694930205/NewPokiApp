import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal, { SweetAlertOptions } from "sweetalert2";
import { Strings } from "../../Resource/Strings";
import { IRootState, useAppDispatch } from "redux/store";
import { getAbilityDetailsAction } from "redux/PokemonDetailSlice/PokemonDetailAsyncThunk";
import {
  getAllDetailsAction,
  getPokemonDetailsAction,
} from "redux/PokemonSlice/PokemonAsyncThunk";
import { getItem, setItem } from "Components/Storage";

export const CATCH_NAME = "CATCH_NAME";
const PokemonDetails = () => {
  const { listId } = useParams();
  const [inputData, setInputData] = useState<string>("");
  const { offset, imagePokemonList, limit } = useSelector(
    (state: IRootState) => state.pokemonStateData
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const id = Number(listId);
    dispatch(getAbilityDetailsAction({ id }));
    dispatch(
      getAllDetailsAction({
        id,
        offset,
        limit,
      })
    );
    dispatch(getPokemonDetailsAction({ id }));
  }, [dispatch, limit, listId, offset]);

  const onChangeHandler = (event: any) => {
    setInputData(event.target.value);
  };
  const SubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputData.trim() === "") {
      return;
    }

    const popupOptions: SweetAlertOptions = {
      title: "<i>successful Nickname</i>",
      html: "successful ",
      confirmButtonText: " <u>Ok</u>",
      showConfirmButton: true,
    };

    try {
      const result = await Swal.fire(popupOptions);
      if (result.isConfirmed) {
        const { data } = await getItem(CATCH_NAME);
        const listOfLastData = data ? JSON.parse(data) : [];
        const newData = {
          id: listId,
          name: imagePokemonList.name,
          nickName: inputData,
        };
        var updatedLocalStorage;
        if (listOfLastData != null) {
          updatedLocalStorage = [...listOfLastData, newData];
        } else {
          updatedLocalStorage = [data];
        }
        setItem(CATCH_NAME, JSON.stringify(updatedLocalStorage));
        navigate("/my/pokemon/list/");
      }
    } catch (error) {
      return error;
    }
  };
  const imageUrl = `https://img.pokemondb.net/artwork/large/${imagePokemonList.name}.jpg`;
  return (
    <>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <img
          src={imageUrl}
          alt={imagePokemonList.name}
          style={{ maxWidth: "100%", maxHeight: "300px" }}
        />
      </div>
      <div style={{ textAlign: "center", fontWeight: "bold" }}>
        title: {imagePokemonList.name}
      </div>
      <div style={{ textAlign: "center" }}>
        weight: {imagePokemonList.weight}
      </div>
      <div style={{ textAlign: "center" }}>
        height: {imagePokemonList.height}
      </div>
      <div style={{ textAlign: "center" }}>order: {imagePokemonList.order}</div>
      <form
        onSubmit={SubmitHandler}
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        <input
          type="text"
          placeholder={Strings.nickname}
          value={inputData}
          onChange={onChangeHandler}
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <button
          type="submit"
          style={{
            padding: "5px 10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {Strings.catch}
        </button>
      </form>
    </>
  );
};

export default PokemonDetails;
