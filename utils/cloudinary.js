const cloudinary = require("cloudinary")
    .v2;
cloudinary.config({
    cloud_name: "cloudname",
    api_key: "apikey",
    api_secret: "api secret"
});
module.exports = cloudinary;