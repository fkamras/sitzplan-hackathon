const Office = {

  create(data) {
    return fetch('/api/offices', {
      method: 'POST',
      body: data
    });
  },

  addMap(data) {
    return fetch('/api/maps', {
      method: 'POST',
      body: data
    });
  },

  getAll() {
    return fetch('/api/offices', {
      methos: 'GET'
    });
  }

};

export default Office;
