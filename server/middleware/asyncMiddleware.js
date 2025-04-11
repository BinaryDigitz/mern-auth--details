import mongoose from "mongoose";


function asyncMiddleware(handler) {
  return async (req, res, next) => {
    // Start session... It must be fully completed before the next phase
    // const session = await mongoose.startSession();
    // session.startTransaction();
    try {
      handler(req, res);
      // Session was successfull
      // await session.commitTransaction();
    }
     catch (ex) {
      // await session.abortTransaction();
      // session.endSession();
      next(ex);
    }
  };
}

export default asyncMiddleware;
