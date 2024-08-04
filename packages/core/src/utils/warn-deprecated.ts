import { ReactNode, useEffect } from "react";

export function useWarnDeprecated({
  component,
  condition = true,
  message
}: {
  component: string;
  condition?: ReactNode | boolean;
  message: string;
}) {
  useEffect(() => {
    warnDeprecated({ component, condition, message });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export function warnDeprecated({
  component,
  condition,
  message
}: {
  component: string;
  condition: ReactNode | boolean;
  message: string;
}) {
  if (condition && process.env.NODE_ENV !== "production") {
    const warningMessage = `[monday-ui-react-core] ${component}: ${message}`;
    console.warn(warningMessage);
  }
}
