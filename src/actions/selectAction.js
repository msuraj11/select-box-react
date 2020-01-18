import * as actionTypes from "../constants/actionTypes";

export const apiData = role => ({
  type: actionTypes.LOADING,
  url: role
});
