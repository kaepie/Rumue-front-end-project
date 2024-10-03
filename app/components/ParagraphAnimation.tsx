'use client'

import { useRef } from "react";
import { useInView } from "framer-motion";

interface ParagraphProps {
    content: string;
    className?: string;
}

export default function ParagraphAnimation({content, className}: ParagraphProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (
        <p
            className={`select-none cursor-default ${className}`}
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(20px) scale(0.95)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.2s ease 0.5s"
            }}
        >
            {content}
        </p>
    );
}