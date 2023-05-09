const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userController = require("../controller/userController");
const blogController = require("../controller/blogController");
const contactController = require("../controller/contactController");

const uploadBlogImage = require('../middleware/blogImage')

// user route
router.post("/register", userController.registerNewUser);
router.post("/login", userController.loginUser);
router.post("/forgot", userController.forgotPassword);
router.post("/reset", userController.resetPassword);
router.get("/me", auth, userController.getUserDetails);
router.get("/users", userController.findAll);

//blog route
router.get("/blogs", blogController.findAll);
router.post('/blogs', uploadBlogImage.fields([{ name: 'image', maxCount: 1 }, { name: 'coverimage', maxCount: 1 }]), blogController.create);
router.get("/blogs/:BlogId", blogController.findOne);
router.get("/blogs/category/:category", blogController.findByCategory);
router.get("/blogs/search/:query", blogController.findByQuery);
router.put("/blogs/:BlogId", uploadBlogImage.fields([{ name: 'image', maxCount: 1 }, { name: 'coverimage', maxCount: 1 }]), blogController.update);
router.delete("/blogs/:BlogId", blogController.delete);

// router.post("/image-upload", uploadBlogImage.fields([{ name: 'image', maxCount: 10 }]), blogController.imageUpload);

router.post('/contact', contactController.create);

module.exports = router;