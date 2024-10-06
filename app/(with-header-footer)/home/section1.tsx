import Image from "next/image";
import carInsurent from "../../../public/homeBackground.png";
import Car from "./car";
import TextTitleAnimation from "@/app/components/TextTitleAnimation";
import ParagraphAnimation from "@/app/components/ParagraphAnimation";
import CustomButton from "@/app/components/CustomButton";


export default function Section1(){
    return(
        <div className="relative flex h-screen w-screen justify-center items-center px-60 py-32 overflow-clip">
            <Image
                className="-z-10"
                alt="Background"
                src={carInsurent}
                draggable={false}
                fill
                quality={100}
                sizes="100vw"
                style={{
                    objectFit: 'fill',
                }}
            />
            <Car />
            <div className="container flex justify-center items-center z-0 bg-primaryBackground rounded-2xl h-full w-full shadow-2xl px-16">
                <div className="flex flex-col gap-4">
                    <TextTitleAnimation content="ซื้อประกันต่อ พรบ." className="text-primaryText text-5xl text-center font-bold" />
                    <ParagraphAnimation content="ซื้อประกันรถยนต์ชั้น 1, 2, และ 3 หรือต่อ พ.ร.บ. ได้อย่างสะดวกสบายผ่านระบบออนไลน์ที่นี่ พร้อมรับบริการที่รวดเร็วและปลอดภัย" className="text-secondaryText text-center text-2xl" />
                    <div className="w-full flex justify-center">
                        <CustomButton
                            content="เช็คราคา" 
                            page="/checkPrice" 
                            className="bg-primaryText text-primaryBackground border-2 border-primaryText hover:bg-primaryBackground hover:text-primaryText" 
                            Element={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            } 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}