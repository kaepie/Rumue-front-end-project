import ParagraphAnimation from "@/app/components/ParagraphAnimation";

interface setVehicleForm {
    tag: string;
    value: string;
}

interface formProps {
    content1: string;
    content2: string;
    tag1: string;
    tag2: string;
    vehicleform: { [key: string]: string };
    errorFields: { [key: string]: boolean };
    handleToSetVehicleForm: ({ tag, value }: setVehicleForm) => void;
    setErrorFields: (fields: { [key: string]: boolean }) => void;
}

export default function Form({ content1, content2, tag1, tag2, vehicleform, handleToSetVehicleForm, errorFields, setErrorFields }: formProps) {
    const handleInputChange = (tag: string, value: string) => {
        handleToSetVehicleForm({ tag, value });

        // Update error status based on whether the field is empty
        setErrorFields((prevErrors) => ({
            ...prevErrors,
            [tag]: value.trim() === ""
        }));
    };

    return (
        <div className="flex flex-row gap-20">
            <div className="w-full flex flex-row items-center gap-10">
                <ParagraphAnimation content={content1} className="text-primaryText w-1/3" />
                <input
                    name={tag1}
                    value={vehicleform[tag1]}
                    onChange={(e) => handleInputChange(tag1, e.target.value)}
                    placeholder={content1}
                    type="text"
                    className={`w-full h-14 text-primaryText rounded-xl p-3 border-2 ${errorFields[tag1] ? "border-red-500" : "border-primaryText"} placeholder-secondaryText focus:outline-none focus:border-primary focus:ring-0 transition duration-200 ease-in-out hover:shadow-md`}
                />
            </div>
            <div className="w-full flex flex-row items-center gap-10">
                <ParagraphAnimation content={content2} className="text-primaryText w-1/3" />
                <input
                    name={tag2}
                    value={vehicleform[tag2]}
                    onChange={(e) => handleInputChange(tag2, e.target.value)}
                    placeholder={content2}
                    type="text"
                    className={`w-full h-14 text-primaryText rounded-xl p-3 border-2 ${errorFields[tag2] ? "border-red-500" : "border-primaryText"} placeholder-secondaryText focus:outline-none focus:border-primary focus:ring-0 transition duration-200 ease-in-out hover:shadow-md`}
                />
            </div>
        </div>
    );
}