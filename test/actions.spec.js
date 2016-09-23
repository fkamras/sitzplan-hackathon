import expect from 'expect'

import * as actions from '../app/actions/index.js'

describe('actions', () => {
  it('setCurrentUser', () => {
    const user = 'theUser';
    const expectedAction = {
      type: 'SET_CURRENT_USER',
      user
    }
    expect(actions.setCurrentUser(user)).toEqual(expectedAction)
  });
  it('addOffice', () => {
    const office = 'theOffice';
    const expectedAction = {
      type: 'ADD_OFFICE',
      office
    }
    expect(actions.addOffice(office)).toEqual(expectedAction)
  });
  it('addMap', () => {
    const officeKey = 1;
    const map = 'theMap';
    const expectedAction = {
      type: 'ADD_MAP',
      officeKey,
      map
    };
    expect(actions.addMap(officeKey, map)).toEqual(expectedAction);
  });
  it('removeMap',() => {
    const officeKey = 1;
    const mapKey = 4;
    const expectedAction = {
      type: 'REMOVE_MAP',
      officeKey,
      mapKey
    };
    expect(actions.removeMap(officeKey, mapKey)).toEqual(expectedAction);
  })
})
