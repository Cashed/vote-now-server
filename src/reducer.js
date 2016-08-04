const Map = require('immutable').Map;
const core = require('./core');
const INITIAL_STATE = core.INITIAL_STATE;

module.exports = {
  reducer: reducer
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_ENTRIES':
      return core.setEntries(state, action.entries);
    case 'NEXT':
      return core.next(state);
    case 'VOTE':
      return core.vote(state, action.entry)
  }
  return state;
}
