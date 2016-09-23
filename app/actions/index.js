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

//Offices

export function addOffice(office) {
  return {
    type: 'ADD_OFFICE',
    office
  }
}

export function addMap(map) {
  return {
    type: 'ADD_MAP',
    map
  }
}

export function removeMap(officeKey, mapKey) {
 return {
    type: 'REMOVE_MAP',
    officeKey,
    mapKey
  }
}
