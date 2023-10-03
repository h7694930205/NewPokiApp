import { createSlice } from "@reduxjs/toolkit";
import constant from "config/constant/constant";
import { getAllEncounterDetailsAction, getEncounterConditionAction, getEncounterConditionValueAction, getEncounterMethodAction } from "./EncounterAsyncThunk";
import { EncounterList } from "./EncounterType";


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

  const EncounterMethods = {
    id: 0,
    name: "",
    order: 0,
    names: [
      {
        name: "",
        language: {
          name: "",
          url: "",
        },
      },
    ],
  };


  const EncounterCondition = {
    id: 0,
    name: "",
    values: [
      {
        name: "",
        url: "",
      },
    ],
    names: [
      {
        name: "",
        language: {
          name: "",
          url: "",
        },
      },
    ],
  };


  const EncounterConditionValue = {
    id: 0,
    name: "",
    condition: {
      name: "",
      url: "",
    },
    names: [
      {
        name: "",
        language: {
          name: "",
          url: "",
        },
      },
    ],
  };

const initialState: EncounterList = {
    list: [],
    id: 1,
    EncounterMethodList:EncounterMethods,
    EncounterConditionList:EncounterCondition,
    EncounterConditionValueList:EncounterConditionValue,
    imagePokemonList: initialImage,
    offset: constant.offset.defaultNumber,
    limit: constant.offset.size,
    total: constant.offset.defaultTotal,
    isLoading: false,
    name: []
};

const EncounterSlice = createSlice({
  name: "Encounter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.id = action.payload;
    },
    setCurrentPageSize: (state, action) => {
      state.limit = action.payload;
    },
    setCurrentPage: (state, action) => {
      console.log("action", action.payload)
      state.offset = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEncounterDetailsAction.pending, (state: EncounterList) => {
        state.isLoading = true;
      })
      .addCase(
        getAllEncounterDetailsAction.fulfilled,
        (state: EncounterList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getEncounterMethodAction.pending, (state: EncounterList) => {
        state.isLoading = true;
      })
      .addCase(
        getEncounterMethodAction.fulfilled,
        (state: EncounterList, { payload }) => {
          if (payload?.data) {
            state.EncounterMethodList = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getEncounterMethodAction.rejected, (state: EncounterList) => {
        state.isLoading = false;
      })

      .addCase(getEncounterConditionAction.rejected, (state: EncounterList) => {
        state.isLoading = false;
      }).addCase(getEncounterConditionAction.pending, (state: EncounterList) => {
        state.isLoading = true;
      })
      .addCase(
        getEncounterConditionAction.fulfilled,
        (state: EncounterList, { payload }) => {
          if (payload?.data) {
            state.EncounterConditionList = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )


      .addCase(getEncounterConditionValueAction.rejected, (state: EncounterList) => {
        state.isLoading = false;
      }).addCase(getEncounterConditionValueAction.pending, (state: EncounterList) => {
        state.isLoading = true;
      })
      .addCase(
        getEncounterConditionValueAction.fulfilled,
        (state: EncounterList, { payload }) => {
          if (payload?.data) {
            state.EncounterConditionValueList = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )
  },
});
export const EncounterReducer = EncounterSlice.reducer;
export const EncounterAction = EncounterSlice.actions;
