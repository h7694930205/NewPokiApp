import api from "config/api";
import { hasSuccess, hasError } from "./ApiHepler";
import { appClient } from "./networkService";
import { GetBerryDetailsList, GetBerryFirmnessesList, GetBerryFlavors, GetBerryList, } from "redux/BerrySlice/BerryAsyncThunk";

export async function getAllBerryDetails(payload: GetBerryList) {
    try {
      const response = await appClient.get(
        api.endPoint.berry +
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

  export async function getBerryDetails(payload: GetBerryDetailsList) {
    try {
      const response = await appClient.get(api.endPoint.berry + payload.id );
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getBerryFirmnesses (payload: GetBerryFirmnessesList) {
    try {
      const response = await appClient.get(api.endPoint.berryFirmness + payload.id);
      console.log(response,"test")
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getBerryFlavors  (payload: GetBerryFlavors) {
    try {
      const response = await appClient.get(api.endPoint.berryFlavor + payload.id);
      console.log(response,"testsdfa")
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }