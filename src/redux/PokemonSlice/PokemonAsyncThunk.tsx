import { createAsyncThunk } from "@reduxjs/toolkit";
import constant from "../../config/constant/constant";
import { getAllDetails, getPokemonDetails } from "Service/PokemonService";

export interface GetPokemonList {
  id: number;
  offset: number;
  limit: number;
}

export interface GetImageList {
  id: number;
}

export const getAllDetailsAction = createAsyncThunk(
  "details/getAllDetailsAction",
  async (payload: GetPokemonList, { dispatch, getState }) => {
    try {
      const response = await getAllDetails(payload);
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
export const getPokemonDetailsAction = createAsyncThunk(
  "pokemonDetails/getPokemonDetailsAction",
  async (payload: GetImageList, { dispatch, getState }) => {
    try {
      const response = await getPokemonDetails(payload);
      if (response.status === constant.APIResponse.defaultStatusCode) {
        return {
          data: response?.data,
          spec: response?.data?.species,
          name: response?.data?.name,
          order: response?.data?.order,
          weight: response?.data?.weight,
          height: response?.data?.height,
        };
      } else if (response.status === constant.APIResponse.errorStatusCode) {
        return response?.data?.message;
      }
    } catch (error) {
      return error;
    }
  }
);
