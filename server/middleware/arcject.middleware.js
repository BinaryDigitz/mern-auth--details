import aj from "../config/arcject.js";

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested : 1});
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit())
        return res.json({ statusCode: 429, error: "Rate limit exceeded" });
      if (decision.reason.isBot())
        return res.json({ statusCode: 403, error: "Bot detected" });

      return res.json({ statusCode: 403, message: "Access denaied" });
    }
    next();
  } catch (ex) {
    console.log("Arcject middleware Error: ", ex.message);
    next(ex);
  }
};

export default arcjetMiddleware