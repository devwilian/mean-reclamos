const { url } = require('inspector');
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-reclamos-crud';

mongoose.connect(URI)
.then(db => console.log('DB Contected!'))
.catch(db=>console.log('error conted database'));

module.exports = mongoose;