import api from "config/api";
import { hasSuccess, hasError } from "./ApiHepler";
import { appClient } from "./networkService";
import { GetEncounterConditionsList, GetEncounterList, GetEncounterMethodsList } from "redux/EncounterSlice/EncounterAsyncThunk";

export async function getAllEncounterDetails(payload: GetEncounterList) {
    try {
      const response = await appClient.get(
        api.endPoint.encounterMethod +
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

  export async function getEncounterMethod(payload: GetEncounterMethodsList) {
    try {
      const response = await appClient.get(api.endPoint.encounterMethod + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getEncounterConditions(payload: GetEncounterConditionsList) {
    try {
      const response = await appClient.get(api.endPoint.encounterConditions + payload.id);
      console.log(response,"123434")
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getEncounterConditionsValue(payload: GetEncounterConditionsList) {
    try {
      const response = await appClient.get(api.endPoint.encounterConditionValues + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }