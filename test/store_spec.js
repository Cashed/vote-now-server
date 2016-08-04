const Map = require('immutable').Map;
const fromJS = require('immutable').fromJS;
const expect = require('chai').expect;

const reduxStore = require('../src/store');

describe('store', () => {

  it ('is a Redux store configured with the correct reducer', () => {
    const store = reduxStore.makeStore();

    expect(store.getState()).to.equal(Map());

    store.dispatch({
      type: 'SET_ENTRIES',
      entries: ['Trainspotting', '28 Days Later']
    });

    expect(store.getState()).to.equal(fromJS({
      entries: ['Trainspotting', '28 Days Later']
    }));
  });
});
