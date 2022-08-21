import { Alert } from 'react-native';
import { put, takeEvery, call, delay } from 'redux-saga/effects';
import { types } from '../../Types/product';
import {
  userLocationAPi, getEstablishmentProductsApi,
  showProductAddOnesApi, createOrderAPi,
  getOrderHistoryAPi, getOrderDetailAPi,
  tipReviewOrderAPi
} from './api';
import { navigate } from '../../../Navigation/RootNavigation';
import Toast from 'react-native-toast-message';






// getEstablishmentProducts
function* getEstablishmentProducts(action) {
  try {
    const result = yield getEstablishmentProductsApi(action.payload);
    console.log('Get getEstablishmentProductsApi  Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_ESTABLISHMENT_PRODUCTS_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_ESTABLISHMENT_PRODUCTS_FAILURE, payload: result.message });
      if (result.message?.error) {

      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.GET_ESTABLISHMENT_PRODUCTS_FAILURE, payload: error });
    console.log("The Error  getEstablishmentProductsApi", error);
  }
}


// showProductAddOnes
function* showProductAddOnes(action) {
  try {
    const result = yield showProductAddOnesApi(action.payload);
    console.log('Get showProductAddOnesApi  Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_PRODUCTS_ADDONES_SUCCESS, payload: result.message });
      navigate('DrawerStack', {
        screen: 'AddOns',
        params: {
          establishmentProduct: action.payload?.establishmentProduct,
          establishmentData: action.payload?.establishmentData
        }

      })
    }
    else {
      yield put({ type: types.GET_PRODUCTS_ADDONES_FAILURE, payload: result.message });
      if (result.message?.error) {

      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.GET_PRODUCTS_ADDONES_FAILURE, payload: error });
    console.log("The Error  showProductAddOnesApi", error);
  }
}


function* userLocation(action) {
  try {
    const result = yield userLocationAPi(action.payload);
    // console.log('Location User Response', result)
    if (result.status === 200) {
      yield put({ type: types.LOCATION_USER_SUCCESS, payload: result.message });

    }
    else {
      yield put({ type: types.LOCATION_USER_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.LOCATION_USER_FAILURE, payload: error });
    // console.log("The Error", error);
  }
}



function* cartItems(action) {
  yield put({ type: types.ADD_CART_PRODUCTS, payload: action.payload });
  yield delay(1200);
  Toast.show({
    type: 'successToast',
    text1: 'Product Added Successfully',
    text2: 'Product Add to Cart Successfully'
  });
  navigate('DrawerStack', {
    screen: 'Checkout',
  })

}


function* createOrder(action) {
  try {
    const result = yield createOrderAPi(action.payload);
    console.log('createOrder User Response', result)
    if (result.status === 200) {
      yield put({ type: types.CREATE_ORDER_SUCCESS, payload: result.message });
      Toast.show({
        type: 'successToast',
        text1: 'Success',
        text2: 'Order Created Successfully'
      });
      let data = {
        orderID: result.message?.id,
        token: action.payload?.token,
        orderStatus: result.message?.order_status
      }
      yield orderNextDetail(data)
      // navigate('DrawerStack', {
      //   screen: 'Order',
      // })
    }
    else {
      yield put({ type: types.CREATE_ORDER_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.CREATE_ORDER_FAILURE, payload: error });
    console.log("The Error createOrder", error);
  }
}

// getOrderHistory
function* getOrderHistory(action) {
  try {
    const result = yield getOrderHistoryAPi(action.payload);
    console.log('getOrderHistory User Response', result)
    if (result.status === 200) {
      yield put({ type: types.ALL_HISTORY_ORDER_SUCCESS, payload: result.message });

    }
    else {
      yield put({ type: types.ALL_HISTORY_ORDER_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.ALL_HISTORY_ORDER_FAILURE, payload: error });
    console.log("The Error getOrderHistory", error);
  }
}


// getOrderDetail
function* getOrderDetail(action) {
  try {
    const result = yield getOrderDetailAPi(action.payload);
    console.log('getOrderDetail User Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_ORDER_DETAIL_SUCCESS, payload: result.message });
      if (action.payload?.orderStatus == "complete") {
        navigate('DrawerStack', {
          screen: 'OrderConfirmation',
        })
      }
      else {
        navigate('DrawerStack', {
          screen: 'Order',
        })
      }
    }
    else {
      yield put({ type: types.GET_ORDER_DETAIL_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.GET_ORDER_DETAIL_FAILURE, payload: error });
    console.log("The Error getOrderDetail", error);
  }
}


function* orderNextDetail(action) {
  console.log('action action Response', action)
  try {
    const result = yield getOrderDetailAPi(action);
    console.log('orderNextDetail User Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_ORDER_DETAIL_SUCCESS, payload: result.message });
      if (action?.orderStatus == "complete") {
        navigate('DrawerStack', {
          screen: 'OrderConfirmation',
        })
      }
      else {
        navigate('DrawerStack', {
          screen: 'Order',
        })
      }
    }
    else {
      yield put({ type: types.GET_ORDER_DETAIL_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.GET_ORDER_DETAIL_FAILURE, payload: error });
    console.log("The Error getOrderDetail", error);
  }
}


// tipReviewOrder
function* tipReviewOrder(action) {
  try {
    const result = yield tipReviewOrderAPi(action.payload);
    console.log('tipReviewOrder User Response', result)
    if (result.status === 200) {
      yield put({ type: types.ORDER_TIP_REVIEW_SUCCESS, payload: result.message });
      Toast.show({
        type: 'successToast',
        text1: 'Success',
        text2: 'Successfully given Review to Establishment'
      });
    }
    else {
      yield put({ type: types.ORDER_TIP_REVIEW_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.ORDER_TIP_REVIEW_FAILURE, payload: error });
    console.log("The Error tipReviewOrder", error);
  }
}


export function* productWatcher() {

  yield takeEvery(types.GET_ESTABLISHMENT_PRODUCTS_REQUEST, getEstablishmentProducts);
  yield takeEvery(types.GET_PRODUCTS_ADDONES_REQUEST, showProductAddOnes);


  yield takeEvery(types.LOCATION_USER_REQUEST, userLocation);
  yield takeEvery(types.ADD_CART_REQUEST, cartItems);
  yield takeEvery(types.CREATE_ORDER_REQUEST, createOrder);
  yield takeEvery(types.ALL_HISTORY_ORDER_REQUEST, getOrderHistory);
  yield takeEvery(types.GET_ORDER_DETAIL_REQUEST, getOrderDetail);
  yield takeEvery(types.ORDER_TIP_REVIEW_REQUEST, tipReviewOrder);


}