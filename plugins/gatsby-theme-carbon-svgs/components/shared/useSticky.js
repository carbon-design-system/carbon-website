import { useEffect, useState, useRef } from 'react';

export default () => {
  const stickyRef = useRef(null);
  const [sticky, setSticky] = useState(false);
  const eventsToBind =
    typeof window !== 'undefined'
      ? [
          [document, 'scroll'],
          [window, 'resize'],
          [window, 'orientationchange'],
        ]
      : [];

  useEffect(() => {
    // Observe when ref enters or leaves sticky state
    // rAF https://stackoverflow.com/questions/41740082/scroll-events-requestanimationframe-vs-requestidlecallback-vs-passive-event-lis
    function observe() {
      const refPageOffset = stickyRef.current.getBoundingClientRect().top;
      const stickyOffset = parseInt(
        getComputedStyle(stickyRef.current).top,
        10
      );
      const stickyActive = refPageOffset <= stickyOffset;

      if (stickyActive && !sticky) setSticky(true);
      else if (!stickyActive && sticky) setSticky(false);
    }
    observe();

    // Bind events
    eventsToBind.forEach(eventPair => {
      eventPair[0].addEventListener(eventPair[1], observe);
    });

    return () => {
      eventsToBind.forEach(eventPair => {
        eventPair[0].removeEventListener(eventPair[1], observe);
      });
    };
  }, [stickyRef, sticky, eventsToBind]);

  return [stickyRef, sticky];
};
