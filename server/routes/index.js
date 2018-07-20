const productRouter = require('./productRoutes');
const userRouter = require('./userRoutes');

module.exports = (app) => {

  // PRODUCTS
  app.use('/products', productRouter);

  // PRODUCTS
  app.use('/user', userRouter);

};
