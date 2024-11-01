
"use client";
import ParagraphAnimation from "@/app/components/ParagraphAnimation";
import TextTitleAnimation from "@/app/components/TextTitleAnimation";
import { useEffect, useState } from "react";
import Image from "next/image";
import SelectBox from "./selectBox";
import Form from "./form";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface VehicleFormProps {
    filePreview: string | null;
    setFilePreview: any;
    vehicleform: any;
    handleToSetVehicleForm: any;
    setState: any;
    registrationDate: string;
    setRegistrationDate: any;
    newhandleToSetVehicleForm: any;
}

export default function VehicleForm({ vehicleform, handleToSetVehicleForm, filePreview, setFilePreview, setState, registrationDate, setRegistrationDate, newhandleToSetVehicleForm}: VehicleFormProps) {

    const [value, setValue] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [list, setList] = useState([]);

    
    const fileInput = useRef<HTMLInputElement>(null);
    const [errorFields, setErrorFields] = useState<{ [key: string]: boolean }>({});
    const [checkError, setCheckError] = useState<boolean>(false);
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "unauthenticated") {
        router.push("/login");
      }
    }
    , [status]);

    useEffect(() => {
        console.log("Registration Date:", registrationDate);
    },[registrationDate]);

    

    // useEffect(() => {
    //     console.log(filePreview);
    // }, [filePreview]);

    useEffect(() => {
        if (vehicleform.filePreviewUrl) {
            setFilePreview(vehicleform.filePreviewUrl); // ใช้ URL ที่บันทึกไว้ใน database
        }
    }, [vehicleform.filePreviewUrl]);

    useEffect(() => {
        console.log("Vehicle form:", vehicleform);
    }, [vehicleform]);

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
        setState("payment");
    }

    async function checkErrorForm() {
        const requiredFields = [
            "registrationNumber", "province", "vehicleType", 
            "vehicleCategory", "characteristics", "vehiclecolor", "vehicleNumber",
            "vehicleNumberLocation", "engineNumber", "engineNumberLocation", 
            "engineBrand", "fualType", "CC", "wheelType", "chasisNumber", 
            "hoursePower", "seatingCapacity", "weightUnladen", "weightLaden", 
            "totalPiston"
        ];

        const newErrorFields: { [key: string]: boolean } = {};
        let hasError = false;

        requiredFields.forEach((field) => {
            if (!vehicleform[field]) {
                newErrorFields[field] = true;
                hasError = true;
                setCheckError(true);
            } else {
                newErrorFields[field] = false;
            }
        });
        if (!registrationDate) {
            newErrorFields["registrationDate"] = true;
            hasError = true;
            setCheckError(true);
        }

        setErrorFields(newErrorFields);
        console.log(hasError);
        if (!hasError) {
            const checkUpload = await uploadFile();
            if (checkUpload) {
                hasError = true;
                setCheckError(true);
            }
            if (!hasError || vehicleform.filePreviewUrl) {
                hasError = false;
                setCheckError(false);
                handleToPayment();
            }
        }
    }


    async function uploadFile() {
        const file = fileInput.current?.files?.[0];

        if (file) {
            const formData = new FormData();
            formData.append("file", file);

            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });
            const result = await response.json();
            console.log(result);

            const previewUrl = `/uploads/${file.name}`;

            handleInputChange("filePreviewUrl", previewUrl);

            return false;
        }
        return true;
    }

    const handleInputChange = (tag: string, value: string | number) => {
        handleToSetVehicleForm({ tag, value });

        // Update error status based on whether the field is empty
        setErrorFields((prevErrors) => ({
            ...prevErrors,
            [tag]: value.toString().trim() === ""
        }));   
    };

    const handleFileChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const file = evt.target.files?.[0];

        if (file) {
            // Generate a preview URL
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setFilePreview(reader.result as string);
            };
            // console.log(fileInput);
        }
    };
    useEffect(() => {
    const fetchSelectVehicleData = async () => {
        try {
        const token = session?.user.token;
        const res = await fetch(`http://localhost:3001/vehicle/template`, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${token}`, // ใช้ token จาก session
            'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const selectJson = await res.json();
        const vehicles = selectJson.vehicles || [];

        setList(vehicles);

        console.log("Vehicles:", vehicles);
        console.log("List state:", list);
        } catch (error) {
        console.error("Error loading Vehicle Data:", error);
        }
    };

    fetchSelectVehicleData();
    }, [session]);

    return (
        <div className="h-auto w-screen flex flex-col justify-center items-center px-28">
            <div className="container h-auto w-full flex  border-primaryText border-[1px] rounded-2xl bg-primaryBackground px-16 py-24">
                <div className="w-full h-full flex flex-col gap-20">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-row justify-start">
                            <button onClick={() => setState("showPrice")}>
                                <span className="text-primaryText underline"> ย้อนกลับ </span>
                            </button>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row gap-6 items-center">
                                <TextTitleAnimation content="ข้อมูล​​​​​​​​รถยนต์" className="text-2xl text-primaryText font-bold" />
                                <ParagraphAnimation content="- กรุณากรอกข้อมูลรถยนต์ของท่าน" className="text-primaryText" />
                            </div>
                            {
                                <SelectBox nameMenu="เลือก" list={list ? list : []} isOpen={isOpen} setIsOpen={setIsOpen} value={value} setValue={setValue} handleInputChange={handleInputChange} newhandleToSetVehicleForm={newhandleToSetVehicleForm}/>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 justify-center">
                        {/* row 1 */}
                        <Form content1="จำนวนล้อ" content2="เลขทะเบียน" tag1="wheelType" tag2="registrationNumber" handleToSetVehicleForm={handleToSetVehicleForm} vehicleform={vehicleform} errorFields={errorFields} setErrorFields={setErrorFields} />

                        {/* row 2 */}
                        <Form content1="จังหวัด" content2="สีรถ" tag1="province" tag2="vehiclecolor" handleToSetVehicleForm={handleToSetVehicleForm} vehicleform={vehicleform} errorFields={errorFields} setErrorFields={setErrorFields} />

                        {/* row 3 */}
                        <Form content1="รย." content2="ลักษณะ" tag1="vehicleCategory" tag2="characteristics" handleToSetVehicleForm={handleToSetVehicleForm} vehicleform={vehicleform} errorFields={errorFields} setErrorFields={setErrorFields} />

                        {/* row 4 */}
                        <div className="w-full flex flex-row items-center">
                            <ParagraphAnimation content={"ประเภท"} className="text-primaryText w-[16%]" />
                            <input
                                name={"vehicleType"}
                                value={vehicleform["vehicleType"]}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                placeholder={"ประเภท"}
                                type="text"
                                className={`w-full h-14 text-primaryText rounded-xl p-3 border-2 ${errorFields["vehicleType"] ? "border-red-500" : "border-primaryText"} placeholder-secondaryText focus:outline-none focus:border-primary focus:ring-0 transition duration-200 ease-in-out hover:shadow-md`}
                            />
                        </div>

                        {/* row 5 */}
                        <Form content1="เลขตัวรถ" content2="ที่อยู่เลขตัวรถ" tag1="vehicleNumber" tag2="vehicleNumberLocation" handleToSetVehicleForm={handleToSetVehicleForm} vehicleform={vehicleform} errorFields={errorFields} setErrorFields={setErrorFields} />

                        {/* row 6 */}
                        <Form content1="ยี่ห้อเครื่องยนต์" content2="เลขเครื่องยนต์" tag1="engineBrand" tag2="engineNumber" handleToSetVehicleForm={handleToSetVehicleForm} vehicleform={vehicleform} errorFields={errorFields} setErrorFields={setErrorFields} />

                        {/* row 7 */}
                        <Form content1="ที่อยู่เลขเครื่องยนต์" content2="เชื้อเพลิง" tag1="engineNumberLocation" tag2="fualType" handleToSetVehicleForm={handleToSetVehicleForm} vehicleform={vehicleform} errorFields={errorFields} setErrorFields={setErrorFields} />

                        {/* row 8 */}
                        <Form content1="เลขถังแก๊ส" content2="ลักษณะล้อ" tag1="chasisNumber" tag2="wheelType" handleToSetVehicleForm={handleToSetVehicleForm} vehicleform={vehicleform} errorFields={errorFields} setErrorFields={setErrorFields} />

                        {/* row 9 */}
                        <Form content1="จำนวนสูบ" content2="ซีซี" tag1="totalPiston" tag2="CC" handleToSetVehicleForm={handleToSetVehicleForm} vehicleform={vehicleform} errorFields={errorFields} setErrorFields={setErrorFields} />

                        {/* row 10 */}
                        <Form content1="แรงม้า" content2="น้ำหนักรถ" tag1="hoursePower" tag2="weightUnladen" handleToSetVehicleForm={handleToSetVehicleForm} vehicleform={vehicleform} errorFields={errorFields} setErrorFields={setErrorFields} />

                        {/* row 11 */}
                        <Form content1="น้ำหนักรวม" content2="จำนวนที่นั่ง" tag1="weightLaden" tag2="seatingCapacity" handleToSetVehicleForm={handleToSetVehicleForm} vehicleform={vehicleform} errorFields={errorFields} setErrorFields={setErrorFields} />
                        <div className="flex flex-row justify-center gap-2">
                            <div className="w-full flex flex-col gap-6">
                                <ParagraphAnimation content="อัปโหลดรูปเล่มจดทะเบียน" className="text-primaryText w-1/3" />
                                <label htmlFor="file" className="flex items-center justify-center w-full max-w-sm py-3 px-6 border-dashed bg-primaryBackground hover:bg-secondaryBackground rounded-2xl cursor-pointer border-2 border-primaryText transition duration-200 ease-in-out">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                                        <svg className="w-8 h-8 mb-4 text-primaryText " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p className="mb-2 text-md text-primaryText "><span className="font-semibold">คลิกเพื่ออัปโหลดรูปภาพ</span> หรือลากรูปภาพมาวาง</p>
                                        <p className="text-xs text-primaryText">SVG, PNG, JPG</p>
                                    </div>
                                    <input
                                        ref={fileInput}
                                        type="file"
                                        id="file"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </label>
                                <div className="w-full max-w-xl flex flex-row gap-4 p-4 bg-primaryBackground shadow-lg rounded-lg">
                                <div className="flex flex-col">
                                    <label className="text-primaryText w-full">วันที่จดทะเบียน</label>
                                    { errorFields["registrationDate"] ?
                                        <label className="text-red-500 w-full"> ค่าว่าง </label>
                                        : <></>
                                    }
                                </div>
                                <input value={registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} className={`text-primaryText w-full ${errorFields["registrationDate"] ? "ring-red-500" : "ring-primaryText"} max-w-md bg-primaryBackground rounded-xl`} type="date"/>
                                </div>
                            </div>
                            <div className="w-full">
                                <h3 className="text-primaryText text-nowrap">รูปภาพที่เลือก:</h3>

                                {filePreview && (
                                    <div className="mt-6">
                                        <Image src={filePreview} alt="File preview" width={400} height={400} />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="">
                            {
                                checkError && (
                                    <div className="flex justify-center items-center h-10 w-full rounded-lg border-red-700 border-2 bg-red-500">
                                        <p className="text-white">{"กรอกข้อมูลไม่ครบถ้วน"}</p>
                                    </div>
                                )
                            }


                            <div className="flex justify-center items-center">
                                <motion.button
                                    whileTap={{ scale: 0.97 }}
                                    onClick={async () => {
                                        await checkErrorForm();
                                    }}
                                    className="mt-20 flex flex-row w-fit items-center justify-center shadow-lg rounded-3xl py-2 px-4 bg-primaryText text-primaryBackground border-2 border-primaryText hover:bg-primaryBackground hover:text-primaryText"
                                >
                                    ถัดไป
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}