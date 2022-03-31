import React from 'react';

export default function AnimatedHero() {
  const svgRef = React.createRef();

  React.useEffect(() => {
    if (svgRef.current) {
      const prefferesReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (window['anime'] && prefferesReducedMotion === false) {
        document.querySelectorAll('svg.hero-svg *').forEach((polygon) => {
          polygon.style.opacity = 0;
          polygon.style.transform = 'translateX(100px) translateY(100px)';

          setTimeout(() => {
            window['anime']({
              targets: polygon,
              translateX: 0,
              translateY: 0,
              opacity: 1,
              duration: 2000,
            });
          }, Math.random() * 1000);
        });
      }
    }
  }, [svgRef]);

  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={2432}
        height={1216}
        viewBox="0 0 2432 1216"
        className="hero-svg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        preserveAspectRatio="xMidYMid slice"
        ref={svgRef}>
        <rect
          x="1520.622"
          y={912}
          width="305.424"
          height={304}
          fill="#78a9ff"
        />
        <polygon
          points="1825.283 606.345 1825.283 302.345 1521.283 606.345 1825.283 606.345"
          fill="#fff"
        />
        <polygon
          points="1825.283 0 1521.283 0 1825.283 304 1825.283 0"
          fill="#78a9ff"
        />
        <polygon points="2128 0 1824 0 2128 304 2128 0" fill="#d0e2ff" />
        <polygon points="2128 304 1824 304 2128 608 2128 304" fill="#a6c8ff" />
        <polygon points="1824 608 2128 608 1824 304 1824 608" fill="#d4bbff" />
        <polygon
          points="913.33 608 913.33 912 608.62 912 912.62 608 913.33 608"
          fill="#d0e2ff"
        />
        <rect x="912.622" y={304} width={608} height={608} fill="#edf5ff" />
        <rect
          x="1520.622"
          y={304}
          width="303.378"
          height={304}
          transform="translate(3344.622 912) rotate(-180)"
          fill="#d0e2ff"
        />
        <polygon points="912 0 912 608 304 0 912 0" fill="#e8daff" />
        <path
          d="M760.622,304A151.487,151.487,0,0,1,716.1,411.48L501.142,196.52A152,152,0,0,1,760.622,304Z"
          fill="#e8daff"
        />
        <polygon points="912 608 304 608 304 0 912 608" fill="#d4bbff" />
        <polygon points="0 0 0 304 304 0 0 0" fill="#edf5ff" />
        <polygon points="304 304 304 0 0 304 304 304" fill="#d0e2ff" />
        <polygon points="0 608 304 608 0 304 0 608" fill="#78a9ff" />
        <polygon points="304 304 0.244 304 304 608 304 304" fill="#a6c8ff" />
        <rect x="0.622" y="608.22" width={304} height={304} fill="#fff" />
        <rect y="912.22" width={304} height={304} fill="#f6f2ff" />
        <path
          d="M304,608.22v152A151.781,151.781,0,0,0,152.22,912v.22H.22V912c0-111.86,60.46-209.59,150.48-262.31A302.343,302.343,0,0,1,304,608.22Z"
          fill="#d4bbff"
        />
        <path
          d="M0,912.44H152a151.781,151.781,0,0,0,151.78,151.78H304v152h-.22c-111.86,0-209.59-60.46-262.31-150.48A302.343,302.343,0,0,1,0,912.44Z"
          fill="#e8daff"
        />
        <polygon
          points="1521.327 304 1825.327 304 1521.327 0 1521.327 304"
          fill="#fff"
        />
        <polygon points="1824 304 2128 304 1824 0 1824 304" fill="#edf5ff" />
        <polygon points="1520 912 1824 912 1520 608 1520 912" fill="#d0e2ff" />
        <path d="M1368.622,1216a152,152,0,0,0-152-152v152Z" fill="#fff" />
        <path
          d="M1216.622,912v152a152,152,0,0,1,152,152h152V912Z"
          fill="#e8daff"
        />
        <path d="M1216.622,1064a152,152,0,0,0-152,152h152Z" fill="#e8daff" />
        <path
          d="M1216.622,1064V912h-304v303.669h152A152,152,0,0,1,1216.622,1064Z"
          fill="#fff"
        />
        <path d="M1064,0a152,152,0,0,0,152,152V0Z" fill="#edf5ff" />
        <path d="M1216,304V152A152,152,0,0,1,1064,0H912V304Z" fill="#fff" />
        <path d="M1216,152A152,152,0,0,0,1368,0H1216Z" fill="#a6c8ff" />
        <path
          d="M1216,152V304h304V.332H1368A152,152,0,0,1,1216,152Z"
          fill="#d0e2ff"
        />
        <polygon
          points="608.622 608 608.622 912 304.622 608 608.622 608"
          fill="#001141"
        />
        <polygon
          points="913.327 912 913.327 1216 609.327 912 913.327 912"
          fill="#d4bbff"
        />
        <polygon
          points="608.622 608 608.622 912 912.622 608 608.622 608"
          fill="#0043ce"
        />
        <polygon
          points="305.33 608 305.33 608.71 304.62 608 305.33 608"
          fill="#001141"
        />
        <path d="M715.479,411.48a152,152,0,1,1-214.96-214.96Z" fill="#fff" />
        <path
          d="M760,304a151.487,151.487,0,0,1-44.52,107.48L500.521,196.52A152,152,0,0,1,760,304Z"
          fill="#d4bbff"
        />
        <rect x={2128} width={304} height={304} fill="#fff" />
        <rect x={2128} y={304} width={304} height={304} fill="#f6f2ff" />
        <path
          d="M2432.4,0V152a151.781,151.781,0,0,0-151.78,151.78V304h-152v-.22c0-111.86,60.46-209.59,150.48-262.31A302.343,302.343,0,0,1,2432.4,0Z"
          fill="#e8daff"
        />
        <path
          d="M2128.622,304.22h152A151.781,151.781,0,0,0,2432.4,456h.22V608h-.22c-111.86,0-209.59-60.46-262.31-150.48A302.343,302.343,0,0,1,2128.622,304.22Z"
          fill="#d4bbff"
        />
        <polygon points="1368 304 1368 456 1216 456 1368 304" fill="#001141" />
        <rect x={1368} y={304} width={152} height={608} fill="#0043ce" />
        <polygon points="1064 304 1064 456 912 456 1064 304" fill="#4589ff" />
        <rect x={1064} y={304} width={152} height={608} fill="#0043ce" />
        <polygon
          points="1824.622 608 1520.622 608 1824.622 912 1824.622 608"
          fill="#fff"
        />
        <polygon
          points="910.991 1216 607.807 912 607.807 1216 607.807 1216 910.991 1216"
          fill="#edf5ff"
        />
        <polygon
          points="607.807 912 607.806 912 607.806 912 607.806 912 304.622 912 304.622 1216 304.622 1216 304.622 1216 607.807 1216 607.806 912 607.807 912"
          fill="#edf5ff"
        />
        <polygon
          points="304.622 608 304.622 912 607.806 912 607.807 912 304.622 608"
          fill="#edf5ff"
        />
        <polygon
          points="608.622 912 304.622 912.001 608.622 1216 608.622 912"
          fill="#d0e2ff"
        />
        <polygon
          points="2433.341 1215.655 1825.341 1215.655 1825.341 607.655 2433.341 1215.655"
          fill="#d4bbff"
        />
        <polygon
          points="2432.622 1214.936 2432.622 608 1825.687 608 2432.622 1214.936"
          fill="#e8daff"
        />
        <polygon
          points="1825.341 1215.655 1825.341 608 1824.622 608 1824.622 1216 2432.622 1216 2432.622 1215.655 1825.341 1215.655"
          fill="#e8daff"
        />
        <path
          d="M2281.341,911.655a151.487,151.487,0,0,1-44.52,107.48l-214.96-214.96a152,152,0,0,1,259.48,107.48Z"
          fill="#d4bbff"
        />
        <path
          d="M2236.821,1019.135l-214.96-214.96c.493-.493,1-.975,1.5-1.461a151.99,151.99,0,1,0,214.829,215.024C2237.731,1018.2,2237.281,1018.675,2236.821,1019.135Z"
          fill="#fff"
        />
      </svg>
  );
}
