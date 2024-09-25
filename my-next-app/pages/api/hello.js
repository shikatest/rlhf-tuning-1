// pages/api/hello.js
import applyRateLimit from '../../utils/api-rate-limit';

const handler = async (req, res) => {
  // Your API logic here
  res.status(200).json({ message: 'Hello from your rate-limited API!' });
};

// Apply rate limiting
export default applyRateLimit(handler);
