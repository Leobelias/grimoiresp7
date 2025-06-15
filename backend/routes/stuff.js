const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const webpConverter = require("../middleware/webp-converter");

const stuffCtrl = require("../controllers/stuff");

router.get("/bestrating", stuffCtrl.getBestRatedBooks);
router.post("/", auth, multer, webpConverter, stuffCtrl.createBook);
router.put("/:id", auth, multer, webpConverter, stuffCtrl.modifyBook);
router.get("/:id", stuffCtrl.getOneBook);
router.delete("/:id", auth, stuffCtrl.deleteBook);
router.get("/", stuffCtrl.getAllBooks);

router.post("/:id/rating", auth, stuffCtrl.rateBook);

module.exports = router;
