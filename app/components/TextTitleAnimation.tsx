'use client'

import { useRef } from "react";
import { useInView } from "framer-motion";

interface props {
    content: string;
    className?: string;
}

export default function TextTitleAnimation({content, className} : props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (
        <h1
            ref={ref}
            className={`${className} select-none cursor-default `}
            style={{
                transform: isInView ? "none" : "translateY(20px) scale(0.95)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.6s ease-out 0.5s"
            }}
        >
            {content}
        </h1>
    );
}