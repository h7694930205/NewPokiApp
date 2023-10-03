import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllEncounterDetails, getEncounterConditions, getEncounterConditionsValue, getEncounterMethod } from "Service/EncounterService";
import constant from "config/constant/constant";

export interface GetEncounterList {
    id: number;
    offset: number;
    limit: number;
}


export interface GetEncounterMethodsList {
  id: number;
}

export interface GetEncounterConditionsList {
  id: number;
}

export interface GetEncounterConditionsValueList {
  id: number;
}
export interface GetImageList {
    id: number;
}

export const getAllEncounterDetailsAction = createAsyncThunk(
    "details/getAllContestDetailsAction",
    async (payload:GetEncounterList, { dispatch, getState}) => {
        try {
            const response = await getAllEncounterDetails(payload);
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

export const getEncounterMethodAction = createAsyncThunk(
    "encounterDetails/getEncounterMethodAction",
    async (payload: GetEncounterMethodsList, { dispatch, getState }) => {
      try {
        const response = await getEncounterMethod(payload);
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


  export const getEncounterConditionAction = createAsyncThunk(
    "encounterDetails/getEncounterConditionAction",
    async (payload: GetEncounterConditionsList, { dispatch, getState }) => {
      try {
        const response = await getEncounterConditions(payload);
        if (response.status === constant.APIResponse.defaultStatusCode) {
          console.log(response.data,"testing for data")
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


  
  export const getEncounterConditionValueAction = createAsyncThunk(
    "encounterDetails/getEncounterConditionValueAction",
    async (payload: GetEncounterConditionsValueList, { dispatch, getState }) => {
      try {
        const response = await getEncounterConditionsValue(payload);
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