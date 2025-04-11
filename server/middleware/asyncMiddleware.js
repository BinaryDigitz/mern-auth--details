function asyncMiddleware(handler) {
  return (req, res, next) => {
    try {
      handler(req, res);
    } catch (ex) {
      next(ex.message);
    }
  };
}

export default asyncMiddleware;
