const express = require("express");
const Router = express.Router();

const bodyParser = require("body-parser"); // Corrected variable name
Router.use(bodyParser.json()); // Use the Router here
Router.use(bodyParser.urlencoded({ extended: true })); // Use the Router here

const post_controller = require("../controllers/postController");

const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/userImage"));
    },
    filename: function (req, file, cb) {
        const name = Date.now() + "-" + file.originalname;
        cb(null, name);
    },
});

const upload = multer({ storage: storage });

// Use Router.post instead of post_route.post
Router.post("/post-route", upload.single("image"), post_controller.post_create);
Router.get("/get_post",post_controller.getpost)
Router.delete("/delete_post/:id",post_controller.postDelete)
Router.put("/update_post",upload.single("image"), post_controller.update_post)
module.exports = Router;
