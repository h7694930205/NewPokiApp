import { createSlice } from "@reduxjs/toolkit";
import constant from "config/constant/constant";
import { getAllEvolutionDetailsAction, getEvolutionChainsAction, getEvolutionTriggersAction } from "./EvolutionAsyncThunk";
import { getAllBerryDetailsAction } from "redux/BerrySlice/BerryAsyncThunk";
import { EvolutionList } from "./EvolutionType";


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




  const EvolutionTrigger={
    id: 0,
    name: "",
    names: [
      {
        name: "",
        language: {
          name: "",
          url: "",
        },
      },
    ],
    pokemon_species: [
      {
        name: "",
        url: "",
      },
    ],
  };


  const evolutionAllChain =  {
    id: 7,
    baby_trigger_item: null,
    chain: {
      is_baby: false,
      species: {
        name: "",
        url: ""
      },
      evolution_details: null,
      evolves_to: [
        {
          is_baby: false,
          species: {
            name: "",
            url: ""
          },
          evolution_details: [
            {
              item: null,
              trigger: {
                name: "",
                url: ""
              },
              gender: null,
              held_item: null,
              known_move: null,
              known_move_type: null,
              location: null,
              min_level: 20,
              min_happiness: null,
              min_beauty: null,
              min_affection: null,
              needs_overworld_rain: false,
              party_species: null,
              party_type: null,
              relative_physical_stats: null,
              time_of_day: "",
              trade_species: null,
              turn_upside_down: false
            }
          ],
        }
      ]
    }
  };


const initialState: EvolutionList = {
  list: [],
  isLoading: false,
  id: 1,
  firmness: 1,
  imagePokemonList: initialImage,
  offset: constant.offset.defaultNumber,
  limit: constant.offset.size,
  total: constant.offset.defaultTotal,
  name: "",
  background: 0,
  EvolutionTriggerList: EvolutionTrigger,

  EvolutionChainList: evolutionAllChain
};

const EvolutionSlice = createSlice({
  name: "Evolution",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.id = action.payload;
    },
    setCurrentPageSize: (state, action) => {
      state.limit = action.payload;
    },
    setCurrentPage: (state, action) => {
     console.log(action.payload)
      state.offset = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvolutionDetailsAction.pending, (state: EvolutionList) => {
        state.isLoading = true;
      })
      .addCase(
        getAllEvolutionDetailsAction.fulfilled,
        (state: EvolutionList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getEvolutionChainsAction.pending, (state: EvolutionList) => {
        state.isLoading = true;
      })
      .addCase(
        getEvolutionChainsAction.fulfilled,
        (state: EvolutionList, { payload }) => {
          if (payload?.data) {
            state.ChainList = payload?.data;
            console.log(payload,"testing data")
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getEvolutionChainsAction.rejected, (state: EvolutionList) => {
        state.isLoading = false;
      })


      .addCase(getEvolutionTriggersAction.rejected, (state: EvolutionList) => {
        state.isLoading = false;
      }).addCase(getEvolutionTriggersAction.pending, (state: EvolutionList) => {
        state.isLoading = true;
      })
      .addCase(
        getEvolutionTriggersAction.fulfilled,
        (state: EvolutionList, { payload }) => {
          if (payload?.data) {
            state.EvolutionTriggerList = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )
  },
});
export const EvolutionReducer = EvolutionSlice.reducer;
export const EvolutionAction = EvolutionSlice.actions;
