import { Alert } from 'react-native';
import { put, takeEvery, call, delay } from 'redux-saga/effects';
import { types } from '../../Types/datalist';
import {
  getUserProfileApi, updateUserProfileApi,
  getInsideDetailsApi
} from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../../../Navigation/RootNavigation';
import Toast from 'react-native-toast-message';


function* getUserProfile(action) {

  try {
    const result = yield getUserProfileApi(action.payload);
    console.log('Get getUserProfileApi  Response', result)
    if (result.status === 200) {
      yield put({ type: types.USER_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.USER_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.USER_FAILURE, payload: error });
    console.log("The Error  getUserProfileApi", error);
  }
}

// updateUserProfile
function* updateUserProfile(action) {

  try {
    const result = yield updateUserProfileApi(action.payload);
    console.log('updateUserProfileApi  Response', result)
    if (result.status === 200) {
      yield put({ type: types.UPDATE_USER_SUCCESS, payload: result.message });
      Toast.show({
        type: 'successToast',
        text1: 'Success',
        text2: 'Profile Updated Successfully'
      });
      navigate('BottomTabView', {
        screen: 'PersonalAccount',
      })
    }
    else {
      yield put({ type: types.UPDATE_USER_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.UPDATE_USER_FAILURE, payload: error });
    console.log("The Error  updateUserProfileApi", error);
  }
}


function* getInsideDetails(action) {

  try {
    const result = yield getInsideDetailsApi(action.payload);
    console.log('Get getInsideDetailsApi  Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_INSIDE_DETAIL_SUCCESS, payload: result.message });
      navigate('EducationalStack', {
        screen: 'ReadArticle',
        params: {
          clickOption: action.payload.clickOption,
          headerName: action.payload.headerName
        }
      })
    }
    else {
      yield put({ type: types.GET_INSIDE_DETAIL_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.GET_INSIDE_DETAIL_FAILURE, payload: error });
    console.log("The Error  getInsideDetailsApi", error);
  }
}

export function* datalistWatcher() {

  yield takeEvery(types.USER_REQUEST, getUserProfile);
  yield takeEvery(types.UPDATE_USER_REQUEST, updateUserProfile);
  yield takeEvery(types.GET_INSIDE_DETAIL_REQUEST, getInsideDetails);


  // 
}