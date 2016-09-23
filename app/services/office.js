const Office = {

  create(data) {
    return fetch('/api/offices', {
      method: 'POST',
      body: data
    });
  },

  addMap(office_id, data) {
    return fetch('/api/maps', {
      method: 'POST',
      body: { ...data, office_id }
    });
  },

  getAll() {
    return fetch('/api/offices', {
      methos: 'GET'
    });
  }

};

export default Office;
