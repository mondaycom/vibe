import { UIEventHandler, useCallback, useState } from "react";

const useLayoutScrolledContent = () => {
  const [isContentScrolled, setContentScrolled] = useState<boolean>(false);

  const onScroll: UIEventHandler<HTMLDivElement> = useCallback(
    e => {
      setContentScrolled(e.currentTarget?.scrollTop > 0);
    },
    [setContentScrolled]
  );

  return { isContentScrolled, onScroll };
};

export default useLayoutScrolledContent;
