const router = require('express-promise-router')();


const {
  index,
  newProduct,
  getProductIds,
  getProduct,
  updateProduct
} = require('../controllers/product');

router.get('/', index);
router.post('/', newProduct);
router.get('/ids', getProductIds);
router.get('/:productId', getProduct);
router.put('/:productId', updateProduct);

module.exports = router;
