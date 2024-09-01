const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
require('dotenv').config();

const cloudinary = require("cloudinary").v2;
 // تأكد من أن المسار صحيح

const signoutcontroler = (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
};

const logincontroler = (req, res) => {
    res.render("authen/signin");
};

const signupcontroler = (req, res) => {
    res.render("authen/signup");
};

const post_profileIme = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path, { folder: "x-system/profile-imgs" });

        const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET_KEY);

        await AuthUser.updateOne(
            { _id: decoded.id },
            { profileImage: result.secure_url }
        );
        res.redirect("/home");
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error uploading image" });
    }
};

module.exports = {
    signoutcontroler,
    logincontroler,
    signupcontroler,
    post_profileIme
};
