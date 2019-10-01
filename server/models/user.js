const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    correo: { type: String, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

UserSchema.pre('save', (next) => {
    var user = this;
    if (!user.isModified('password')) { return next() };
    bcrypt.hash(user.password, 10).then((hashedPassword) => {
        user.password = hashedPassword;
        next();
    })
},  (err) => {
    next(err)
});

userSchema.methods.comparePassword = (candidatePassword, next) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return next(err);
        next(null, isMatch)
    })
}

module.exports = mongoose.model('User', UserSchema);