import { useEffect } from 'react';
import '@vercel/analytics'; // Just import the package without `init` method

const Analytics = () => {
  useEffect(() => {
    // Vercel Analytics will automatically initialize on import
  }, []);

  return null; // You don't need to render anything for the analytics to work
};

export default Analytics;