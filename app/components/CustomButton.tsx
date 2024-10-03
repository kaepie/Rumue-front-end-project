'use client';

import { useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface CustomButtonProps {
    content: string;
    className?: string;
    page: string;
    Element?: JSX.Element;
}

export default function CustomButton({ content, className, page ,Element}: CustomButtonProps) {
    const router = useRouter();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleClick = () => {
        router.push(page);
    };

    return (
        <button
            onClick={handleClick}
            className={`flex flex-row items-center justify-center rounded-3xl p-3 ${className}`}
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(20px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.5s ease 0.5s",
            }}
        >
            {content}
            {Element}
        </button>
    );
}