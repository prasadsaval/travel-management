const { Router } = require("express");
const {
  createPassenger,
  deletePassanger,
  updatePassangers,
  getAllPassangers,
  getPassanger,
} = require("../controllers/Passanger");
const router = Router();

const { addUserVAlidation } = require("../middlewares/user_validation");
router.route("").post(addUserVAlidation, createPassenger).get(getAllPassangers);

router
  .route("/:id")
  .get(getPassanger)
  .put(updatePassangers)
  .delete(deletePassanger);

module.exports = router;
