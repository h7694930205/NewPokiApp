export function hasSuccess(data: any) {
  if (data && typeof data !== "undefined" && data === true) {
    return data;
  }
  return {
    data: data.responseData ? data.responseData : data,
    error: false,
    status: 200,
  };
}

export function hasError(err: any) {
  if (err === "Network Error") {
    return {
      data: null,
      error: "Please check your internet connection.",
      status: 0,
    };
  }
  return err;
}

export const setTotalPageCount = (totalRecords: number, limit: number) => {
  return Math.ceil(totalRecords / limit);
};
