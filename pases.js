import { NextApiHandler } from 'next';
import applyRateLimit from 'api-rate-limit';

const apiHandler: NextApiHandler = async (req, res) => {
  try {
    // Your API route logic goes here
    res.status(200).json({ message: 'Hello from your rate-limited API!' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Apply rate limiting to this specific API route
export default applyRateLimit(apiHandler);