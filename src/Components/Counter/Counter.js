import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const Counter = ({ end, duration = 1500 }) => {
  const ref = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const { number } = useSpring({
    from: { number: 0 },
    number: startAnimation ? end : 0,
    config: {
      duration,
    },
  });

  return (
    <span ref={ref}>
      <animated.span>
        {number.to((n) => Math.floor(n))}
      </animated.span>
    </span>
  );
};

export default Counter;