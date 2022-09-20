const newsRouter = require('./news');
const siteRouter = require('./site');
function router(app) {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });

    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.send('Search');
    // });
}
module.exports = router;