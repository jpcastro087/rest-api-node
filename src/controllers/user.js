const User = require('../models/user');
const Car = require('../models/car');
module.exports = {
  index: async (req, res, next) => {
      const users = await User.find({}).populate('cars');
      res.status(200).json(users);
  },

  newUser: async (req, res, next) => {
      const newUser = new User(req.body);
      const user = await newUser.save();
      res.status(200).json(user);
  },

  newUserCar: async (req, res, next) => {
      const { userId } = req.params;
      const newCar = new Car(req.body);
      const user = await User.findById(userId);
      newCar.user = user;
      await newCar.save();
      user.cars.push(newCar);
      await user.save();
      res.status(200).json(newCar);
  },

  getUser: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate('cars');
    res.status(200).json(user);
  },

  updateUser: async (req, res, next) => {
    const { userId } = req.params;
    const user = req.body;
    const oldUser = await User.findByIdAndUpdate(userId, user);
    res.status(200).json({success:true});
  },

  replaceUser: async (req, res, next) => {
    const { userId } = req.params;
    const user = req.body;
    console.log(userId);
    const oldUser = await User.findByIdAndUpdate(userId, user);
    res.status(200).json({success:true});
  },

  deleteUser: async (req, res, next) => {
    const { userId } = req.params;
    await User.findByIdAndRemove(userId);
    res.status(200).json({success:true});
  },

  getCarsByUser: async(req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
  }

};
