const Course = require('../../models/Course');
const { mongooseToObject } = require('../../utils/moongo');
class CourseController {
    //GET /course/create
    create(req, res, next) {
        res.render('courses/create', {});
    }

    //POST /course/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoID}/default.jpg`;
        const course = new Course(formData);

        course
            .save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(() => {});
    }

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
    //GET /course/:id/edit

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    //PUT /course/:id

    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //DELETE /course/:id

    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //Patch /course/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    //DELETE /course/:id/force

    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();
