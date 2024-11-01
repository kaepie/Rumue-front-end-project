import ParagraphAnimation from "@/app/components/ParagraphAnimation";
import { useEffect } from "react";

interface setVehicleForm {
    tag: string;
    value: string;
}

interface formProps {
    content1: string;
    content2: string;
    value1: string | number;
    setValue1: any;
    value2: string | number;
    setValue2: any;

    errorField1: boolean;
    errorField2: boolean;
    checkErrorFormOnChange: () => void;
    type: string;
    pattern?: string;
    onInput?: (e: any) => void;
}
export default function Form({ content1, content2, value1, setValue1, value2, setValue2, errorField1, errorField2, checkErrorFormOnChange, onInput, type, pattern}: formProps) {
    return (
        <div className="flex flex-row gap-20">
            <div className="w-full flex flex-row items-center gap-10">
                <ParagraphAnimation content={content1} className="text-primaryText w-1/3" />
                <input
                    value={value1}
                    onChange={async (e) => {
                        await setValue1(e.target.value);
                        checkErrorFormOnChange();
                    }}
                    placeholder={content1}
                    type={type}
                    pattern={pattern}
                    onInput={onInput}
                    className={`w-full h-14 text-primaryText rounded-xl p-3 border-2 ${errorField1 ? "border-red-500" : "border-primaryText"} placeholder-secondaryText focus:outline-none focus:border-primary focus:ring-0 transition duration-200 ease-in-out hover:shadow-md`}
                />
            </div>
            <div className="w-full flex flex-row items-center gap-10">
                <ParagraphAnimation content={content2} className="text-primaryText w-1/3" />
                <input
                    value={value2}
                    onChange={async (e) => {
                        await setValue2(e.target.value);
                        checkErrorFormOnChange();
                    }}
                    placeholder={content2}
                    type={type}
                    pattern={pattern}
                    onInput={onInput}
                    className={`w-full h-14 text-primaryText rounded-xl p-3 border-2 ${errorField2 ? "border-red-500" : "border-primaryText"} placeholder-secondaryText focus:outline-none focus:border-primary focus:ring-0 transition duration-200 ease-in-out hover:shadow-md`}
                />
            </div>
        </div>
    );
}