import { types } from "../Types/datalist";

let initialState = {
  cartProducts: []
};
const datalistReducer = (state = initialState, action) => {
  switch (action.type) {

    // get Establishment Products
    case types.USER_REQUEST:
      return {
        ...state,
        loadingUser: true,
      };
    case types.USER_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        loadingUser: false,
      };
    case types.USER_FAILURE:
      return {
        ...state,
        loadingUser: false,
      };


       // get Establishment Products
    case types.UPDATE_USER_REQUEST:
      return {
        ...state,
        loadingUserEdit: true,
      };
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        userUpdateProfile: action.payload,
        loadingUserEdit: false,
      };
    case types.UPDATE_USER_FAILURE:
      return {
        ...state,
        loadingUserEdit: false,
      };


         // get Inside Data
    case types.GET_INSIDE_DETAIL_REQUEST:
      return {
        ...state,
        loadingInside: true,
      };
    case types.GET_INSIDE_DETAIL_SUCCESS:
      return {
        ...state,
        articleDataset: action.payload,
        loadingInside: false,
      };
    case types.GET_INSIDE_DETAIL_FAILURE:
      return {
        ...state,
        loadingInside: false,
      };


    default: {
      return { ...state };
    }
  }
};

export default datalistReducer;