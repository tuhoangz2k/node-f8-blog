const Course = require('../../models/Course');
const { mongooseToObject } = require('../../utils/moongo');
class CourseController {
    //GET /course/:slug

    show(req, res, next) {
        (async () => {
            try {
                const course = await Course.findOne({ slug: req.params.slug }).exec();
                res.render('courses/show', { course: mongooseToObject(course) });
            } catch (error) {
                next;
            }
        })();
    }
}

module.exports = new CourseController();
