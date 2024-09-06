const express = require('express');
const router = express.Router();
const productController = require("../controller/productcontroller");
const multer  = require('multer')
const upload = multer({storage: multer.diskStorage({})});
const cloudinary = require('cloudinary').v2

// Define routes and associate them with controller methods
router.get('/404', productController.errorcontroller);
router.get('/add', productController.addcontroller);
router.get('/', productController.covercontroller);
router.get('/dash', productController.dashcontroller);
router.get('/edit', productController.editcontroller);
router.get('/home', productController.homecontroller);
router.get('/view', productController.viewcontroller);
router.post('/adduser', productController.addcontroller_post);
router.post('/edituser', productController.editcontroller_post);
router.post('/deleteuser', productController.deletecontroller_post);

module.exports = router;
