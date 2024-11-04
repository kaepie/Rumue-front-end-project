'use client';

import ParagraphAnimation from "@/app/components/ParagraphAnimation";
import TextTitleAnimation from "@/app/components/TextTitleAnimation";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import CardType from "./cardtype";
import Image from "next/image";
import checkPriceSection2 from "@/public/checkPriceSection2.png";
import SelectBox from "./selectBox";
import checkPriceSection3 from "@/public/checkPriceSection3.png";
import { useRouter } from "next/navigation";

interface SelectDataProps {
    Tree: {
      [brand: string]: {
        [model: string]: string[];
      };
    };
}

export default function CheckPrice() {
  const router = useRouter();
  
  const [type, setType] = useState("");
  
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);
  
  
  const [typeData, settypeData] = useState([]);
  const [selectData, setSelectData] = useState<SelectDataProps>({ Tree: {} } );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [checkButtonClick, setCheckButtonClick] = useState(false);
  const Section2Ref = useRef<HTMLDivElement>(null);
  const Section3Ref = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    setCheckButtonClick(true);
  
    setTimeout(() => {
      if (Section2Ref.current) {
        Section2Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  }

  useEffect(() => {
    setTimeout(() => {
      if (Section3Ref.current) {
        Section3Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  }, [year]);
  

  const typeDataCard4 = [
    {
      data:"คุ้มครองค่ารักษาพยาบาลกรณีบาดเจ็บจากอุบัติเหตุ"
    },
    {
      data:"ค่าชดเชยกรณีสูญเสียชีวิตหรือทุพพลภาพถาวร"
    },
    {
      data: "คุ้มครองเฉพาะความเสียหายที่เกิดกับชีวิตและร่างกาย ไม่คุ้มครองความเสียหายของทรัพย์สิน"
    },
    {
      data: "เป็นประกันภาคบังคับที่ผู้ขับขี่ทุกคนต้องมีตามกฎหมาย"
    }
  ];

  const handleChangeSelect = (t: string) => {
    if (t === "brand") {
      setModel("");
      setYear("");
    }
    if (t === "model") {
      setYear("");
    }
  }

  const handleChangeOpen = (t: string) => {
    if (t === "brand") {
      setIsBrandOpen(!isBrandOpen);
      setIsModelOpen(false);
      setIsYearOpen(false);
    }
    if (t === "model") {
      setIsModelOpen(!isModelOpen);
      setIsBrandOpen(false);
      setIsYearOpen(false);
    }
    if (t === "year") {
      setIsYearOpen(!isYearOpen);
      setIsBrandOpen(false);
      setIsModelOpen(false);
    }
  }

  // Fetching typeData client-side
  useEffect(() => {
    const fetchtypeData = async () => {
      try {
        const res = await fetch('/json/checkPriceSelectType.json'); // Adjusted to the correct path
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const jsontypeData = await res.json();
        settypeData(jsontypeData);
      } catch (error) {
        console.error("Error loading typeData:", error);
      }
    };

    fetchtypeData();
  }, []);

  useEffect(() => {
    const fetchSelectData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/insurance`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const SelectDataJson = await res.json();
        setSelectData(SelectDataJson);

      } catch (error) {
        console.error("Error loading typeData:", error);
      }
    };

    fetchSelectData();
  }, []);

  const handleClickShowPrice = () => {
    console.log(type, brand, model, year, mileage);
    router.push(`/transaction?type=${type}&brand=${brand}&model=${model}&year=${year}&mileage=${mileage}`);
  }

  return (
    <div className="h-auto w-screen">
      {/* Section 1 */}
      <section className="w-screen h-screen flex flex-col justify-center items-center gap-20">
        <TextTitleAnimation className="text-2xl text-primaryText font-semibold" content="เช็คราคาประกันภัยรถยนต์และพรบ." />
        <div className="flex flex-col justify-center items-center w-full gap-6">
          <TextTitleAnimation className="text-lg text-primaryText" content="ประเภท" />
          
          {/* card select type */}
          <div className="grid grid-cols-4 gap-6 px-6">
            {typeData.map((item: any, index: number) => (
              <CardType key={index} title={item.title} list={item.list} typeItem={item.type} type={type} setType={setType} />
            ))}
            <CardType type={type} title="พรบ." list={typeDataCard4} typeItem="class0" setType={setType} />
          </div>

        </div>
        
        {/* button go to next section */}
        {type !== "" && !checkButtonClick && (
          <button 
              onClick={scrollToNextSection}
              className="flex flex-row items-center justify-center shadow-lg rounded-3xl py-2 px-4 bg-primaryText text-primaryBackground border-2 border-primaryText hover:bg-primaryBackground hover:text-primaryText"
            >
                ถัดไป
          </button>
        )}

      </section>

      {/* Section 2 */}
      { checkButtonClick && (
      <section className="h-screen w-full flex flex-col justify-center items-center gap-24 pb-40" ref={Section2Ref}>
        <div className="flex flex-col items-center gap-6">
          <div className="h-32 w-32 overflow-clip rounded-xl">
            <Image
                className=""
                alt="Background"
                src={checkPriceSection2}
                draggable={false}
                quality={100}
                sizes="100vw"
                style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'contain',
                }}
            />
          </div>
          <TextTitleAnimation className="text-xl text-primaryText" content="ข้อมูลรถยนต์ของคุณ" />
        </div>
        <div className="flex flex-col items-center gap-8">
        {
          selectData &&(
            <SelectBox
            nameMenu="ยี่ห้อ"
            type="brand"
            value={brand}
            setValue={setBrand}
            isOpen={isBrandOpen}
            setIsOpen={setIsBrandOpen}
            list={selectData["Tree"]}
            handleChangeSelect={handleChangeSelect}
            handleChangeOpen={handleChangeOpen}
        />
          )
        }
        {brand !== "" && (
            <SelectBox nameMenu="รุ่น" type="model" list={selectData["Tree"][brand]} isOpen={isModelOpen} setIsOpen={setIsModelOpen} value={model} setValue={setModel} handleChangeSelect={handleChangeSelect} handleChangeOpen={handleChangeOpen}/>
          )
        }
        {brand !== "" && model !== "" && (
          <SelectBox nameMenu={"ปีรุ่น"} type={"year"} list={selectData["Tree"][brand][model]} isOpen={isYearOpen} setIsOpen={setIsYearOpen} value={year} setValue={setYear} handleChangeSelect={handleChangeSelect} handleChangeOpen={handleChangeOpen}/>
        )}
        </div>
      </section>
      )}

      {/* Section 3 */}
      { year !== "" && (
        <section className="h-screen w-full flex flex-col justify-center items-center" ref={Section3Ref}>
          <div className="flex flex-col items-center gap-6">
            <div className="h-32 w-32 overflow-clip rounded-xl">
                <Image
                    className=""
                    alt="Background"
                    src={checkPriceSection3}
                    draggable={false}
                    quality={100}
                    sizes="100vw"
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'contain',
                    }}
                />
            </div>
            <TextTitleAnimation className="text-xl text-primaryText" content="เลขไมล์" />
          </div>
          <div className="flex flex-col items-center gap-16">
            <ParagraphAnimation className="text-primaryText" content="ระบุเลขไมล์รถยนต์ของคุณ" />
            <input
              onChange={(e) => setMileage(e.target.value)}
              value={mileage}
              type="number"
              placeholder="xxxxx"
              className="w-72 text-primaryText border-2 border-border rounded-md p-3 placeholder-secondaryText 
                        focus:outline-none focus:border-primary focus:ring-0 
                        transition duration-200 ease-in-out hover:shadow-md"
            />
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={handleClickShowPrice}
              className="mt-24 flex flex-row items-center justify-center shadow-lg rounded-3xl py-2 px-4 bg-primaryText text-primaryBackground border-2 border-primaryText hover:bg-primaryBackground hover:text-primaryText"
            >
              เช็คราคา
            </motion.button>
          </div>
        </section>
      )}
    </div>
  );
}