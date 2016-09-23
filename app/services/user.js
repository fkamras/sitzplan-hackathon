const User = {

  create(data) {
    return fetch('/api/users', {
      method: 'POST',
      body: data
    });
  },

  getAvatarList() {
    return fetch('/api/avatars', {
      method: 'GET'
    });
  }

};

export default User;
