const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
const Course = new Schema(
    {
        name: { type: String, default: '', maxLength: 255, require: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        slug: { type: String, maxlength: 255 },
        video: { type: String, maxlength: 255 },
        slug: { type: String, slug: 'name', unique: true },
        deletedAt: {},
        deleted: { type: Boolean, default: false },
    },
    { timestamps: true },
);
// add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
module.exports = mongoose.model('Course', Course);
