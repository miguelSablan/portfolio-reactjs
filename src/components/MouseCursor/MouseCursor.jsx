import { useEffect, useState } from "react";
import "./MouseCursor.css";

const MouseCursor = () => {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const { x, y } = point;

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }) => {
      setPoint({ x: clientX, y: clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      className="mousecursor-overlay"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    />
  );
};

export default MouseCursor;
