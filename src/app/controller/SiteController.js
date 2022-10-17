const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../utils/moongo');
class SiteController {
    // [GET] news
    home(req, res, next) {
        // res.render('home');

        Course.find({})
            .then((courses) => {
                courses = mutipleMongooseToObject(courses);
                res.render('home', { courses });
            })
            .catch((err) => next(err));
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
