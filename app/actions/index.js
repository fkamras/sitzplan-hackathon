export function signUp(user) {
  return {
    type: 'SIGN_UP',
    user
  }
}

export function logIn(username) {
  return {
    type: 'LOG_IN',
    username
  }
}

export function logOut() {
  return {
    type: 'LOG_OUT'
  }
}

export function userSearch(keyword) {
  return {
    type: 'USER_SEARCH',
    keyword
  }
}

export function userSelect(username) {
  return {
    type: 'USER_SELECT',
    username
  }
}
