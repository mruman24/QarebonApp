import { types } from "../Types/product";

let initialState = {
  cartProducts: []
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {

    // get Establishment Products
    case types.GET_ESTABLISHMENT_PRODUCTS_REQUEST:
      return {
        ...state,
        loadingEstablish: true,
      };
    case types.GET_ESTABLISHMENT_PRODUCTS_SUCCESS:
      return {
        ...state,
        establistmentProducts: action.payload,
        loadingEstablish: false,
      };
    case types.GET_ESTABLISHMENT_PRODUCTS_FAILURE:
      return {
        ...state,
        loadingEstablish: false,
      };

    // get Establishment Addones
    case types.GET_PRODUCTS_ADDONES_REQUEST:
      return {
        ...state,
        loadingAddOnes: true,
      };
    case types.GET_PRODUCTS_ADDONES_SUCCESS:
      return {
        ...state,
        establistmentAddOnes: action.payload,
        loadingAddOnes: false,
      };
    case types.GET_PRODUCTS_ADDONES_FAILURE:
      return {
        ...state,
        loadingAddOnes: false,
      };


    // Get Customer Location
    case types.LOCATION_USER_REQUEST:
      return {
        ...state,
        loadingLocation: true,
      };
    case types.LOCATION_USER_SUCCESS:
      return {
        ...state,
        userLocation: action.payload,
        loadingLocation: false,
      };
    case types.LOCATION_USER_FAILURE:
      return {
        ...state,
        loadingLocation: false,
      };


    // Add Cart Products
    case types.ADD_CART_REQUEST:
      return {
        ...state,
        cartLoading: true,
      };
    case types.ADD_CART_PRODUCTS:
      return {
        ...state,
        cartProducts: action.payload,
        cartLoading: false,
      };

    // create order
    case types.CREATE_ORDER_REQUEST:
      return {
        ...state,
        loadingOrder: true,
      };
    case types.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        orderCreate: action.payload,
        cartProducts: [],
        loadingOrder: false,
      };
    case types.CREATE_ORDER_FAILURE:
      return {
        ...state,
        loadingOrder: false,
      };


      // history Orders
      case types.ALL_HISTORY_ORDER_REQUEST:
        return {
          ...state,
          loadingHistory: true,
        };
      case types.ALL_HISTORY_ORDER_SUCCESS:
        return {
          ...state,
          orderHistory: action.payload,
          loadingHistory: false,
        };
      case types.ALL_HISTORY_ORDER_FAILURE:
        return {
          ...state,
          loadingHistory: false,
        };


         // Detatails Orders
      case types.GET_ORDER_DETAIL_REQUEST:
        return {
          ...state,
          loadingSingleOrder: true,
        };
      case types.GET_ORDER_DETAIL_SUCCESS:
        return {
          ...state,
          orderDetail: action.payload,
          loadingSingleOrder: false,
        };
      case types.GET_ORDER_DETAIL_FAILURE:
        return {
          ...state,
          loadingSingleOrder: false,
        };


  // Tip & Review
      case types.ORDER_TIP_REVIEW_REQUEST:
        return {
          ...state,
          loadingTip: true,
        };
      case types.ORDER_TIP_REVIEW_SUCCESS:
        return {
          ...state,
          orderReview: action.payload,
          loadingTip: false,
        };
      case types.ORDER_TIP_REVIEW_FAILURE:
        return {
          ...state,
          loadingTip: false,
        };

    default: {
      return { ...state };
    }
  }
};

export default productReducer;