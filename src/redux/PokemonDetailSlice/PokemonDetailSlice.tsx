import { createSlice } from "@reduxjs/toolkit";
import { getAbilityDetailsAction } from "./PokemonDetailAsyncThunk";
import { DetailsList } from "./PokemonDetailType";
const initialLanguage = {
  name: " ",
  url: "",
};
const initialState: DetailsList = {
  list: [],
  isLoading: false,
  name: "",
  is_main_series: false,
  id: 0,
  effectEntries: [],
  language: initialLanguage,
  flavourText: [],
};

const DetailSlice = createSlice({
  name: "PokemonDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAbilityDetailsAction.pending, (state: DetailsList) => {
        state.isLoading = true;
      })
      .addCase(
        getAbilityDetailsAction.fulfilled,
        (state: DetailsList, { payload }) => {
          if (payload) {
            state.effectEntries = payload.data;
            state.name = payload.name;
          }
          state.isLoading = false;
        }
      )
      .addCase(getAbilityDetailsAction.rejected, (state: DetailsList) => {
        state.isLoading = false;
      });
  },
});
export const pokemonDetailReducer = DetailSlice.reducer;
export const pokemonDetailAction = DetailSlice.actions;
