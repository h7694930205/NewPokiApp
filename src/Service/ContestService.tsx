import api from "config/api";
import { hasSuccess, hasError } from "./ApiHepler";
import { appClient } from "./networkService";
import { GetContestEffects, GetContestList, GetContestTypes, GetImageList, GetSuperContestEffects } from "redux/ContestSlice/ContestAsyncThunk";

export async function getAllContestDetails(payload: GetContestList) {
    try {
      const response = await appClient.get(
        api.endPoint.contestType +
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



  export async function getContestTypes (payload: GetContestTypes) {
    try {
      const response = await appClient.get(api.endPoint.contestType + payload.id);
      console.log(response,"test")
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getContestEffects (payload: GetContestEffects) {
    try {
      const response = await appClient.get(api.endPoint.contestEffects + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getSuperContestEffects (payload: GetSuperContestEffects) {
    try {
      const response = await appClient.get(api.endPoint.superContestEffect + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }
