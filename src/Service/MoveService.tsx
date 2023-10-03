import api from "config/api";
import { hasSuccess, hasError } from "./ApiHepler";
import { appClient } from "./networkService";
import { GetMove, GetMoveAilmentList, GetMoveBattleStylesList, GetMoveCategoriesList, GetMoveDamageClassesList, GetMoveLearnMethodList, GetMoveList, GetMoveTarget } from "redux/MoveSlice/MoveAsyncThunk";


export async function getAllMoveDetails(payload: GetMoveList) {
  try {
    const response = await appClient.get(
      api.endPoint.move +
      "?offset=" +
      payload.offset +
      "&limit=" +
      payload.limit
      );
      console.log(response,"qwerqwer")
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getMove(payload: GetMove) {
    try {
      const response = await appClient.get(api.endPoint.move + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getMoveAilments (payload: GetMoveAilmentList) {
    try {
      const response = await appClient.get(api.endPoint.moveAilments + payload.id);

      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getMoveBattleStyles(payload: GetMoveBattleStylesList) {
    try {
      const response = await appClient.get(api.endPoint.moveBattleStyle + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getMoveCategories(payload: GetMoveCategoriesList) {
    try {
      const response = await appClient.get(api.endPoint.moveCategory + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getMoveDamageClasses(payload: GetMoveDamageClassesList) {
    try {
      const response = await appClient.get(api.endPoint.moveDamageClass + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }


  export async function getMoveLearnMethod(payload: GetMoveLearnMethodList) {
    try {
      const response = await appClient.get(api.endPoint.moveLearnMethod + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getMoveTarget(payload: GetMoveTarget) {
    try {
      const response = await appClient.get(api.endPoint.moveTarget + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }