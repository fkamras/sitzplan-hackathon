import expect from 'expect';
import reducer from '../app/reducers/offices';


describe('offices reducer', () => {

  describe('ADD_OFFICE', () => {

    const berlinOffice = {
      name: 'Berlin'
    };

    const framinghamOffice = {
      name: 'Framingham'
    };

    it('adds the first office', () => {

      expect(
          reducer(undefined, { office: berlinOffice, type: 'ADD_OFFICE' })
        ).toEqual([berlinOffice]);

    });

    it('appends another office', () => {

      expect(
        reducer([berlinOffice], { office: framinghamOffice, type: 'ADD_OFFICE' })
        ).toEqual([berlinOffice, framinghamOffice])

    });

  });

  describe('ADD_MAP', () => {

    const state = [{
      name: 'Berlin',
      id: 69,
      maps: [{
        name: 'Sales',
        office_id: 69
      }]
    }];

    const newMap = {
      name: 'Administration',
      office_id: 69
    };

    it('adds a map to the office', () => {

      expect(
        reducer(state, { map: newMap, type: 'ADD_MAP' })
        ).toEqual([{
          name: 'Berlin',
          id: 69,
          maps: [{
            name: 'Sales',
            office_id: 69
          }, {
            name: 'Administration',
            office_id: 69
          }]
        }]);

    });

  });

  describe('REMOVE_MAP', () => {

    const state = [{
      name: 'Berlin',
      maps: [{
        name: 'IT',
      },{
        name: 'Administration'
      }]
    },{
      name: 'Framingham'
    },{
      name: 'Seattle'
    }];

    it('removes a map from the office', () => {

      expect(
        reducer(state, { officeKey: 0, mapKey: 1, type: 'REMOVE_MAP' })
        ).toEqual([{
          name: 'Berlin',
          maps: [{
            name: 'IT',
          }]
        },{
          name: 'Framingham'
        },{
          name: 'Seattle'
        }]);

    });

    const state2= [{
      name: 'Berlin',
      maps: [{
        name: 'IT',
      },{
        name: 'Administration'
      },{
        name: 'Kitchen'
      }]
    },{ name: 'Framingham' },{ name: 'Seattle' }];

    it('removes a map from the office', () => {

      expect(
        reducer(state2, { officeKey: 0, mapKey: 2, type: 'REMOVE_MAP' })
        ).toEqual([{
          name: 'Berlin',
          maps: [{ name: 'IT' }, { name: 'Administration' }]
        },{
          name: 'Framingham'
        },{
          name: 'Seattle'
        }]);

    });

  });

});
