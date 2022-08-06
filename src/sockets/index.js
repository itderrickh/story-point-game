const { Server } = require("socket.io");

module.exports = function(server, state, baseUrl) {
    const io = new Server(server, {
        path: '/socket.io'
    });
    const adminNamespace = io.of('/admin');
    const usersNamespace = io.of('/users');

    require('./adminEvents')(state, adminNamespace, usersNamespace);
    require('./userEvents')(state, adminNamespace, usersNamespace);
};