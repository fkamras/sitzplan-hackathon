const User = {

  create(data) {
    return fetch('/api/users', {
      method: 'POST',
      body: data
    });
  }

};

export default User;
