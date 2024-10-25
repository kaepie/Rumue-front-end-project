import ParagraphAnimation from "@/app/components/ParagraphAnimation";
import TextTitleAnimation from "@/app/components/TextTitleAnimation";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

interface CardTypeProps {
    title: string;
    list: any[];
    type: string;
    typeItem: string;
    setType: (type: string) => void;
}


interface ListProps {
    data: string;
}

export default function CardType({title, list, typeItem, type, setType} : CardTypeProps){

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return(
        <div className={`w-full h-auto border-[1px] ${type === typeItem ? "bg-primaryText" : "bg-primaryBackground"} border-border rounded-xl px-6 pt-6 pb-60 space-y-6`}>
            <TextTitleAnimation className={`text-3xl font-bold ${type === typeItem ? "text-primaryBackground" : "text-primaryText"}`} content={title}/>
            <div className="relative space-y-2">
                {list.map((item :any, index :any) => (
                    <List key={index} data={item.data}/>
                ))}
                <div className="absolute right-0 -bottom-52">
                <button 
                    onClick={() => setType(typeItem)}
                    className={`flex flex-row items-center justify-center shadow-lg rounded-3xl py-2 px-4 ${type === typeItem ? "bg-primaryBackground" : "bg-primaryText"} text-primaryBackground border-2 border-primaryText hover:bg-primaryBackground hover:text-primaryText`}
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateY(20px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 1.5s ease 0.5s",
                    }}>
                    {type === typeItem && <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-primaryText`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>}
                    {type !== typeItem ? "เลือก" : ""}
                </button>
                </div>
            </div>
        </div>
    );

    function List({data} : ListProps){
        return(
            <div className="flex flex-row gap-2 justify-center items-center">
                <motion.div 
                    animate={{ y: [40, 0], opacity: [0, 1] , scale: [0.95, 1]}}
                    transition={{ ease: "easeOut", duration: 1.2 }}
                    className={`rounded-full border-[2px] border-primaryText ${type === typeItem ? "bg-primaryBackground" : "bg-primaryText"} w-6 h-6 flex justify-center items-center`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${type === typeItem ? "text-primaryText" : "text-primaryBackground"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </motion.div>

                <ParagraphAnimation className={`${type === typeItem ? "text-primaryBackground" : "text-primaryText"} font-semibold`} content={data}/>
            </div>
        )
    }
}
