const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    //req, res, next comes by default from express
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error); //pass to next middleware
    }
  };
};

module.exports = asyncWrapper;
