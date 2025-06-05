const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const stuffCtrl = require("../controllers/stuff");

router.post("/", auth, multer, stuffCtrl.createBook);
router.put("/:id", auth, multer, stuffCtrl.modifyBook);
router.get("/:id", stuffCtrl.getOneBook);
router.delete("/:id", auth, stuffCtrl.deleteBook);
router.get("/", stuffCtrl.getAllBooks);
router.post("/:id/rating", auth, stuffCtrl.rateBook);

module.exports = router;
