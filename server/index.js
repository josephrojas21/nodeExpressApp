const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
const passport = require('passport')


const { mongoose } = require('./database');

require('./config/passport');

// settings
app.set('port', process.env.PORT || 3000);

// middleawares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use(passport.initialize());
//errores 404




//routes
app.use('/api/users',require('./routes/user.routes'));
app.use('/api/posts',require('./routes/post.routes'));
app.use('/api',require('./routes/auth.routes'));



//start server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});