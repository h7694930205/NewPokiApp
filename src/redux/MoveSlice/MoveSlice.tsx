import { createSlice } from "@reduxjs/toolkit";
import constant from "config/constant/constant";
import {
  getAllMoveDetailsAction,
  getMoveAilmentAction,
  getMoveBattleStylesAction,
  getMoveCategoriesAction,
  getMoveDamageClassesAction,
  getMoveLearnMethodsAction,
  getMoveTargetAction,
} from "./MoveAsyncThunk";
import { MoveList } from "./MoveType";

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

const MoveAilments = {
  id: 0,
  name: "",
  moves: [
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

const attackMove = {
  id: 0,
  name: "",
  names: [
    {
      name: "",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ]
};



const CategoriesMove  = {
  id: 0,
  name: "",
  descriptions: [
    {
      description: "",
      language: {
        name: "",
        url: ""
      }
    }
  ],
  moves: [
    {
      name: "",
      url: ""
    }
  ]
};


const MoveDamageClass = {
  id: 0,
  name: "",
  descriptions: [
    {
      description: "",
      language: {
        name: "",
        url: ""
      }
    }
  ],
  moves: [
    {
      name: "",
      url: ""
    }
  ]
};


const levelMethod = {
  id: 0,
  name: "",
  names: [
    {
      name: "",
      language: {
        name: "",
        url: ""
      }
    }
  ],
  descriptions: [
    {
      description: "",
      language: {
        name: "",
        url: ""
      }
    }
  ],
  version_groups: [
    {
      name: "",
      url: ""
    }
  ]
};



const MoveTargetsItem = {
  id: 0,
  name: "",
  descriptions: [
    {
      description: "",
      language: {
        name: "",
        url: ""
      }
    }
  ],
  moves: [
    {
      name: "",
      url: ""
    }
  ],
  names: [
    {
      name: "",
      language: {
        name: "",
        url: ""
      }
    }
  ]
};


const initialState: MoveList = {
  list: [],
  id: 1,
  imagePokemonList: initialImage,
  offset: constant.offset.defaultNumber,
  limit: constant.offset.size,
  total: constant.offset.defaultTotal,
  isLoading: false,
  name: "",
  battleStyle: attackMove,
  AilmentsList: MoveAilments,
  CategoriesList: CategoriesMove,
  DamageClassList: MoveDamageClass,
  MoveLearnMethods: levelMethod,
  MoveTargetsList: MoveTargetsItem
};

const MoveSlice = createSlice({
  name: "Move",
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
      .addCase(getAllMoveDetailsAction.pending, (state: MoveList) => {
        state.isLoading = true;
      })
      .addCase(
        getAllMoveDetailsAction.fulfilled,
        (state: MoveList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )

      .addCase(getMoveAilmentAction.pending, (state: MoveList) => {
        state.isLoading = true;
      })
      .addCase(
        getMoveAilmentAction.fulfilled,
        (state: MoveList, { payload }) => {
          if (payload?.data) {
            state.AilmentsList = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getMoveAilmentAction.rejected, (state: MoveList) => {
        state.isLoading = false;
      })

      .addCase(getMoveBattleStylesAction.rejected, (state: MoveList) => {
        state.isLoading = false;
      })
      .addCase(getMoveBattleStylesAction.pending, (state: MoveList) => {
        state.isLoading = true;
      })
      .addCase(
        getMoveBattleStylesAction.fulfilled,
        (state: MoveList, { payload }) => {
          if (payload?.data) {
            state.battleStyle = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )


      .addCase(getMoveCategoriesAction.rejected, (state: MoveList) => {
        state.isLoading = false;
      })
      .addCase(getMoveCategoriesAction.pending, (state: MoveList) => {
        state.isLoading = true;
      })
      .addCase(
        getMoveCategoriesAction.fulfilled,
        (state: MoveList, { payload }) => {
          if (payload?.data) {
            state.CategoriesList = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )

      .addCase(getMoveDamageClassesAction.rejected, (state: MoveList) => {
        state.isLoading = false;
      })
      .addCase(getMoveDamageClassesAction.pending, (state: MoveList) => {
        state.isLoading = true;
      })
      .addCase(
        getMoveDamageClassesAction.fulfilled,
        (state: MoveList, { payload }) => {
          if (payload?.data) {
            state.DamageClassList = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )


      .addCase(getMoveLearnMethodsAction.rejected, (state: MoveList) => {
        state.isLoading = false;
      })
      .addCase(getMoveLearnMethodsAction.pending, (state: MoveList) => {
        state.isLoading = true;
      })
      .addCase(
        getMoveLearnMethodsAction.fulfilled,
        (state: MoveList, { payload }) => {
          if (payload?.data) {
            state.MoveLearnMethods = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )


      .addCase(getMoveTargetAction.rejected, (state: MoveList) => {
        state.isLoading = false;
      })
      .addCase(getMoveTargetAction.pending, (state: MoveList) => {
        state.isLoading = true;
      })
      .addCase(
        getMoveTargetAction.fulfilled,
        (state: MoveList, { payload }) => {
          if (payload?.data) {
            state.MoveTargetsList = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      );
  },
});
export const MoveReducer = MoveSlice.reducer;
export const MoveAction = MoveSlice.actions;
