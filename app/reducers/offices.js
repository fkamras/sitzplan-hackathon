function offices(state = [], action) {

  switch(action.type) {
    case 'ADD_OFFICE':
      return [...state, action.office];
    case 'ADD_MAP':
      return [
        ...state.splice(0, action.officeKey),
        {
          ...state[action.officeKey],
          maps: [...state[action.officeKey].maps, action.map]
        },
        ...state.splice(action.officeKey + 1)
      ];
    case 'REMOVE_MAP':
      return [
        ...state.splice(0, action.officeKey),
        {
          ...state[action.officeKey],
          maps: [
            ...state[action.officeKey].maps.splice(0, action.mapKey),
            ...state[action.officeKey].maps.splice(action.mapKey + 1)
          ]
        },
        ...state.splice(action.officeKey + 1)
      ];
    default:
      return state;
  }

}


export default offices;
