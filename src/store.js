const createStore = require('redux').createStore;
const reducer = require('./reducer');

module.exports = {
  makeStore: () => {
    return createStore(reducer.reducer);
  }
}
