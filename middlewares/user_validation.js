const { user } = require("./validation_schema");
module.exports = {
  addUserVAlidation: async (req, res, next) => {
    const value = await user.validate(req.body);
    console.log(req.body);
    if (value.error) {
      res.json({
        success: 0,
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },
};
