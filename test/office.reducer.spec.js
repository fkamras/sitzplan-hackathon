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
      maps: [{
        name: 'Sales'
      }]
    }];

    const newMap = {
      name: 'Administration'
    };

    it('adds a map to the office', () => {

      expect(
        reducer(state, { officeKey: 0, map: newMap, type: 'ADD_MAP' })
        ).toEqual([{
          name: 'Berlin',
          maps: [{
            name: 'Sales'
          }, {
            name: 'Administration'
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
