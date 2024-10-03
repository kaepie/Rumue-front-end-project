'use client'

import { useRef } from "react";
import { useInView } from "framer-motion";

const CheckPrice = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <div
        ref={ref}
        className="w-screen flex justify-center items-center"
        style={{
            transform: isInView ? "none" : "scale(0.95) translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s ease-out 0.5s"
          }}
      >
        Fade In Element
      </div>
    </div>
  );
};

export default CheckPrice;