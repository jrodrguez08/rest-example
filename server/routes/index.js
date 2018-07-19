const productsRouter = require('./productRoutes');

module.exports = (app) => {

  // PRODUCTS
  app.use('/products', productsRouter);

};
