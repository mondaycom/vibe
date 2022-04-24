import { useLayoutEffect, useState, useMemo } from "react";

export function useMediaQuery(query) {
  const queries = useMemo(() => {
    return Array.isArray(query) ? query : [query];
  }, [query]);

  const [matches, setMatches] = useState(queries.map(query => !!window.matchMedia(query).matches));

  useLayoutEffect(() => {
    const mediaQueryList = queries.map(query => window.matchMedia(query));
    const updated = mediaQueryList.map((query, index) => {
      // we save the callback function so when we unmount we could remove the listener
      const callback = event => {
        setMatches(prevState => {
          let newQueries = [...prevState];
          newQueries[index] = event.matches;
          return newQueries;
        });
      };
      query.addEventListener("change", callback);
      return [query, callback];
    });
    return () => {
      updated.forEach(([query, callback]) => {
        query.removeEventListener("change", callback);
      });
    };
  }, [queries, setMatches]);
  return matches;
}
export default useMediaQuery;
