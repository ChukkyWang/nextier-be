const express = require('express');
router = express.Router();
powerRoutes = require('../controllers/powerControllers');
router.get("/", powerRoutes.powerController);



module.exports = router