"use client";

import TextTitleAnimation from "@/app/components/TextTitleAnimation";
import List from "./list";
import { useEffect, useRef, useState } from "react";
import ParagraphAnimation from "@/app/components/ParagraphAnimation";
import Image from "next/image";
import { motion } from "framer-motion";

interface PaymentProps {
    fileSlipPreview: string | null;
    fileSlipUrl: string | null;
    setFileSlipPreview: any;
    setFileSlipUrl: any;
    type: string;
    setState: any;
    clickSubmit: any;
    price: number;
}

export default function Payment({fileSlipPreview, setFileSlipPreview, fileSlipUrl, setFileSlipUrl, type, price, setState, clickSubmit}: PaymentProps){
    const [list, setList] = useState<{ [key: string]: any[] }>({});
    const fileInput = useRef<HTMLInputElement>(null);
    const [hasError, setHasError] = useState(false);
    
    useEffect(() => {
        const fetchListData = async () => {
          try {
            const res = await fetch('/json/listInsurance.json'); // Adjusted to the correct path
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            const listJson = await res.json();
            setList(listJson);
          } catch (error) {
            console.error("Error loading typeData:", error);
          }
        };
    
        fetchListData();
      }, []);
      
    useEffect(() => {
        if (fileSlipUrl) {
            setFileSlipPreview(fileSlipUrl); // ใช้ URL ที่บันทึกไว้ใน database
        }
    }, [fileSlipUrl]);

    const handleFileChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const file = evt.target.files?.[0];

        if (file) {
            // Generate a preview URL
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setFileSlipPreview(reader.result as string);
            };
        }
    };

    async function uploadFile(){
        const file = fileInput.current?.files?.[0];

        if (file) {
            const formData = new FormData();
            formData.append("file", file);

            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });
            const result = await response.json();

            // Generate a preview URL
            const previewUrl = `/uploads/${result.path}`;

            await setFileSlipUrl(previewUrl);
            return false;
        }
        if (fileSlipUrl){
            return false
        }
        return true;
    }

    useEffect(() => {
        if (fileSlipUrl) {
            setFileSlipPreview(fileSlipUrl); // ใช้ URL ที่บันทึกไว้ใน database
        }
    }, [fileSlipUrl]);

    useEffect(() => {
        if(!fileSlipUrl && fileInput.current?.files?.[0]){
            const name = fileInput.current?.files?.[0].name;
            const previewUrl = `/uploads/${name}`;
            setFileSlipUrl(previewUrl);
        }
    }, [fileSlipUrl, uploadFile, fileInput]);


    return(
        <div className="w-screen h-auto flex flex-col justify-center items-center pb-10">
            {/* <button onClick={() => setState("vehicleform")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                ไปหน้ากรอกข้อมูล
            </button> */}
            <div className="w-screen h-auto flex flex-row justify-center items-center gap-10 max-lg:flex-col">
                <div className="container flex flex-col w-96 h-full bg-primaryBackground border-[1px] border-border rounded-3xl p-10 gap-6">
                    <div className="flex flex-row justify-start">
                        <button onClick={() => {
                            setState("vehicleform");
                            uploadFile();
                        }}>
                            <span className="text-primaryText underline"> ย้อนกลับ </span>
                        </button>
                    </div>
                    <TextTitleAnimation content={type == "class1" ? "ประกันชั้น 1" : type == "class2" ? "ประกันชั้น 2" : type == "class3" ? "ประกันชั้น 3" : "พรบ."} className="text-primaryText text-3xl font-bold"/>
                    <div className="flex flex-col">
                        {type && list[type]?.map((item: any, index: any) => (
                            <List key={index} data={item}/>
                        ))}
                    </div>
                    <div className="h-32 w-full border-[1px] border-thrBackground bg-primaryBackground flex justify-center items-center rounded-3xl">
                        <TextTitleAnimation content={`${price} บาท`} className="text-primaryText text-2xl font-black"/>
                    </div>
                </div> 

                <div className="container flex flex-col w-96 h-full bg-primaryBackground border-[1px] border-border rounded-3xl p-10 gap-6">
                    <TextTitleAnimation content="ธนาคารกรุงไทย" className="text-primaryText text-2xl font-black"/>
                    <div className="flex flex-col gap-4">
                        <ParagraphAnimation content="เลขที่บัญชีธนาคาร: 000-0000-0000" className="text-primaryText text-lg"/>
                        <ParagraphAnimation content="ชื่อบัญชี: นายสมชาย ใจดี" className="text-primaryText text-lg"/>
                        <div className="w-full h-60 bg-secondaryBackground rounded-2xl overflow-clip">
                            {fileSlipPreview && (
                                <Image
                                    src={fileSlipPreview}
                                    alt="File preview"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover" // หรือ "object-contain" ตามที่คุณต้องการ
                                />
                            )}
                        </div>
                        <label htmlFor="file" className="flex items-center justify-center w-full max-w-sm py-4 px-6 border-dashed bg-primaryBackground hover:bg-secondaryBackground rounded-2xl cursor-pointer border-2 border-primaryText transition duration-200 ease-in-out">
                            <div className="flex flex-row items-center justify-center gap-4">
                                <svg className="w-8 h-8 text-primaryText flex justify-center items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className=" text-md text-primaryText "><span className="font-semibold">คลิกเพื่ออัปโหลดรูปภาพสลิป</span></p>
                            </div>
                            <input
                                ref={fileInput}
                                type="file"
                                id="file"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>

                    </div>
                </div>
            </div>
            {hasError && (
                <div className="mt-6 flex justify-center items-center h-10 w-1/2 rounded-lg border-red-700 border-2 bg-red-500">
                    <p className="text-white">กรุณาอัปโหลดรูปภาพสลิป</p>
                </div>
            )}
            <div className="flex justify-center items-center">
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={async () => {
                        const checkError = await uploadFile();
                        if (!checkError) {
                            clickSubmit();
                        }
                        setHasError(checkError);
                    }}
                    className="mt-6 flex flex-row w-fit items-center justify-center shadow-lg rounded-3xl py-2 px-4 bg-primaryText text-primaryBackground border-2 border-primaryText hover:bg-primaryBackground hover:text-primaryText"
                >
                    ทำรายการ
                </motion.button>
            </div>
        </div>
    );
}