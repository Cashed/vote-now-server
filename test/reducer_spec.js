const fromJS = require('immutable').fromJS;
const Map = require('immutable').Map;
const expect = require('chai').expect;

const reducer = require('../src/reducer');

describe('reducer', () => {

  it ('handles SET_ENTRIES', () => {
    const initialState = Map();
    const action = { type: 'SET_ENTRIES', entries: ['Trainspotting'] };
    const nextState = reducer.reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      entries: ['Trainspotting']
    }));
  });

  it ('handles NEXT', () => {
    const initialState = fromJS({
      entries: ['Trainspotting', '28 Days Later']
    });
    const action = { type: 'NEXT' };
    const nextState = reducer.reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later']
      },
      entries: []
    }));
  });

  it ('handles VOTE', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later']
      },
      entries: []
    });
    const action = { type: 'VOTE', entry: 'Trainspotting' };
    const nextState = reducer.reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: { 'Trainspotting': 1 }
      },
      entries: []
    }));
  });
});
