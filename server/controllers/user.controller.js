const User = require('../models/user')
const userCtrl = {};


userCtrl.getUsers = async (req,res) => {
   const users = await User.find();
   res.json(users);
}
    

userCtrl.createUser  = async (req, res) => {
    const user = new User({
        name: req.body.name,
        correo: req.body.correo,
        password: req.body.password
    });
    await user.save()
    console.log(user);
    res.json({
        'status': 'User register'
    });
    
}

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    res.json(user);
}

userCtrl.editUser = async (req,res) => {
    const {id} = req.params;
    const user = {
        name: req.body.name,
        correo: req.body.correo,
        password: req.body.password
    };
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({status: 'User Updated'});
    
}

userCtrl.deleteUser = async (req, res) => {
    const {id} = req.params;
    await User.findByIdAndRemove(id);
    res.json({status: 'User delete'});
}

module.exports = userCtrl;