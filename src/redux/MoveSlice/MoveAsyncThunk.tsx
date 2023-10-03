import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllMoveDetails, getMove, getMoveAilments, getMoveBattleStyles, getMoveCategories, getMoveDamageClasses, getMoveLearnMethod, getMoveTarget } from "Service/MoveService";
import constant from "config/constant/constant";

export interface GetMoveList {
    id: number;
    offset: number;
    limit: number;
}

export interface GetMoveAilmentList {
  id: number;
}

export interface GetMoveBattleStylesList {
  id: number;
}

export interface GetMoveCategoriesList {
  id: number;
}

export interface GetMoveDamageClassesList {
  id: number;
}

export interface GetMoveLearnMethodList {
  id: number;
}


export interface GetMove {
  id: number;
}



export interface GetMoveTarget {
  id: number;
}

export const getAllMoveDetailsAction = createAsyncThunk(
    "details/getAllContestDetailsAction",
    async (payload:GetMoveList, { dispatch, getState}) => {
        try {
            const response = await getAllMoveDetails(payload);
            if (response.status === constant.APIResponse.defaultStatusCode) {
              return {
                data: response?.data?.results,
                count: response?.data?.count,
              };
            } else if (response.status === constant.APIResponse.errorStatusCode) {
              return response?.data?.message;
            }
          } catch (error) {
            return error;
          }
    }
);

export const getMoveAction = createAsyncThunk(
    "Move/getMoveAction",
    async (payload: GetMove, { dispatch, getState }) => {
      try {
        const response = await getMove(payload);
        console.log(response,"testing data")
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );


  export const getMoveAilmentAction = createAsyncThunk(
    "Move/getMoveAilmentAction",
    async (payload: GetMoveAilmentList, { dispatch, getState }) => {
      try {
        const response = await getMoveAilments(payload);
        console.log(response,"testonetest")
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );


  export const getMoveBattleStylesAction = createAsyncThunk(
    "Move/getMoveBattleStylesAction",
    async (payload: GetMoveBattleStylesList, { dispatch, getState }) => {
      try {
        const response = await getMoveBattleStyles(payload);
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data,
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );




  export const getMoveCategoriesAction = createAsyncThunk(
    "Move/getMoveCategoriesAction",
    async (payload: GetMoveCategoriesList, { dispatch, getState }) => {
      try {
        const response = await getMoveCategories(payload);
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data,
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );


  export const getMoveDamageClassesAction = createAsyncThunk(
    "Move/getMoveDamageClassesAction",
    async (payload: GetMoveDamageClassesList, { dispatch, getState }) => {
      try {
        const response = await getMoveDamageClasses(payload);
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data,
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );


  export const getMoveLearnMethodsAction = createAsyncThunk(
    "Move/getMoveLearnMethodsAction",
    async (payload: GetMoveLearnMethodList, { dispatch, getState }) => {
      try {
        const response = await getMoveLearnMethod(payload);
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data,
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );


  export const getMoveTargetAction = createAsyncThunk(
    "Move/getMoveTargetAction",
    async (payload: GetMoveTarget, { dispatch, getState }) => {
      try {
        const response = await getMoveTarget(payload);
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );