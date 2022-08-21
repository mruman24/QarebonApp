import { Alert } from 'react-native';
import { put, takeEvery, call, delay } from 'redux-saga/effects';
import { types } from '../../Types/auth';
import {
  guestLoginApi, sendOTPAPI, loginUserApi,
  verifyOTPApi,
  gethomeArticlesApi, gethomeInfographicsApi, gethomeJournalsApi,
  gethomeEventsApi, gethomeVideosApi,
  gettrainingCoursesApi,
  gethomeBooksApi, newsfeedsApi, slidersApi,
  getcategoriesApi, getinteractionSectionsApi
} from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../../../Navigation/RootNavigation';
import Toast from 'react-native-toast-message';


// guestLogin
function* guestLogin(action) {
  try {
    const result = yield guestLoginApi(action.payload);
    console.log('Social Media Login Response', result)
    if (result.status == 201) {
      console.log('result.status == 200')
      yield put({ type: types.SOCIAL_LOGIN_SUCCESS, payload: result.message })
      Toast.show({
        type: 'successToast',
        text1: 'Success!',
        text2: 'Guest Login Successfully'
      });
      // yield getProducts(result.message?.tokens?.access?.token)
      navigate('BottomTabView', {
        screen: 'Home',
      })
    }
    else {
      yield put({ type: types.SOCIAL_LOGIN_FAILURE, payload: result.message });
      if (result.message?.error) {

      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.SOCIAL_LOGIN_FAILURE, payload: error });
    console.log("The Error", error);
  }
}

const saveLoginData = async (res) => {
  try {
    //we want to wait for the Promise returned by AsyncStorage.setItem()
    //to be resolved to the actual value before returning the value
    const jsonToken = JSON.stringify(res)
    await AsyncStorage.setItem('userLogin', jsonToken)

  } catch (error) {
  }
  // Toast.show(res.message);
}


