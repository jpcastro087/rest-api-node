const router = require('express-promise-router')();


const {
  index,
  newUser,
  replaceUser,
  updateUser,
  getUser,
  deleteUser,
  newUserCar
} = require('../controllers/user');

router.get('/', index);
router.get('/:userId', getUser);
router.post('/:userId', newUser);
router.patch('/:userId', replaceUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);
router.post('/:userId/car', newUserCar);

module.exports = router;
