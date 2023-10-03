import { createSlice } from "@reduxjs/toolkit";
import constant from "config/constant/constant";
import { getAllContestDetailsAction, getContestEffectsAction, getContestTypesAction, getSuperContestEffectsAction } from "./ContestAsyncThunk";
import { ContestList, ContestsList } from "./ContestType";

const initialImage = {
    back_default: "",
    back_shiny: "",
    front_default: "",
    front_shiny: "",
    name: "",
    url: "",
    id: 1,
    weight: 1,
    height: 1,
    order: 1,
  };

 const ContestsTypes = {
  id: 0,
  name: "",
  berry_flavor: {
    name: "",
    url: "",
  },
  names: [
    {
      name: "",
      color: "",
      language: {
        name: "",
        url: "",
      },
    },
  ],
 }


 const ContestsMoveEffect={
  id: 0,
  appeal: 0,
  jam: 0,
  effect_entries: [
    {
      effect: "",
      language: {
        name: "",
        url: "",
      },
    },
  ],
  flavor_text_entries: [
    {
      flavor_text: "",
      language: {
        name: "",
        url: "",
      },
    },
  ],
};


const SuperContestEffect = {
  id: 0,
  appeal: 0,
  flavor_text_entries: [
    {
      flavor_text: "",
      language: {
        name: "",
        url: "",
      },
    },
  ],
  moves: [
    {
      name: "",
      url: "",
    },
  ],
};





const initialState: ContestsList = {
  list: [],
  id: 0,
  name: "",
  flavor_text_entries: [],
  effect_entries: [],
  isLoading: false,
  imagePokemonList: initialImage,
  offset: constant.offset.defaultNumber,
  limit: constant.offset.size,
  total: constant.offset.defaultTotal,
  contestsType: ContestsTypes,
  ContestEffectList:ContestsMoveEffect,
  SuperContestEffectsList:SuperContestEffect
};

const ContestSlice = createSlice({
  name: "Contest",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.id = action.payload;
    },
    setCurrentPageSize: (state, action) => {
      state.limit = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.offset = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllContestDetailsAction.pending, (state: ContestsList) => {
        state.isLoading = true;
      })
      .addCase(
        getAllContestDetailsAction.fulfilled,
        (state: ContestsList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getContestTypesAction.rejected, (state: ContestsList) => {
        state.isLoading = false;
      }).addCase(getContestTypesAction.pending, (state: ContestsList) => {
        state.isLoading = true;
      })
      .addCase(
        getContestTypesAction.fulfilled,
        (state: ContestsList, { payload }) => {
          if (payload?.data) {
            state.contestsType = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )


      .addCase(getContestEffectsAction.rejected, (state: ContestsList) => {
        state.isLoading = false;
      }).addCase(getContestEffectsAction.pending, (state: ContestsList) => {
        state.isLoading = true;
      })
      .addCase(
        getContestEffectsAction.fulfilled,
        (state: ContestsList, { payload }) => {
          if (payload?.data) {
            state.ContestEffectList = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )


      .addCase(getSuperContestEffectsAction.rejected, (state: ContestsList) => {
        state.isLoading = false;
      }).addCase(getSuperContestEffectsAction.pending, (state: ContestsList) => {
        state.isLoading = true;
      })
      .addCase(
        getSuperContestEffectsAction.fulfilled,
        (state: ContestsList, { payload }) => {
          if (payload?.data) {
            state.SuperContestEffectsList = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )
  },
});
export const ContestReducer = ContestSlice.reducer;
export const ContestAction = ContestSlice.actions;
