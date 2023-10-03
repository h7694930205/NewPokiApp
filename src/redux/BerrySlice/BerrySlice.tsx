import { createSlice } from "@reduxjs/toolkit";
import { BerryList } from "./BerryType";
import constant from "config/constant/constant";
import { getAllBerryDetailsAction, getBerryDetailsAction, getBerryFirmnessesAction, getBerryFlavorsAction } from "./BerryAsyncThunk";

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

  const cheriBerry = {
    id: 0,
    name: "",
    growth_time: 0,
    max_harvest: 0,
    natural_gift_power: 0,
    size: 0,
    smoothness: 0,
    soil_dryness: 0,
    firmness: {
      name: "",
      url: "",
    },
    flavors: [
      {
        potency: 0,
        flavor: {
          name: "",
          url: "",
        },
      },
    ],
    item: {
      name: "",
      url: "",
    },
    natural_gift_type: {
      name: "",
      url: "",
    },
  };
  
const initialState: BerryList = {
  list: [],
  isLoading: false,
  isFlavorLoading:false,
  isFirmnessesLoading:false,
  id: 1,
  berryList: cheriBerry,
  growth_time: 1,
  max_harvest: 1,
  natural_gift_power: 1,
  smoothness: 1,
  soil_dryness: 1,
  firmness: {
    name: "",
    url: "",
  },
  imagePokemonList: initialImage,
  offset: constant.offset.defaultNumber,
  limit: constant.offset.size,
  total: constant.offset.defaultTotal,
  name: "",
  size: 0,
  flavors: {
    id: 0,
    name: "",
    berries: [
      {
        potency: 0,
        berry: {
          name: "",
          url: ""
        }
      }
    ],
    contest_type: {
      name: "",
      url: ""
    },
    names: [
      {
        name: "",
        language: {
          name: "",
          url: ""
        }
      }
    ]
  }
  ,
  item: {
    name: "",
    url: ""
  },
  natural_gift_type: {
    name: "",
    url: ""
  }
};

const BerrySlice = createSlice({
  name: "Berry",
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
      .addCase(getAllBerryDetailsAction.pending, (state: BerryList) => {
        state.isLoading = true;
      })
      .addCase(
        getAllBerryDetailsAction.fulfilled,
        (state: BerryList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getBerryDetailsAction.rejected, (state: BerryList) => {
        state.isLoading = false;
      }).addCase(getBerryDetailsAction.pending, (state: BerryList) => {
        state.isLoading = true;
      })
      .addCase(
        getBerryDetailsAction.fulfilled,
        (state: BerryList, { payload }) => {
          if (payload?.data) {
            state.berryList = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getBerryFirmnessesAction.rejected, (state: BerryList) => {
        state.isFirmnessesLoading = false;
      }).addCase(getBerryFirmnessesAction.pending, (state: BerryList) => {
        state.isFirmnessesLoading = true;
      })
      .addCase(
        getBerryFirmnessesAction.fulfilled,
        (state: BerryList, { payload }) => {
          if (payload?.data) {
            state.firmness = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isFirmnessesLoading = false;
        }
      )

      
      .addCase(getBerryFlavorsAction.rejected, (state: BerryList) => {
        state.isFlavorLoading = false;
      }).addCase(getBerryFlavorsAction.pending, (state: BerryList) => {
        state.isFlavorLoading = true;
      })
      .addCase(
        getBerryFlavorsAction.fulfilled,
        (state: BerryList, { payload }) => {
          if (payload?.data) {
            state.flavors = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isFlavorLoading = false;
        }
      )
  },
});
export const BerryReducer = BerrySlice.reducer;
export const BerryAction = BerrySlice.actions;
