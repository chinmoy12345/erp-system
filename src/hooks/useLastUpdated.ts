import { useEffect, useState } from 'react';

export function useLastUpdated() {
  const [lastUpdated, setLastUpdated] = useState<string>("");
  useEffect(() => {
    setLastUpdated(new Date().toLocaleString());
  }, []);
  return lastUpdated;
}