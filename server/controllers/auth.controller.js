const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/user')

//const User = mongoose.model('User');


const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

module.exports.getUsers = async(req, res) => {
    const users = await User.find();
   res.json(users);
}


module.exports.register =  async (req, res) => {
    const user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    await user.save( (err) =>{
        let token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token": token
        });
    });

    console.log(user);
    

};

module.exports.login =  (req, res) => {

    passport.authenticate('local', (err, user, info) => {
        let  token;
        if (err) {
            res.status(404).json(err);
            return;
        }

        if (user) {
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token": token
            });
        } else {
            res.status(401).json(info);
        }
    })(req, res);

};
