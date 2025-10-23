import { useEffect, useState } from "react";

// The hook will return true only on client side and not on server side
export const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);
  return isMounted;
};
