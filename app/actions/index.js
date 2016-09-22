export function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    user
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
