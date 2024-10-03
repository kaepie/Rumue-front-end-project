import ParagraphAnimation from "@/app/components/ParagraphAnimation";
import TextTitleAnimation from "@/app/components/TextTitleAnimation";
import CardSection2 from "./cardsection2";
import { promises as fs } from "fs";
import path from "path";

export default async function Section2() {
    const filePath = path.join(process.cwd(), 'app/api/json/section2.json');
    const file = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(file);

    return (
        <div className="flex flex-col h-auto w-screen justify-center items-center gap-4 bg-primaryBackground my-12">
            <TextTitleAnimation className="text-primaryButtonHover text-3xl font-extrabold text-center" content="ขั้นตอนในการทำประกัน หรือ พรบ." />
            <ParagraphAnimation className="text-primaryButton text-lg text-center" content="Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan." />
            <div className="container grid grid-cols-3 gap-6 mt-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {data.map((item: any, index: any) => (
                    <CardSection2 key={index} number={item.number} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
    );
}