module.exports = function(state, adminNamespace, usersNamespace) {
    usersNamespace.on('connection', (socket) => {
        state.players[socket.id] = { username: '' };
    
        socket.on('updateUsername', (data) => {
            state.players[socket.id].username = data;
            socket.emit('stateUpdated', state);
            socket.broadcast.emit('stateUpdated', state);
            adminNamespace.emit('stateUpdated', state);
        });
    
        socket.on('cardSelected', (data) => {
            state.selectedCards[socket.id] = data;
            socket.emit('stateUpdated', state);
            socket.broadcast.emit('stateUpdated', state);
            adminNamespace.emit('stateUpdated', state);
        });
    
        socket.on('disconnect', function() {
            delete state.players[socket.id];
            delete state.selectedCards[socket.id];
            socket.broadcast.emit('stateUpdated', state);
            adminNamespace.emit('stateUpdated', state);
        });
    });
}