const express = require('express');
const { addService,getAllServices,deleteService,updateService } = require('../controller/serviceController');
const { verifyAdmin } = require('../middleware/isAdmin');
const router = express.Router();


router.post("/add-service",verifyAdmin,addService);
router.get("/get-all-services",getAllServices);
router.delete("/delete-service/:name",verifyAdmin,deleteService);
router.put("/update-service/:id",verifyAdmin,updateService)

module.exports = router