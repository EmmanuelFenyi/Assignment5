const Vehicle = require("../models/Vehicle");

const allVehicles = async (req, res) => {
  const vehicles = await Vehicle.find();
  res.status(200).json({ vehicles });
};

const getVehicle = async (req, res) => {
  const id = req.params.id;
  const vehicle = await Vehicle.findById(id);
  res.status(200).json({ vehicle });
};

const createVehicle = async (req, res) => {
  const vehicleBrand = req.body.vehicleBrand;
  const vehicleModel = req.body.vehicleModel;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const description = req.body.description;

  const vehicle = await Vehicle.create({
    vehicleBrand,
    vehicleModel,
    price,
    quantity,
    description,
  });
  res.status(201).json({ vehicle });
};

const updateVehicle = async (req, res) => {
  const id = req.params.id;
  const vehicle = await Vehicle.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ vehicle });
};

const deleteVehicle = async (req, res) => {
  const id = req.params.id;
  await Vehicle.findByIdAndDelete(id);
  res.status(204).json("Deleted Vehicle");
};

module.exports = {
  allVehicles,
  getVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};
