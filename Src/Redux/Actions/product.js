import { types } from "../Types/product";



// getEstablishmentProducts
export function getEstablishmentProducts(user) {
  return {
    type: types.GET_ESTABLISHMENT_PRODUCTS_REQUEST,
    payload: user
  };
}

// showProductAddOnes
export function showProductAddOnes(user) {
  return {
    type: types.GET_PRODUCTS_ADDONES_REQUEST,
    payload: user
  };
}

export function userLocation(user) {
  return {
    type: types.LOCATION_USER_REQUEST,
    payload: user
  };
}


// cartItems
export function cartItems(user) {
  return {
    type: types.ADD_CART_REQUEST,
    payload: user
  };
}

// createOrder
export function createOrder(user) {
  return {
    type: types.CREATE_ORDER_REQUEST,
    payload: user
  };
}

// getOrderHistory
export function getOrderHistory(user) {
  return {
    type: types.ALL_HISTORY_ORDER_REQUEST,
    payload: user
  };
}

export function getOrderDetail(user) {
  return {
    type: types.GET_ORDER_DETAIL_REQUEST,
    payload: user
  };
}


// Tip & Review
export function tipReviewOrder(user) {
  return {
    type: types.ORDER_TIP_REVIEW_REQUEST,
    payload: user
  };
}