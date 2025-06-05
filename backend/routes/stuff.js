const express = require("express");
const router = express.Router();
const Thing = require("../models/Things");
const stuffCtrl = require("../controllers/stuff");

router.post("/", stuffCtrl.createThing);
router.put("/:id", stuffCtrl.modifyThing);
router.get("/:id", stuffCtrl.getOneThing);
router.delete("/:id", stuffCtrl.deleteThing);
router.get("/", stuffCtrl.getAllThings);

module.exports = router;
