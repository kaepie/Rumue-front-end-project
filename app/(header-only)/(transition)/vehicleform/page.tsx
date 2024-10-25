"use client";

import ParagraphAnimation from "@/app/components/ParagraphAnimation";
import TextTitleAnimation from "@/app/components/TextTitleAnimation";
import Link from "next/link";
import { useEffect, useState } from "react";
import SelectBox from "./selectBox";
import Form from "./form";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function VehicleForm() {
    const router = useRouter();

    const [value, setValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [list, setList] = useState([]);

    

    // Fetch data from the json file about dropdown list
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch('/json/selectModel.json'); // Adjusted to the correct path
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            const valueJson = await res.json();
            setList(valueJson);
          } catch (error) {
            console.error("Error loading typeData:", error);
          }
        };
    
        fetchData();
      }, []);    

    const handleToPayment = () => {
        router.push("/payment");
    }

    return (
        <div className="h-auto w-screen flex flex-col justify-center items-center px-28">
            {/*  */}
            {/* <Link href={{pathname :"/showPrice"}}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    showPrice
                </button>
            </Link>
            <Link href={{pathname :"/payment", query : {name: "peak"}}}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    payment
                </button>
            </Link> */}
            <div className="container h-auto w-full flex  border-primaryText border-2 rounded-2xl bg-primaryBackground px-16 py-24">
                <div className="w-full h-full flex flex-col gap-20">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-6 items-center">
                            <TextTitleAnimation content="ข้อมูล​​​​​​​​รถยนต์" className="text-2xl text-primaryText font-bold"/>
                            <ParagraphAnimation content="- กรุณากรอกข้อมูลรถยนต์ของท่าน" className="text-primaryText"/>
                        </div>
                        <SelectBox nameMenu="เลือก" list={list} isOpen={isOpen} setIsOpen={setIsOpen} value={value} setValue={setValue}/>
                    </div>
                    <div className="flex flex-col gap-12 justify-center">
                        {/* row 1 */}
                        <Form content1="วันจดทะเบียน" content2="เลขทะเบียน"/>
                        {/* row 2 */}
                        <Form content1="จังหวัด" content2="ประเภท"/>
                        {/* row 3 */}
                        <Form content1="รย." content2="ลักษณะ"/>
                        {/* row 4 */}
                        <Form content1="ยี่ห้อรถ" content2="แบบ"/>
                        {/* row 5 */}
                        <Form content1="รุ่นปี ค.ศ." content2="สี"/>
                        {/* row 6 */}
                        <Form content1="เลขตัวรถ" content2="ที่อยู่เลขตัวรถ"/>
                        {/* row 7 */}
                        <Form content1="ยี่ห้อเครื่องยนต์" content2="เลขเครื่องยนต์"/>
                        {/* row 8 */}
                        <Form content1="ที่อยู่เลขเครื่องยนต์" content2="เชื้อเพลิง"/>
                        {/* row 9 */}
                        <Form content1="เลขถังแก๊ส" content2="ลักษณะล้อ"/>
                        {/* row 10 */}
                        <Form content1="จำนวนสูบ" content2="ซีซี"/>
                        {/* row 11 */}
                        <Form content1="แรงม้า" content2="น้ำหนักรถ"/>
                        {/* row 12 */}
                        <Form content1="น้ำหนักรวม" content2="จำนวนที่นั่ง"/>
                        <div className="flex justify-center items-center">
                            <motion.button
                            whileTap={{ scale: 0.97 }}
                            onClick={handleToPayment}
                            className="mt-20 flex flex-row w-fit items-center justify-center shadow-lg rounded-3xl py-2 px-4 bg-primaryText text-primaryBackground border-2 border-primaryText hover:bg-primaryBackground hover:text-primaryText"
                            >
                            ถัดไป
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}