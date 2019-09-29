const express = require('express');
const morgan = require('morgan');
const app = express();


const { mongoose } = require('./database');

// settings
app.set('port', process.env.PORT || 3000);

// middleawares
app.use(morgan('dev'));
app.use(express.json());


//routes
app.use('/api/employees',require('./routes/employee.routes'));


//start server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});