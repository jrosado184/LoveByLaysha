import { useState, useEffect } from 'react';

const useElementOnScreen = (ref) => {
  const [onScreen, setOnScreen] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setOnScreen(entry.onScreen)
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return onScreen;
};

export default useElementOnScreen;
