import * as CONSTANTS from '../../../Constants';
import axios from 'axios';



// guestLoginApi
export function* guestLoginApi(user) {

  const opt = {
    method: 'POST',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
    },
    body: JSON.stringify(user),
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/guests`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// sendOTPAPI
export function* sendOTPAPI(user) {

  console.log('Register sendOTPAPI', user)
  const opt = {
    method: 'POST',
    headers: {
      "accept": '*/*',
      "Content-Type": 'application/json',
    },
    body: JSON.stringify(user),
    // json: true,
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/send-otp`, opt);
  console.log('response---', response)
  const message = yield response.json();
  console.log('message====', message)
  return yield ({ status: response.status, message })
}

// loginUserApi
export function* loginUserApi(user) {

  console.log('Login loginUserApi', user)
  const opt = {
    method: 'POST',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
    },
    body: JSON.stringify(user),
    // json: true,
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/login`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// verifyOTPApi
export function* verifyOTPApi(user) {

  // console.log('Register verifyOTPApi', user)
  const opt = {
    method: 'POST',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
    },
    body: JSON.stringify(user),
    // json: true,
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/verify-otp`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// gethomeArticlesApi
export function* gethomeArticlesApi(user) {


  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/homeArticles`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// gethomeEventsApi
export function* gethomeEventsApi(user) {

  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/homeEvents`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}

// gethomeInfographicsApi
export function* gethomeInfographicsApi(user) {

  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/homeInfographics`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// gethomeJournalsApi
export function* gethomeJournalsApi(user) {

  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/homeJournals`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}

// gethomeVideosApi
export function* gethomeVideosApi(user) {

  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/homeVideos`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}

// gettrainingCoursesApi
export function* gettrainingCoursesApi(user) {

  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/trainingCourses`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}

// gethomeBooksApi
export function* gethomeBooksApi(user) {

  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/homeBooks`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// newsfeedsApi
export function* newsfeedsApi(user) {

  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/newsfeeds`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}

// getinteractionSectionsApi
export function* getinteractionSectionsApi(user) {

  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/interactionSections`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// slidersApi
export function* slidersApi(user) {

  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/sliders`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}

// getcategoriesApi
export function* getcategoriesApi(user) {

  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/categories`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}

// // addCardVerifyApi
// export function* addCardVerifyApi(user) {

//   let data = {
//     stripeToken: user?.stripeToken,
//     name_on_card: user?.name_on_card,
//     exp_month: user?.exp_month,
//     exp_year: user?.exp_year,
//     card_number: user?.card_number,
//     brand: user?.brand,
//   }
//   console.log("addCardVerifyApi Data is: ", data)
//   const opt = {
//     method: 'POST',
//     headers: {
//       "accept": 'application/json',
//       "Content-Type": 'application/json',
//       'Authorization': 'Bearer ' + user?.token,
//     },
//     body: JSON.stringify(data),
//   }
//   const response = yield fetch(`${CONSTANTS.BASE_URL}/users/payment/stripe`, opt);
//   console.log("/users/payment/stripe Data is: ", response)
//   const message = yield response;
//   console.log("/users/payment/stripe message is: ", message)
//   return yield ({ status: response.status, message })
// }