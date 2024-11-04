import ParagraphAnimation from "@/app/components/ParagraphAnimation";
import TextTitleAnimation from "@/app/components/TextTitleAnimation";

interface CardSection2Props {
    number: string;
    title: string;
    description: string;
}

export default function CardSection2({number, title, description} : CardSection2Props){
    return (
        <div className="w-full h-auto text-center border-2 border-secondaryBackground rounded-lg py-16 px-10 space-y-4 bg-white">
                <TextTitleAnimation className="text-secondaryButton text-5xl font-black text-" content={`${number}`}/>
                <TextTitleAnimation className="text-primaryButtonHover text-xl font-extrabold" content={`${title}`}/>
                {/* <ParagraphAnimation className="text-primaryButton text-lg" content={`${description}`}/> */}
        </div>
    );
}