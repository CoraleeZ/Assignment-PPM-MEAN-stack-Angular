const mongoose = require('mongoose');
// const connectionString = 'mongodb://localhost/tasks_api';
mongoose.connect('mongodb://localhost/tasks_api', { useNewUrlParser: true });

const PPMSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Title is required!'], minlength: [3, 'Title must at least has 3 charaters'] },
    price: { type: Number, required: [true, 'Price is required!'] },
    url: { type: String, required: [true, 'Url is required!'] }
}, { timestamps: true });

module.exports = mongoose.model('ppm', PPMSchema);