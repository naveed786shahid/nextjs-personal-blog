import React, { useRef, useEffect } from "react";

const AnimatedCircleWithArrow: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circle = circleRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (circle) {
        circle.style.left = x + "px";
        circle.style.top = y + "px";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="cursor-circle from-blue-500 to-purple-500 pointer-events-none absolute h-6 w-6 animate-pulse rounded-full bg-gradient-to-br mix-blend-screen"
    >
    </div>
  );
};

export default AnimatedCircleWithArrow;
