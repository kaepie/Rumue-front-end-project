import { motion, Variants } from "framer-motion";
import { useEffect } from "react";

interface SelectBoxProps {
    nameMenu: string;
    type: string;
    value: string;
    list: { [key: string]: string | string[] };
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    setValue: (value: string) => void;
    handleChangeSelect: (t: string) => void;
    handleChangeOpen: (t: string) => void;
}

interface SelectItemProps {
    data: string;
    handleSelect: (data: string) => void;
}

export default function SelectBox({
    nameMenu,
    type,
    value,
    setValue,
    isOpen,
    setIsOpen,
    list,
    handleChangeSelect,
    handleChangeOpen
}: SelectBoxProps) {

    const handleSelect = (data: string) => {
        setValue(data);
        setIsOpen(!isOpen);
        handleChangeSelect(type);
    };

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="relative w-[500px] flex flex-col gap-2"
        > 
            <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => handleChangeOpen(type)}
                className="w-full flex flex-row bg-primaryBackground text-primaryText rounded-xl justify-between items-center px-4 py-2 drop-shadow-md"
            >
                {value === "" ? nameMenu : value}
                <motion.div
                    variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                >
                    <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </motion.div>
            </motion.button>

            <motion.ul
                variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05
                        }
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3
                        }
                    }
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
                className="z-10 absolute top-14 border-2 h-60 border-border rounded-xl overflow-y-auto bg-primaryBackground w-full"
            >
                { (type === "brand" || type === "model") ?
                  Object.keys(list).map((key) => (
                      <SelectItem
                          key={key}
                          data={key}
                          handleSelect={handleSelect}
                      />
                  )) : list.map((item, index) => (
                      <SelectItem
                          key={index}
                          data={item}
                          handleSelect={handleSelect}
                      />
                  ))
                }
            </motion.ul>
        </motion.nav>
    );
}

function SelectItem({ data, handleSelect }: SelectItemProps) {
    const itemVariants: Variants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };

    return (
        <motion.button 
            onClick={() => handleSelect(data)} 
            variants={itemVariants} 
            className="px-4 py-2 text-primaryText w-full text-left hover:bg-secondaryBackground"
        >
            {data}
        </motion.button>
    );
}