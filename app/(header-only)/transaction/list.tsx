"use client";

import ParagraphAnimation from "@/app/components/ParagraphAnimation";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ListProps {
    data: string;
}

export default function List({data} : ListProps){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return(
        <div className="flex flex-row gap-4 mb-6 items-center">
            <div className={`rounded-full border-[2px] border-primaryText bg-primaryText w-6 h-6 flex justify-center items-center`}
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateY(20px) scale(0.95)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s ease-out 0.5s"
                }}
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primaryBackground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <ParagraphAnimation className="text-xl text-primaryText font-medium" content={data}/>
        </div>
    )
}