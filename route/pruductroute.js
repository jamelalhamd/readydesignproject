const express = require('express');
const router = express.Router();


const productController = require("../controller/productcontroller");

router.get('/add',productController.addcontroller);
router.get('/cover',productController.covercontroller);
router.get('/dash',productController.dashcontroller);
router.get('/edit',productController.editcontroller);
router.get('/home',productController.homecontroller);
router.get('/view',productController.viewcontroller);
module.exports = router;