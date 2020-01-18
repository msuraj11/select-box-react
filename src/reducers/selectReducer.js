import * as actionTypes from "../constants/actionTypes";

const initialState = { repo_data: [], loading: false };
export const selectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return { repo_data: [], loading: true };
    case actionTypes.SELECT_API:
      return { repo_data: action.payload, loading: false };
    default:
      return state;
  }
};
