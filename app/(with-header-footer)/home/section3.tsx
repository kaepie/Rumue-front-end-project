import Image from "next/image";
import background from "../../../public/backgroundSection3.png";
import CardSection3 from "./cardsection3";
import TextTitleAnimation from "@/app/components/TextTitleAnimation";
import { promises as fs } from "fs";
import path from "path";

export default async function Section3(){
    const filePath = path.join(process.cwd(), 'public/json/section3.json');
    const file = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(file);

    return (
        <div className="relative flex h-screen w-screen justify-center items-center px-40 py-32 overflow-clip">
            <Image
                className="-z-10"
                alt="Background"
                src={background}
                draggable={false}
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                }}
            />

            <div className="flex flex-row justify-center items-center max-lg:flex-col gap-20">
                <div className="w-full">
                    <TextTitleAnimation content="ทำไมต้องใช้บริการของเรา" className="text-primaryBackground text-5xl font-bold "/>
                </div>
                <div className="w-full grid grid-cols-2 rounded-xl overflow-clip">
                    {data.map((item: any, index: any) => (
                        <CardSection3 key={index} description={item.description} content={item.content}/>
                    ))}
                </div>
            </div>
        </div>
    );
}