import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllContestDetails, getContestEffects, getContestTypes, getSuperContestEffects } from "Service/ContestService";
import constant from "config/constant/constant";

export interface GetContestList {
    id: number;
    offset: number;
    limit: number;
}

export interface GetImageList {
    url:number
    id: number;
}

export interface GetContestTypes {
  id: number;
}


export interface GetContestEffects {
  id: number;
}

export interface GetSuperContestEffects {
  id: number;
}

export const getAllContestDetailsAction = createAsyncThunk(
    "details/getAllContestDetailsAction",
    async (payload:GetContestList, { dispatch, getState}) => {
        try {
            const response = await getAllContestDetails(payload);
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

export const getContestTypesAction = createAsyncThunk(
    "Contest/getContestTypesAction",
    async (payload: GetContestTypes, { dispatch, getState }) => {
      try {
        const response = await getContestTypes(payload);
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
  
  
export const getContestEffectsAction = createAsyncThunk(
  "Contest/getContestEffectsAction",
  async (payload: GetContestEffects, { dispatch, getState }) => {
    try {
      const response = await getContestEffects(payload);
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


export const getSuperContestEffectsAction = createAsyncThunk(
  "Contest/getSuperContestEffectsAction",
  async (payload: GetSuperContestEffects, { dispatch, getState }) => {
    try {
      const response = await getSuperContestEffects(payload);
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


