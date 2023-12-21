import { useEffect, useState } from "react";

export function useButtonLoading({ isLoading }: { isLoading: boolean }): { loading: boolean } {
  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setLoading(isLoading);
    });
    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isLoading]);

  return { loading };
}
