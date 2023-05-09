const User = require("../model/User");
const PasswordReset = require("../model/PasswordReset");
const sendEmail = require('../mail/SendEmail')
const bcrypt = require("bcrypt");


//register
exports.registerNewUser = async(req, res) => {
    try {
        let isUser = await User.find({ email: req.body.email });
        if (isUser.length >= 1) {
            return res.status(409).json({
                message: 'Email already in use'
            });
        }
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        let data = await user.save();
        // const token = await user.generateAuthToken();
        res.status(200).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(422).json({ err: err });
    }
};

//login
exports.loginUser = async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        //validations
        if (!email) {
            return res.status(422).json({
                'email': 'Email field is required',
            });
        }
        if (!password) {
            return res.status(422).json({
                'password': 'Password field is required'
            });
        }
        //validations end
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res
                .status(401)
                .json({ error: "User with this email does not exists !!!" });
        }
        const token = await user.generateAuthToken(); // here it is calling the method that we created in the model
        res.status(200).json({ user, token });
    } catch (err) {
        res.status(401).json({
            'email': 'Invalid email address or email is not verified',
            'password': 'Invalid/Incorrect Password'
        });
    }
};

//get logged in user dtails
exports.getUserDetails = async(req, res) => {
    await res.json(req.userData);
};

//forgot password
exports.forgotPassword = async(req, res) => {
    try {
        const email = req.body.email;
        //validations
        if (!email) {
            return res.status(422).json({
                message: 'Email field is required',
            });
        }
        //validations end
        const emailexists = await PasswordReset.findOne({
            email: email,
        });

        if (emailexists) {
            return res
                .status(401)
                .send({ message: "Password reset already sent kindly check your mail !!!" });
        }

        const user = await User.findByEmail(email);
        console.log(user)
        if (!user) {
            return res
                .status(401)
                .json({ error: "User with this email does not exists !!!" });
        }
        // here it is calling the method that we created in the model to generate token
        const token = await user.generateAuthToken();

        //to save email and token in password reset collection
        const passwordreset = new PasswordReset({
            email: email,
            token: token
        });

        await passwordreset.save();

        const url = process.env.BASE_URL + 'reset-password/' + token
        var html = '<a href="' + url + '" target="blank">' + url + '</a>'

        await sendEmail(email, "Reset Password", html);

        res.status(200).json({ message: 'Password reset link sent to your email account' });
    } catch (err) {
        res.status(400).send({
            message: 'If email exists sent to your email check your email',
        });
    }
};

//reset password
exports.resetPassword = async(req, res) => {
    try {

        const token = req.body.token;

        const password = req.body.password;
        const password_confirmation = req.body.password_confirmation;

        // validations
        if (!password || !password_confirmation) {
            return res.status(422).json({
                message: 'Password and Confirm password field are required',
            });
        }

        const passwordreset = await PasswordReset.findOne({
            token: token,
        });

        //if token not available
        if (!passwordreset) {
            res.status(400).json({ message: 'Reset link not found generate another password reset link and try again' });
        }

        if (password != password_confirmation) {
            return res.status(422).json({
                message: 'Password and Confirm password didn\'t matched',
            });
        }
        //validations end

        // check if token expired
        var currenttime = Date.now();
        console.log(currenttime)

        //time difference
        var time = Math.floor(Math.abs(currenttime - passwordreset.createdAt) / 36e5);
        if (time > 2) {
            passwordreset.delete()
            res.status(400).json({ message: 'Reset link expired please generate another password reset link and try again' });
        }

        const user = await User.findOne({
            email: passwordreset.email
        });

        //update password and save
        user.password = password
        let save = await user.save();

        if (save) {
            passwordreset.delete()
        }
        res.status(200).json({ message: 'Password reset successfully' });
    } catch (err) {
        res.status(400).send({
            message: 'An error occured',
        });
    }
};

//show all users
exports.findAll = (req, res) => {
    User.find().sort({ createdAt: 'asc' })
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                error: err
            })
        })
}