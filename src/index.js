const express = require('express');
const app = express();
const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

var state = {
    players: {},
    selectedCards: {},
    cardsFlipped: false,
    storyName: '',
    storyLink: ''
};

var baseUrl = process.env.BASE_URL;

require('./sockets')(server, state, baseUrl);
require('./routes/middleware')(app, express);
require('./routes/admin')(app, state, baseUrl);

server.listen(port, () => {
    console.log(`Story Points Game started on port: ${port} Mode: ${process.env.NODE_ENV}`)
});