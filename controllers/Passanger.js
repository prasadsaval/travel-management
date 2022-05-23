const PassangerSchema = require("../model/passangers");

exports.getAllPassangers = async (req, res) => {
  try {
    let data = await PassangerSchema.find({});
    res.status(200).json({ message: "featched data SucessFully", data });
  } catch (error) {
    res.status(501).json({ message: "Server Error" });
  }
};

//! get the passenger  data
exports.getPassanger = async (req, res) => {
  try {
    let data = await PassangerSchema.findOne({ _id: req.params.id });
    res
      .status(200)
      .json({ message: "fetched Passanger data Sucessfully", data });
  } catch (error) {
    res.status(501).json({ message: "SERVER ERROR" });
  }
};

//! created the passenger data

exports.createPassenger = async (req, res) => {
  try {
    let { name, passanger_id, passanger_email, passanger_Place } = req.body;
    let data = { name, passanger_id, passanger_email, passanger_Place };
    let value = await PassangerSchema.create(data);
    res.status(201).json({ message: "succesfully passanger created", value });
  } catch (err) {
    console.log(err);

    res.status(201).json({ message: "SERVER ERROR" });
  }
};

//! deleted the pasanger data
exports.deletePassanger = async (req, res) => {
  try {
    await PassangerSchema.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: "successfully passanger Deleted" });
  } catch (error) {
    res.status(501).json({ message: "SERVER ERROR" });
  }
};

//! update the passangers
exports.updatePassangers = async (req, res) => {
  try {
    let { name, passanger_id, passanger_email, passanger_Place } = req.body;
    let data = await PassangerSchema.findByIdAndUpdate(
      { _id: req.params.id },
      { name, passanger_id, passanger_email, passanger_Place },
      { new: true }
    );
    await data.save();
    res.status(201).json({ message: "Sucessfully passanger Updated", payload });
  } catch (error) {
    res.status(501).json({ message: "server Error" });
  }
};
