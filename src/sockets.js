const server = require('../server');
const io = require('socket.io').listen(server);

module.exports = {
  startSockets: (store) => {
    store.subscribe(() => io.emit('state', store.getState().toJS()));

    io.on('connection', socket => {
      socket.emit('state', store.getState().toJS());
      socket.on('action', store.dispatch.bind(store));
    });
  }
}
