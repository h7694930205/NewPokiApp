import api from "config/api";
import { hasSuccess, hasError } from "./ApiHepler";
import { appClient } from "./networkService";
import { GetImageList } from "redux/PokemonSlice/PokemonAsyncThunk";
import { GetEvolutionChain, GetEvolutionList, GetEvolutionTriggers } from "redux/EvolutionSlice/EvolutionAsyncThunk";

export async function getAllEvolutionDetails(payload: GetEvolutionList) {
    try {
      const response = await appClient.get(
        api.endPoint.evolutionChain +
          "?offset=" +
          payload.offset +
          "&limit=" +
          payload.limit
      );
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getEvolutionChain (payload: GetEvolutionChain) {
    try {
      const response = await appClient.get(api.endPoint.evolutionChain + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getEvolutionTriggers(payload: GetEvolutionTriggers) {
    try {
      const response = await appClient.get(api.endPoint.evolutionTriggers + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

