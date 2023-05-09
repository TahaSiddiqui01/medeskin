const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name field is required"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "The email field is required"],
    },
    password: {
        type: String,
        required: [true, "The password field is required"]
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true });

// userSchema.createIndexes();

userSchema.pre("save", async function(next) {
    // Hash the password before saving the user model
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

//this function generates an auth token for the user
userSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({ _id: user._id, name: user.name, email: user.email },
        "secret"
    );
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
};

//this method search for a user by email and password.
userSchema.statics.findByCredentials = async(email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error({ error: "Invalid login details" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error({ error: "Invalid login details" });
    }
    return user;
};

// for forgot password check user exists or not
userSchema.statics.findByEmail = async(email) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error({ error: "User doesn't exists" });
    }
    return user;
};

const User = mongoose.model("users", userSchema);
module.exports = User;