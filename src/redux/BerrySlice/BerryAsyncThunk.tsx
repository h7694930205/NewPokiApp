import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBerryDetails, getBerryDetails, getBerryFirmnesses, getBerryFlavors } from "Service/BerryService";
import constant from "config/constant/constant";

export interface GetBerryList {
    id: number;
    offset: number;
    limit: number;
  }

  export interface GetBerryDetailsList {
    // url:number;
    id: number;
  }
  
  export interface GetBerryFirmnessesList {
    id: number;
  }

  export interface GetBerryFlavors {
    // url:number;
    id: number;
  }


  export const getAllBerryDetailsAction = createAsyncThunk(
    "details/getAllBerryDetailsAction",
    async (payload: GetBerryList, { dispatch, getState }) => {
      try {
        const response = await getAllBerryDetails(payload);
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
  export const getBerryDetailsAction = createAsyncThunk(
    "Berry/getBerryDetailsAction",
    async (payload: GetBerryDetailsList, { dispatch, getState }) => {
      try {
        const response = await getBerryDetails(payload);
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

  export const getBerryFirmnessesAction = createAsyncThunk(
    "Berry/getBerryFirmnessesAction",
    async (payload: GetBerryFirmnessesList, { dispatch, getState }) => {
      try {
        const response = await getBerryFirmnesses(payload);
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


  export const getBerryFlavorsAction = createAsyncThunk(
    "Berry/getBerryFlovorsAction",
    async (payload: GetBerryFlavors, { dispatch, getState }) => {
      try {
        const response = await getBerryFlavors(payload);
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
