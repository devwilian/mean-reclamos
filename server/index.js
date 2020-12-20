const express  = require('express');
const app = express();
const morgan = require('morgan');
const {mongoose} = require('./database.js');
const cors = require('cors');


//Settings
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/reclamos',require('./routes/reclamo.routes'));

//Starting servers
app.listen(app.get('port'),()=>{
    console.log("Init server!");
});