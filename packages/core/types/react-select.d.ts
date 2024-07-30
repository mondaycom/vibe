import { ReactNode } from "react";

// @types/react-select does not define NonceProviderProps properly (misses children prop)
declare module "react-select/src/NonceProvider" {
  interface NonceProviderProps {
    nonce: string;
    cacheKey: string;
    children: ReactNode;
  }
}
