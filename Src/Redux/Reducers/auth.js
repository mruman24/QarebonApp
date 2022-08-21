import { types } from "../Types/auth";

let initialState = {
  registerEmail: null,
  loginEmail: null,
  allProducts: [],
  paymentCards: []
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    //  Register
    case types.REGISTER_REQUEST:
      return {
        ...state,
        loadingRegister: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        otpMessage: action.payload,
        loadingRegister: false,
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        loadingRegister: false,
      };

    //  Login Email
    case types.LOGIN_EMAIL_REQUEST:
      return {
        ...state,
        loadingLogin: true,
      };
    case types.LOGIN_EMAIL_SUCCESS:
      return {
        ...state,
        loginEmail: action.payload,
        loadingLogin: false,
      };
    case types.LOGIN_EMAIL_FAILURE:
      return {
        ...state,
        loadingLogin: false,
      };

    // socail Login
    case types.SOCIAL_LOGIN_REQUEST:
      return {
        ...state,
        loadingSocial: true,
      };
    case types.SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
        loginEmail: action.payload,
        loadingSocial: false,
      };
    case types.SOCIAL_LOGIN_FAILURE:
      return {
        ...state,
        loadingSocial: false,
      };


    // Get allHomeArticles
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loadingProduct: true,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        allHomeArticles: action.payload,
        loadingProduct: false,
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loadingProduct: false,
      };

    // Get homeEvents
    case types.GET_ARTICLES_REQUEST:
      return {
        ...state,
        loadinghomeEvents: true,
      };
    case types.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        allhomeEvents: action.payload,
        loadinghomeEvents: false,
      };
    case types.GET_ARTICLES_FAILURE:
      return {
        ...state,
        loadinghomeEvents: false,
      };

    // Get User Payments
    case types.GET_USER_PAYMENT_REQUEST:
      return {
        ...state,
        loadingCards: true,
      };
    case types.GET_USER_PAYMENT_SUCCESS:
      return {
        ...state,
        homeInfographics: action.payload,
        loadingCards: false,
      };
    case types.GET_USER_PAYMENT_FAILURE:
      return {
        ...state,
        loadingCards: false,
      };

    // gethomeJournals
    case types.GET_HOMEJOURNELS_REQUEST:
      return {
        ...state,
        loadingCards: true,
      };
    case types.GET_HOMEJOURNELS_SUCCESS:
      return {
        ...state,
        homeJournals: action.payload,
        loadingCards: false,
      };
    case types.GET_HOMEJOURNELS_FAILURE:
      return {
        ...state,
        loadingCards: false,
      };


    // getinteractionSections
    case types.GET_INTERACTION_REQUEST:
      return {
        ...state,
        loadingCards: true,
      };
    case types.GET_INTERACTION_SUCCESS:
      return {
        ...state,
        interactionSections: action.payload,
        loadingCards: false,
      };
    case types.GET_INTERACTION_FAILURE:
      return {
        ...state,
        loadingCards: false,
      };


    // gettrainingCourses
    case types.GET_TRAININGCOURSES_REQUEST:
      return {
        ...state,
        loadingCards: true,
      };
    case types.GET_TRAININGCOURSES_SUCCESS:
      return {
        ...state,
        trainingCourses: action.payload,
        loadingCards: false,
      };
    case types.GET_TRAININGCOURSES_FAILURE:
      return {
        ...state,
        loadingCards: false,
      };


    // homeBooks
    case types.GET_HOMEBOOKS_REQUEST:
      return {
        ...state,
        loadingCards: true,
      };
    case types.GET_HOMEBOOKS_SUCCESS:
      return {
        ...state,
        homeBooks: action.payload,
        loadingCards: false,
      };
    case types.GET_HOMEBOOKS_FAILURE:
      return {
        ...state,
        loadingCards: false,
      };


    // homeVideos
    case types.GET_HOMEVIDEOS_REQUEST:
      return {
        ...state,
        loadingCards: true,
      };
    case types.GET_HOMEVIDEOS_SUCCESS:
      return {
        ...state,
        homeVideos: action.payload,
        loadingCards: false,
      };
    case types.GET_HOMEVIDEOS_FAILURE:
      return {
        ...state,
        loadingCards: false,
      };


    // newsfeeds
    case types.GET_NEWSFEED_REQUEST:
      return {
        ...state,
        loadingCards: true,
      };
    case types.GET_NEWSFEED_SUCCESS:
      return {
        ...state,
        newsfeeds: action.payload,
        loadingCards: false,
      };
    case types.GET_NEWSFEED_FAILURE:
      return {
        ...state,
        loadingCards: false,
      };

    // sliders
    case types.GET_SLIDERS_REQUEST:
      return {
        ...state,
        loadingCards: true,
      };
    case types.GET_SLIDERS_SUCCESS:
      return {
        ...state,
        sliders: action.payload,
        loadingCards: false,
      };
    case types.GET_SLIDERS_FAILURE:
      return {
        ...state,
        loadingCards: false,
      };


    // categories
    case types.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        loadingCards: true,
      };
    case types.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loadingCards: false,
      };
    case types.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        loadingCards: false,
      };


    case types.USER_LOGOUT:
      // setRoot('LoginView');
      return initialState;

    default: {
      return { ...state };
    }
  }
};

export default authReducer;