const Office = {

  create(data) {
    return fetch('/api/offices', {
      method: 'POST',
      body: data
    });
  }

};

export default Office;