// sendOTP
function* sendOTP(action) {
  try {
    const result = yield sendOTPAPI(action.payload);
    console.log('sendOTPAPI Response', result)
    if (result.status == 201) {
      yield put({ type: types.REGISTER_SUCCESS, payload: result.message })
      // Toast.show({
      //   type: 'successToast',
      //   text1: 'Registered Successfully',
      //   text2: 'Thanks For Register With Drink'
      // });
      navigate('AuthStack', {
        screen: 'VerificationCode',
      })
    }
    else {
      yield put({ type: types.REGISTER_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.REGISTER_FAILURE, payload: error });
    console.log("The Error Registered", error);
  }
}


// loginUser
function* loginUser(action) {
  try {
    const result = yield loginUserApi(action.payload);
    console.log('Login Response', result)
    if (result.status == 200) {
      yield put({ type: types.LOGIN_EMAIL_SUCCESS, payload: result.message })
      Toast.show({
        type: 'successToast',
        text1: 'Success!',
        text2: 'Member Login Successfully'
      });
      // yield getProducts(result.message?.tokens?.access?.token)
      // navigate('AuthStack', {
      //   screen: 'HomePage',
      // })
    }
    else {
      yield put({ type: types.LOGIN_EMAIL_FAILURE, payload: result.message });
      if (result.message?.error) {

      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.LOGIN_EMAIL_FAILURE, payload: error });
    console.log("The Error Login", error);
  }
}

// verifyOTP
function* verifyOTP(action) {
  try {
    const result = yield verifyOTPApi(action.payload);
    console.log('verifyOTP Response', result)
    if (result.status == 201) {
      yield put({ type: types.LOGIN_EMAIL_SUCCESS, payload: result.message })
      // result.message.accessToken
      saveLoginData(result.message)
      yield getcategories(result.message.accessToken)
      yield getsliders(result.message.accessToken)
      yield gethomeArticles(result.message.accessToken)
      yield gethomeEvents(result.message.accessToken)
      yield gethomeInfographics(result.message.accessToken)
      yield gethomeJournals(result.message.accessToken)
      yield getinteractionSections(result.message.accessToken)
      yield gethomeVideos(result.message.accessToken)
      yield gettrainingCourses(result.message.accessToken)
      yield gethomeBooks(result.message.accessToken)
      yield getnewsfeeds(result.message.accessToken)

      // 
      Toast.show({
        type: 'successToast',
        text1: 'Login Successfully',
        text2: 'User Login Successfully'
      });
      navigate('BottomTabView', {
        screen: 'Home',
      })
    }
    else {
      yield put({ type: types.LOGIN_EMAIL_FAILURE, payload: result.message });
      if (result.message?.error) {

      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.LOGIN_EMAIL_FAILURE, payload: error });
    console.log("The Error verifyOTP", error);
  }
}



// gethomeArticles
function* gethomeArticles(action) {


  let userData = {
    token: action.payload?.token ? action.payload?.token : action
  }
  // console.log('gethomeArticles Action userData = ', userData)
  try {
    const result = yield gethomeArticlesApi(userData);
    console.log('Get Establishment APi Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_PRODUCTS_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_PRODUCTS_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.GET_PRODUCTS_FAILURE, payload: error });
    console.log("The Error Get Establishment", error);
  }
}

// gethomeEvents
function* gethomeEvents(action) {


  let userData = {
    token: action.payload?.token ? action.payload?.token : action
  }
  // console.log('gethomeEvents Action userData = ', userData)
  try {
    const result = yield gethomeEventsApi(userData);
    console.log('Get gethomeEvents APi Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_ARTICLES_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_ARTICLES_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.GET_ARTICLES_FAILURE, payload: error });
    console.log("The Error Get gethomeEvents", error);
  }
}


// gethomeInfographics
function* gethomeInfographics(action) {
  let userData = {
    token: action.payload?.token ? action.payload?.token : action
  }
  try {
    const result = yield gethomeInfographicsApi(userData);
    console.log('Get gethomeInfographicsApi  Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_USER_PAYMENT_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_USER_PAYMENT_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.GET_USER_PAYMENT_FAILURE, payload: error });
    console.log("The Error  gethomeInfographicsApi", error);
  }
}


// gethomeJournals
function* gethomeJournals(action) {
  let userData = {
    token: action.payload?.token ? action.payload?.token : action
  }
  try {
    const result = yield gethomeJournalsApi(userData);
    console.log('Get gethomeJournalsApi  Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_HOMEJOURNELS_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_HOMEJOURNELS_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.GET_HOMEJOURNELS_FAILURE, payload: error });
    console.log("The Error  gethomeJournalsApi", error);
  }
}


// gethomeVideos
function* gethomeVideos(action) {
  let userData = {
    token: action.payload?.token ? action.payload?.token : action
  }
  try {
    const result = yield gethomeVideosApi(userData);
    console.log('Get gethomeVideosApi  Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_HOMEVIDEOS_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_HOMEVIDEOS_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.GET_HOMEVIDEOS_FAILURE, payload: error });
    console.log("The Error  gethomeVideosApi", error);
  }
}

// getinteractionSections
function* getinteractionSections(action) {
  let userData = {
    token: action.payload?.token ? action.payload?.token : action
  }
  try {
    const result = yield getinteractionSectionsApi(userData);
    console.log('Get getinteractionSectionsApi  Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_INTERACTION_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_INTERACTION_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.GET_INTERACTION_FAILURE, payload: error });
    console.log("The Error  getinteractionSectionsApi", error);
  }
}


// gettrainingCourses
function* gettrainingCourses(action) {
  let userData = {
    token: action.payload?.token ? action.payload?.token : action
  }
  try {
    const result = yield gettrainingCoursesApi(userData);
    console.log('Get gettrainingCoursesApi  Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_TRAININGCOURSES_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_TRAININGCOURSES_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.GET_TRAININGCOURSES_FAILURE, payload: error });
    console.log("The Error  gettrainingCoursesApi", error);
  }
}


// gethomeBooks
function* gethomeBooks(action) {
  let userData = {
    token: action.payload?.token ? action.payload?.token : action
  }
  try {
    const result = yield gethomeBooksApi(userData);
    console.log('Get gethomeBooksApi  Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_HOMEBOOKS_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_HOMEBOOKS_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.GET_HOMEBOOKS_FAILURE, payload: error });
    console.log("The Error  gethomeBooksApi", error);
  }
}



// newsfeeds
function* getnewsfeeds(action) {
  let userData = {
    token: action.payload?.token ? action.payload?.token : action
  }
  try {
    const result = yield newsfeedsApi(userData);
    console.log('Get newsfeedsApi  Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_NEWSFEED_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_NEWSFEED_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.GET_NEWSFEED_FAILURE, payload: error });
    console.log("The Error  newsfeedsApi", error);
  }
}

// getsliders
function* getsliders(action) {
  let userData = {
    token: action.payload?.token ? action.payload?.token : action
  }
  try {
    const result = yield slidersApi(userData);
    console.log('Get getslidersApi  Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_SLIDERS_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_SLIDERS_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.GET_SLIDERS_FAILURE, payload: error });
    console.log("The Error  getslidersApi", error);
  }
}

// getcategories
function* getcategories(action) {
  let userData = {
    token: action.payload?.token ? action.payload?.token : action
  }
  try {
    const result = yield getcategoriesApi(userData);
    console.log('Get getcategoriesApi  Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_CATEGORIES_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_CATEGORIES_FAILURE, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.GET_CATEGORIES_FAILURE, payload: error });
    console.log("The Error  getcategoriesApi", error);
  }
}


// saveDataAgain
function* saveDataAgain(action) {
  yield put({ type: types.LOGIN_EMAIL_SUCCESS, payload: action.payload })

  yield getcategories(action.payload.accessToken)
  yield getsliders(action.payload.accessToken)
  yield gethomeArticles(action.payload.accessToken)
  yield gethomeEvents(action.payload.accessToken)
  yield gethomeInfographics(action.payload.accessToken)
  yield gethomeJournals(action.payload.accessToken)
  yield getinteractionSections(action.payload.accessToken)
  yield gethomeVideos(action.payload.accessToken)
  yield gettrainingCourses(action.payload.accessToken)
  yield gethomeBooks(action.payload.accessToken)
  yield getnewsfeeds(action.payload.accessToken)
  navigate('BottomTabView', {
    screen: 'Home',
  })
}

export function* authWatcher() {

  yield takeEvery(types.SOCIAL_LOGIN_REQUEST, guestLogin);
  // yield takeEvery(types.LOGIN_EMAIL_REQUEST, loginUser);
  yield takeEvery(types.REGISTER_REQUEST, sendOTP);
  yield takeEvery(types.LOGIN_EMAIL_REQUEST, verifyOTP);

  yield takeEvery(types.GET_PRODUCTS_REQUEST, gethomeArticles);
  yield takeEvery(types.GET_ARTICLES_REQUEST, gethomeEvents);

  yield takeEvery(types.GET_USER_PAYMENT_REQUEST, gethomeInfographics);
  yield takeEvery(types.GET_HOMEJOURNELS_REQUEST, gethomeJournals);
  yield takeEvery(types.GET_HOMEVIDEOS_REQUEST, gethomeVideos);
  yield takeEvery(types.GET_INTERACTION_REQUEST, getinteractionSections);


  yield takeEvery(types.GET_TRAININGCOURSES_REQUEST, gettrainingCourses);
  yield takeEvery(types.GET_HOMEBOOKS_REQUEST, gethomeBooks);
  yield takeEvery(types.GET_NEWSFEED_REQUEST, getnewsfeeds);
  yield takeEvery(types.GET_SLIDERS_REQUEST, getsliders);
  yield takeEvery(types.GET_CATEGORIES_REQUEST, getcategories);
  yield takeEvery(types.SAVE_DATA_REQUEST, saveDataAgain);


}