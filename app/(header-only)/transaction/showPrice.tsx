'use client';

import TextTitleAnimation from "@/app/components/TextTitleAnimation";
import List from "./list";
import ParagraphAnimation from "@/app/components/ParagraphAnimation";
import { useEffect, useState } from "react";

interface ListShowPriceProps {
    type?: string;
    model?: string;
    brand?: string;
    year?: string;
    mileage?: string;
    setState: any;
}

export default function ShowPrice({type, model, brand, year, mileage, setState}: ListShowPriceProps) {

    const [list, setList] = useState<{ [key: string]: any[] }>({});
    
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

    return (
        <div className="h-auto w-screen flex flex-col justify-center items-center px-72 pb-12 ">
            <div className="container flex flex-col h-fit bg-primaryBackground border-primaryText border-[1px] rounded-2xl py-10 px-12">
                <div className="w-full flex justify-end">
                    <div className="flex justify-center items-center py-2 px-6 bg-primaryText rounded-3xl">
                        <TextTitleAnimation content="ราคา" className="text-xl text-primaryBackground"/>
                    </div>
                </div>
                <div className="mt-10 mb-10">
                    <TextTitleAnimation content={`${type == "class1" ? "ประกันชั้น 1": type == "class2" ? "ประกันชั้น 2" : type == "class3" ? "ประกันชั้น 3": "พรบ."}`} className="text-5xl text-primaryText font-bold"/>
                    <ParagraphAnimation content={`${brand}, ${model}, ${year}`} className="text-xl text-primaryText"/>
                    <ParagraphAnimation content={`< ${mileage} km`} className="text-xl text-primaryText"/>
                </div>
                {type && list[type]?.map((item: any, index: any) => (
                    <List key={index} data={item}/>
                ))}
                <div className="flex flex-row justify-center mt-10">
                    <button onClick={() => setState("vehicleform")} className="flex flex-row items-center justify-center shadow-lg rounded-3xl py-2 px-4 bg-primaryText text-primaryBackground border-2 border-primaryText hover:bg-primaryBackground hover:text-primaryText w-fit">
                        ทำรายการ
                    </button>
                </div>
            </div>
        </div>
    );
}