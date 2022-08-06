module.exports = function(state, adminNamespace, usersNamespace) {
    adminNamespace.on('connection', (socket) => {
        socket.on('flip', () => {
            state.cardsFlipped = !state.cardsFlipped;
            
            usersNamespace.emit('stateUpdated', state);
            socket.emit('stateUpdated', state);
        });
    
        socket.on('setStoryDetails', (details) => {
            state.storyLink = details.storyLink;
            state.storyName = details.storyName;
            usersNamespace.emit('stateUpdated', state);
            socket.emit('stateUpdated', state);
        });
    });
}