function errorHandler(err, req, res) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  console.log(statusCode, message);
  return res.json({ success: false, statusCode, message });
}

export default errorHandler;
