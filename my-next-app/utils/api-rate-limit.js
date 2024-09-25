import rateLimit from 'express-rate-limit';

const rateLimitConfig = {
  windowMs: 15 * 60 * 1000, 
  max: 100, 
};

export default function applyRateLimit(handler) {
  return async (req, res) => {
    const rateLimiter = rateLimit(rateLimitConfig);

    rateLimiter(req, res, (err) => {
      if (err) {
        res.status(429).json({ message: 'Too many requests, please try again later.' });
      } else {
        handler(req, res);
      }
    });
  };
}
