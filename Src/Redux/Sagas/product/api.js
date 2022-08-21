import * as CONSTANTS from '../../../Constants';
import axios from 'axios';






// getEstablishmentProductsApi
export function* getEstablishmentProductsApi(user) {

  console.log("getEstablishmentProductsApi---", user)

  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/establishment/products/${user?.establishmentID}/${user?.productID}`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// showProductAddOnesApi
export function* showProductAddOnesApi(user) {

  console.log("showProductAddOnesApi---", user)

  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/establishment/product/addons/${user?.productID}`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// userLocationAPi
export function* userLocationAPi(user) {
  const data = new URLSearchParams();
  data.append('long', user.longitude)
  data.append('lat', user.latitude)

  const opt = {
    method: 'POST',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      // 'Authorization': 'Bearer ' + userToken,
    },
    body: data.toString(),
    json: true,
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/customer/location`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}

// createOrderAPi
export function* createOrderAPi(user) {

  let data = {
    products: user?.products,
    cardId: user?.cardId,
  }
  console.log("createOrderAPi Data is: ", data)
  const opt = {
    method: 'POST',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },
    body: JSON.stringify(data),
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/order/establishment/${user?.establishedID}`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}

// getOrderHistoryAPi
export function* getOrderHistoryAPi(user) {

  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/order/history`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}

export function* getOrderDetailAPi(user) {

  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/order/detail/${user?.orderID}`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// tipReviewOrderAPi
export function* tipReviewOrderAPi(user) {

  let data = {
    rating: user?.rating,
  }
  console.log("tipReviewOrderAPi Data is: ", data)
  const opt = {
    method: 'POST',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },
    body: JSON.stringify(data),
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/order/tip/${user?.orderID}/${user?.percentage}`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}