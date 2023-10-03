import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAbilityDetails } from "Service/PokemonService";
import constant from "config/constant/constant";

export interface GetAbilityList {
  id: number;
}

export const getAbilityDetailsAction = createAsyncThunk(
  "AbilityDetails/getAbilityDetailsAction",
  async (payload: GetAbilityList, { dispatch, getState }) => {
    try {
      const response = await getAbilityDetails(payload);
      if (response.status === constant.APIResponse.defaultStatusCode) {
        return {
          data: response?.data.effect_entries,
          spec: response?.data?.species,
          names: response?.data?.names,
        };
      } else if (response.status === constant.APIResponse.errorStatusCode) {
        return response?.data?.message;
      }
    } catch (error) {
      return error;
    }
  }
);


