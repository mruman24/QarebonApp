import { types } from "../Types/auth";

export function loginUser(user) {
  return {
    type: types.LOGIN_EMAIL_REQUEST,
    payload: user
  };
}

export function guestLogin(user) {
  return {
    type: types.SOCIAL_LOGIN_REQUEST,
    payload: user
  };
}

export function sendOTP(user) {
  return {
    type: types.REGISTER_REQUEST,
    payload: user
  };
}

export function verifyOTP(user) {
  return {
    type: types.LOGIN_EMAIL_REQUEST,
    payload: user
  };
}



export function logout() {
  return {
    type: types.USER_LOGOUT,
  };
}

// all HomeArticles
export function gethomeArticles(user) {
  return {
    type: types.GET_PRODUCTS_REQUEST,
    payload: user
  };
}

// GET_ARTICLES_REQUEST
export function gethomeEvents(user) {
  return {
    type: types.GET_ARTICLES_REQUEST,
    payload: user
  };
}

// gethomeInfographics
export function gethomeInfographics(user) {
  return {
    type: types.GET_USER_PAYMENT_REQUEST,
    payload: user
  };
}

// gethomeJournals
export function gethomeJournals(user) {
  return {
    type: types.GET_HOMEJOURNELS_REQUEST,
    payload: user
  };
}


// gethomeVideos
export function gethomeVideos(user) {
  return {
    type: types.GET_HOMEVIDEOS_REQUEST,
    payload: user
  };
}

// interactionSections
export function getinteractionSections(user) {
  return {
    type: types.GET_INTERACTION_REQUEST,
    payload: user
  };
}


// trainingCourses
export function gettrainingCourses(user) {
  return {
    type: types.GET_TRAININGCOURSES_REQUEST,
    payload: user
  };
}

// homeBooks
export function gethomeBooks(user) {
  return {
    type: types.GET_HOMEBOOKS_REQUEST,
    payload: user
  };
}


// newsfeeds
export function getnewsfeeds(user) {
  return {
    type: types.GET_NEWSFEED_REQUEST,
    payload: user
  };
}

// getsliders
export function getsliders(user) {
  return {
    type: types.GET_SLIDERS_REQUEST,
    payload: user
  };
}

// getcategories
export function getcategories(user) {
  return {
    type: types.GET_CATEGORIES_REQUEST,
    payload: user
  };
}

// saveDataAgain
export function saveDataAgain(user) {
  return {
    type: types.SAVE_DATA_REQUEST,
    payload: user
  };
}