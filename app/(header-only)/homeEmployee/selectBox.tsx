import { motion, Variants } from "framer-motion";

interface SelectBoxProps {
    nameMenu: string;

    value: string;
    setValue: (value: string) => void;
    
    list: any[];

    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

interface SelectItemProps{
    data: string; ///data ที่เอาไว้ show ใน dropdown
    handleSelect: (data: string) => void; //เมื่อเลือก data นี้ จะทำอะไร
}

export default function SelectBox({nameMenu, value, setValue, isOpen, setIsOpen, list} : SelectBoxProps) {

    const handleSelect = (data: string) => {
        setValue(data);
        setIsOpen(!isOpen);
    };

    return (
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="relative w-2/3 flex flex-col gap-2"
        > 
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
            className=" w-full flex flex-row bg-primaryText text-primaryBackground rounded-xl justify-between items-center px-4 py-2 drop-shadow-md"
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
                <path d="M0 7 L 20 7 L 10 16" fill="white"/>
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
            className="z-10 absolute top-14 border-2 h-auto border-border rounded-xl overflow-y-auto bg-primaryBackground w-full"
          >
            {   
                list.map((item, index) => (    
                    <SelectItem key={index} data={item} handleSelect={handleSelect} />
                ))
            }
          </motion.ul>
        </motion.nav>
    );
}
function SelectItem({data, handleSelect} : SelectItemProps) {
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
            onClick={() => {
                    handleSelect(data);
            }} 
            variants={itemVariants} 
            className="px-4 py-2 text-primaryText w-full text-left hover:bg-secondaryBackground"
        >
            {data}
        </motion.button>
    );
}
