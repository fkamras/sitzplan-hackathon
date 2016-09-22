function users(state = [], action) {

  switch(action.type) {
    case 'SIGN_UP':
      //do the sign up
      console.log('sign up');
    default:
      return state;
  }

}


export default users;
