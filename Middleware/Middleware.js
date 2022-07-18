const tokenModel = require("../Models/TokenModel");

exports.authenticateUser = async (req, res, next) => {
  const auth_token = req.headers.auth_token;
  try {
    const userData = await tokenModel.getAuthenticateDetails(auth_token);
    if (Object.keys(userData).length != 0) {
      var user_id = userData[0].user_id;
      req.user_id = user_id;
      next();
    } else {
      res.status(401).send({ message: "Your Are Not Authorised" });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
