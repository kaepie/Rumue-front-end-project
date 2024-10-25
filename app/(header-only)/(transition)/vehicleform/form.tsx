import ParagraphAnimation from "@/app/components/ParagraphAnimation";

interface formProps {
    content1: string;
    content2: string;
}

export default function Form({content1, content2}: formProps) {
    return(
        <div className="flex flex-row gap-20">
            <div className="w-full flex flex-row items-center gap-10">
                <ParagraphAnimation content={content1} className="text-primaryText w-1/3"/>
                <input placeholder={content1} type="text" className="w-full h-14 text-primaryText rounded-xl p-3 border-2 border-primaryText placeholder-secondaryText focus:outline-none focus:border-primary focus:ring-0 transition duration-200 ease-in-out hover:shadow-md"/>
            </div>
            <div className="w-full flex flex-row items-center gap-10">
                <ParagraphAnimation content={content2} className="text-primaryText w-1/3"/>
                <input placeholder={content2} type="text" className="w-full h-14 text-primaryText rounded-xl p-3 border-2 border-primaryText placeholder-secondaryText focus:outline-none focus:border-primary focus:ring-0 transition duration-200 ease-in-out hover:shadow-md"/>
            </div>
        </div>
    );
}