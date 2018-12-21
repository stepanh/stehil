import { useState, useEffect } from 'react';

/**
 * This effect refreshes the component every second
 */
export default () => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const interval = window.setInterval(() => {
      setTick(tickNow => tickNow + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
};
