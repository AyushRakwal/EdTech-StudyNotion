const mongoose = require('mongoose');
require("dotenv").config();

exports.connect = () => {
    const mongoDbUrl = process.env.MONGODB_URL;

    if (!mongoDbUrl) {
        console.error("MONGODB_URL environment variable is not set.");
        process.exit(1);
    }

    mongoose.connect(mongoDbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connection Successful");
    })
    .catch((error) => {
        console.log("DB Connection Issues");
        console.error(error);
        process.exit(1);
    });
};
