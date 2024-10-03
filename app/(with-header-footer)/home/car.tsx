'use client'

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import car from "../../public/car.png";


export default function Car() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (
        <Image
            ref={ref}
            className="z-10 absolute -bottom-1/2 -right-[30%] select-none cursor-default"
            alt="Car"
            src={car}
            quality={100}
            draggable={false}
            sizes="100vw"
            style={{
                objectFit: 'contain',
                transform: isInView ? "none" : "translateX(600px)",
                // opacity: isInView ? 1 : 0,
                transition: "all 2s ease-out 0.5s"
              }}
        />
    );
}