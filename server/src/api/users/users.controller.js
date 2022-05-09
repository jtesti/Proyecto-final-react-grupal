const User = require('./users.model');
const bcrypt = require('bcrypt');
const JwtUtils = require('../../utils/jwt/jwt');
const { populate } = require('./users.model');


const register = async (req, res, next) => {
    try {
        const user = new User(req.body);
        const userExist = await User.findOne({ email: user.email })
        if (userExist) {
            return next(new Error())
        }
        const userDB = await user.save();
        return res.status(201).json(userDB.email)

    } catch (error) {
        return next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return next(new Error())
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = JwtUtils.generateToken(user._id, user.email);
            return res.status(200).json({token,user});
        }
    } catch (error) {

    }
}

const logout = (req, res, next) => {
    try {
        const token = null;
        return res.status(201).json(token)
    } catch (error) {
        return next(error)
    }
}

const getUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).populate('products').populate('favorites');
        res.status(200).json(user);
    } catch (error) {
        return next(error)
    }
}

const getAll = async (req, res, next) => {
    try {
        const users = await User.find().populate('favorites');
        res.status(200).json(users);
    } catch (error) {
        return next(error)
    }
}

const patchUser = async (req, res, next) => {
    console.log('Hola',req.body)
    try {
        const { id } = req.params;
        console.log(id)
        const user = new User(req.body);
       /*  user.fullname = req.body.fullname;
        user.birthday = req.body.birthday;
        user.nickname = req.body.nickname;
        user.location = req.body.location;
        user.email = req.body.email;
        user.password = req.body.password;
        user.favorites = req.body.favorites;
        user.products = req.body.products; */
        if (req.file) user.img = req.file.path
        user._id = id;
        const updateUser = await User.findByIdAndUpdate(id, user);
        return res.status(200).json(updateUser);
    } catch (error) {
        return next(error);
    }
}


module.exports = { register, login, logout, getUser, patchUser, getAll }