const mongoose = require('mongoose');
const URI = 'mongodb://localhost/red'
mongoose.connect(URI)
    .then(db => console.log('db is connected'))
    .catch(err => console.err(err));

module.exports = mongoose;