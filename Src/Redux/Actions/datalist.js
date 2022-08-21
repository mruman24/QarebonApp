import { types } from "../Types/datalist";


// getUserProfile
export function getUserProfile(user) {
  return {
    type: types.USER_REQUEST,
    payload: user
  };
}

// updateUserProfile
export function updateUserProfile(user) {
  return {
    type: types.UPDATE_USER_REQUEST,
    payload: user
  };
}


// getInsideDetails
export function getInsideDetails(user) {
  return {
    type: types.GET_INSIDE_DETAIL_REQUEST,
    payload: user
  };
}

// homeArticles
// homeEvents
// homeInfographics
// homeJournals
// homeVideos
// interactionSections
// trainingCourses
// homeBooks