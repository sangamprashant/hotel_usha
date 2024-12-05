// Error handling middleware
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;  // Default to 500
    res.status(statusCode);
  
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,  // Hide stack trace in production
    });
  };
  
  module.exports = { errorHandler };
  