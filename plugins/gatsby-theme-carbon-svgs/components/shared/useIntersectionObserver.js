import { useRef, useEffect, useState, useCallback } from 'react';

const useIntersectionObserver = () => {
  const targetRef = useRef();
  const observerRef = useRef();

  const [visible, setVisible] = useState(false);

  const callback = useCallback(
    ([entry]) => {
      if (entry.intersectionRatio) {
        setVisible(true);
      }
    },
    [setVisible]
  );

  useEffect(() => {
    if (observerRef.current) return;
    if (!targetRef.current) return;

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: '50%',
    });

    observerRef.current.observe(targetRef.current);
  }, []);

  return [targetRef, visible];
};

export default useIntersectionObserver;
