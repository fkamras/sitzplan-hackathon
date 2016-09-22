const User = {

  create(data) {
    return fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

};

export default User;
