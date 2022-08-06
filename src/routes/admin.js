module.exports = function(app, state, baseUrl) {
    app.get('/', (req, res) => {
        res.render('index', {
            baseUrl: baseUrl
        });
    });

    app.get('/admin', (req, res) => {
        res.render('admin', {
            baseUrl: baseUrl,
            state: state
        });
    });
};