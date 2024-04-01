const dotenv = require("dotenv");

// Configuring ENV variables
dotenv.config();

const cors = (req, res, next) => {
  const whiteListedOrigins = process.env.ALLOWED_ORIGINS.split(" ");
  const requestOrigin = req.headers.origin;

  if (whiteListedOrigins.includes(requestOrigin)) {
    res.header("Access-Control-Allow-Origin", requestOrigin);
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  }

  next();
};

module.exports = cors;
