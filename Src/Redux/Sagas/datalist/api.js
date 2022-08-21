import * as CONSTANTS from '../../../Constants';



// getUserProfileApi
export function* getUserProfileApi(user) {
  console.log('Get getUserProfileApi  Api--', user)

  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/users/${user.id}`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// updateUserProfileApi
export function* updateUserProfileApi(user) {
  console.log('updateUserProfileApi  Api--', user)
  const data = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    mobileNumber: user?.mobileNumber,
    email: user?.email,
    gender: user?.gender,
    age: user?.age
  }

  const opt = {
    method: 'PATCH',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },
    body: JSON.stringify(data),
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/users/${user.id}`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}

// getInsideDetailsApi
export function* getInsideDetailsApi(user) {
  console.log('Get getInsideDetailsApi  Api--', user)

  const opt = {
    method: 'GET',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + user?.token,
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/${user?.apiName}/${user.id}`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}