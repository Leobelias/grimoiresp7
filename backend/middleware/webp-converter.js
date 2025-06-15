const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

module.exports = function webpConverter(req, res, next) {
  if (!req.file) {
    console.log("webpConverter: PAS de req.file !");
    return next();
  }

  const originalPath = req.file.path;
  const webpPath = originalPath.replace(/\.[^/.]+$/, ".webp");
  console.log("webpConverter: originalPath=", originalPath);

  sharp(originalPath)
    .webp({ quality: 75 })
    .toFile(webpPath)
    .then(() => {
      fs.unlinkSync(originalPath);
      req.file.filename = path.basename(webpPath);
      req.file.path = webpPath;
      req.file.mimetype = "image/webp";
      console.log("webpConverter: Conversion OK :", req.file);
      next();
    })
    .catch((error) => {
      console.error("webpConverter: Erreur conversion webp :", error);
      next(error);
    });
};
