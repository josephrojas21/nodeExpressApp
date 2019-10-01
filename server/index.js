const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();


const { mongoose } = require('./database');

// settings
app.set('port', process.env.PORT || 3000);

// middleawares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}))



//routes
app.use('/api/users',require('./routes/user.routes'));
app.use('/api/posts',require('./routes/post.routes'));



//start server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});