const mongoose = require('mongoose');

async function conect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_edu_dev');
        console.log('connect database successfully');
    } catch (error) {
        console.log('connect databese  failure', error);
    }
}

module.exports = { conect };
