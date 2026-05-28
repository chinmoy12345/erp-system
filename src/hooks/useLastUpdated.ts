import { useEffect, useState } from 'react';

export function useLastUpdated() {
  const [lastUpdated, setLastUpdated] = useState<string>("");
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLastUpdated(new Date().toLocaleString());
  }, []);
  return lastUpdated;
}