
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
    setState: any;

    id: string;
    setId: any;
    
    registrationDate: string;
    setRegistrationDate: any;
    
    registrationNumber: string;
    setRegistrationNumber: any;

    province: string;
    setProvince: any;

    vehicleType: string;
    setVehicleType: any;

    vehicleCategory: string;
    setVehicleCategory: any;

    characteristics: string;
    setCharacteristics: any;

    vehicleColor: string;
    setVehicleColor: any;

    vehicleNumber: string;
    setVehicleNumber: any;

    vehicleNumberLocation: string;
    setVehicleNumberLocation: any;

    engineNumber: string;
    setEngineNumber: any;

    engineNumberLocation: string;
    setEngineNumberLocation: any;

    engineBrand: string;
    setEngineBrand: any;

    fuelType: string;
    setFuelType: any;

    cc: number;
    setCC: any;

    wheelType: string;
    setWheelType: any;

    chasisNumber: string;
    setChasisNumber: any;

    horsePower: number;
    setHorsePower: any;

    seatingCapacity: number;
    setSeatingCapacity: any;

    weightUnladen: number;
    setWeightUnladen: any;

    weightLaden: number;
    setWeightLaden: any;

    totalPiston: number;
    setTotalPiston: any;

    filePreviewUrl: string | null;
    setFilePreviewUrl: any;

    setIdDuplicate: any;
    setRegistrationDateDuplicate: any;
    setRegistrationNumberDuplicate: any;
    setProvinceDuplicate: any;
    setVehicleTypeDuplicate: any;
    setVehicleCategoryDuplicate: any;
    setCharacteristicsDuplicate: any;
    setVehicleColorDuplicate: any;
    setVehicleNumberDuplicate: any;
    setVehicleNumberLocationDuplicate: any;
    setEngineNumberDuplicate: any;
    setEngineNumberLocationDuplicate: any;
    setEngineBrandDuplicate: any;
    setFuelTypeDuplicate: any;
    setCCDuplicate: any;
    setWheelTypeDuplicate: any;
    setChasisNumberDuplicate: any;
    setHorsePowerDuplicate: any;
    setSeatingCapacityDuplicate: any;
    setWeightUnladenDuplicate: any;
    setWeightLadenDuplicate: any;
    setTotalPistonDuplicate: any;
    setFilePreviewUrlDuplicate: any;

    setType: any;
    setModel: any;
    setYear: any;
    setMileage: any;
    setBrand: any;

}

export default function VehicleForm({
    setState,

    setBrand,
    setModel,
    setYear,
    setMileage,
    setType,

    filePreview,
    id,
    setId,
    setFilePreview,
    registrationDate,
    setRegistrationDate,
    registrationNumber,
    setRegistrationNumber,
    province,
    setProvince,
    vehicleType,
    setVehicleType,
    vehicleCategory,
    setVehicleCategory,
    characteristics,
    setCharacteristics,
    vehicleColor,
    setVehicleColor,
    vehicleNumber,
    setVehicleNumber,
    vehicleNumberLocation,
    setVehicleNumberLocation,
    engineNumber,
    setEngineNumber,
    engineNumberLocation,
    setEngineNumberLocation,
    engineBrand,
    setEngineBrand,
    fuelType,
    setFuelType,
    cc,
    setCC,
    wheelType,
    setWheelType,
    chasisNumber,
    setChasisNumber,
    horsePower,
    setHorsePower,
    seatingCapacity,
    setSeatingCapacity,
    weightUnladen,
    setWeightUnladen,
    weightLaden,
    setWeightLaden,
    totalPiston,
    setTotalPiston,
    filePreviewUrl,
    setFilePreviewUrl,

    setIdDuplicate,
    setRegistrationDateDuplicate,
    setRegistrationNumberDuplicate,
    setProvinceDuplicate,
    setVehicleTypeDuplicate,
    setVehicleCategoryDuplicate,
    setCharacteristicsDuplicate,
    setVehicleColorDuplicate,
    setVehicleNumberDuplicate,
    setVehicleNumberLocationDuplicate,
    setEngineNumberDuplicate,
    setEngineNumberLocationDuplicate,
    setEngineBrandDuplicate,
    setFuelTypeDuplicate,
    setCCDuplicate,
    setWheelTypeDuplicate,
    setChasisNumberDuplicate,
    setHorsePowerDuplicate,
    setSeatingCapacityDuplicate,
    setWeightUnladenDuplicate,
    setWeightLadenDuplicate,
    setTotalPistonDuplicate,
    setFilePreviewUrlDuplicate,

}: VehicleFormProps) {

    const [value, setValue] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [list, setList] = useState([]);

    
    const fileInput = useRef<HTMLInputElement>(null);
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
        if (filePreviewUrl) {
            setFilePreview(filePreviewUrl); // ใช้ URL ที่บันทึกไว้ใน database
        }
    }, [filePreviewUrl]);

    const [errorRegistrationDate, setErrorRegistrationDate] = useState<boolean>(false);
    const [errorRegistrationNumber, setErrorRegistrationNumber] = useState<boolean>(false);
    const [errorProvince, setErrorProvince] = useState<boolean>(false);
    const [errorVehicleType, setErrorVehicleType] = useState<boolean>(false);
    const [errorVehicleCategory, setErrorVehicleCategory] = useState<boolean>(false);
    const [errorCharacteristics, setErrorCharacteristics] = useState<boolean>(false);
    const [errorVehicleColor, setErrorVehicleColor] = useState<boolean>(false);
    const [errorVehicleNumber, setErrorVehicleNumber] = useState<boolean>(false);
    const [errorVehicleNumberLocation, setErrorVehicleNumberLocation] = useState<boolean>(false);
    const [errorEngineNumber, setErrorEngineNumber] = useState<boolean>(false);
    const [errorEngineNumberLocation, setErrorEngineNumberLocation] = useState<boolean>(false);
    const [errorEngineBrand, setErrorEngineBrand] = useState<boolean>(false);
    const [errorFuelType, setErrorFuelType] = useState<boolean>(false);
    const [errorCC, setErrorCC] = useState<boolean>(false);
    const [errorWheelType, setErrorWheelType] = useState<boolean>(false);
    const [errorChasisNumber, setErrorChasisNumber] = useState<boolean>(false);
    const [errorHorsePower, setErrorHorsePower] = useState<boolean>(false);
    const [errorSeatingCapacity, setErrorSeatingCapacity] = useState<boolean>(false);
    const [errorWeightUnladen, setErrorWeightUnladen] = useState<boolean>(false);
    const [errorWeightLaden, setErrorWeightLaden] = useState<boolean>(false);
    const [errorTotalPiston, setErrorTotalPiston] = useState<boolean>(false);

    const handleToPayment = () => {
        setState("payment");
    }

    async function checkErrorForm() {
        let hasError = false;
        if (!registrationDate) {
            setErrorRegistrationDate(true);
            setCheckError(true);
            hasError = true;
        } else {
            setErrorRegistrationDate(false);
        }
        if (!registrationNumber) {
            setErrorRegistrationNumber(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorRegistrationNumber(false);
        }
        if (!province) {
            setErrorProvince(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorProvince(false);
        }
        if (!vehicleType) {
            setErrorVehicleType(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorVehicleType(false);
        }
        if (!vehicleCategory) {
            setErrorVehicleCategory(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorVehicleCategory(false);
        }
        if (!characteristics) {
            setErrorCharacteristics(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorCharacteristics(false);
        }
        if (!vehicleColor) {
            setErrorVehicleColor(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorVehicleColor(false);
        }
        if (!vehicleNumber) {
            setErrorVehicleNumber(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorVehicleNumber(false);
        }
        if (!vehicleNumberLocation) {
            setErrorVehicleNumberLocation(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorVehicleNumberLocation(false);
        }
        if (!engineNumber) {
            setErrorEngineNumber(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorEngineNumber(false);
        }
        if (!engineNumberLocation) {
            setErrorEngineNumberLocation(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorEngineNumberLocation(false);
        }
        if (!engineBrand) {
            setErrorEngineBrand(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorEngineBrand(false);
        }
        if (!fuelType) {
            setErrorFuelType(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorFuelType(false);
        }
        if (!cc) {
            setErrorCC(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorCC(false);
        }
        if (!wheelType) {
            setErrorWheelType(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorWheelType(false);
        }
        if (!chasisNumber) {
            setErrorChasisNumber(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorChasisNumber(false);
        }
        if (!horsePower) {
            setErrorHorsePower(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorHorsePower(false);
        }
        if (!seatingCapacity) {
            setErrorSeatingCapacity(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorSeatingCapacity(false);
        }
        if (!weightUnladen) {
            setErrorWeightUnladen(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorWeightUnladen(false);
        }
        if (!weightLaden) {
            setErrorWeightLaden(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorWeightLaden(false);
        }
        if (!totalPiston) {
            setErrorTotalPiston(true);
            setCheckError(true);
            hasError = true;
        }
        else {
            setErrorTotalPiston(false);
        }

        if (!hasError) {
            const checkUpload = await uploadFile();
            if (checkUpload) {
                hasError = true;
                setCheckError(true);
            }
            if (!hasError || filePreviewUrl) {
                hasError = false;
                setCheckError(false);
                handleToPayment();
            }
        }
    }

    function checkErrorFormOnChange() {
        if (!registrationDate) {
            setErrorRegistrationDate(false);
        }
        if (!registrationNumber) {
            setErrorRegistrationNumber(false);
        }
        if (!province) {
            setErrorProvince(false);
        }
        if (!vehicleType) {
            setErrorVehicleType(false);
        }
        if (!vehicleCategory) {
            setErrorVehicleCategory(false);
        }
        if (!characteristics) {
            setErrorCharacteristics(false);
        }
        if (!vehicleColor) {
            setErrorVehicleColor(false);
        }
        if (!vehicleNumber) {
            setErrorVehicleNumber(false);
        }
        if (!vehicleNumberLocation) {
            setErrorVehicleNumberLocation(false);
        }
        if (!engineNumber) {
            setErrorEngineNumber(false);
        }
        if (!engineNumberLocation) {
            setErrorEngineNumberLocation(false);
        }
        if (!engineBrand) {
            setErrorEngineBrand(false);
        }
        if (!fuelType) {
            setErrorFuelType(false);
        }
        if (!cc) {
            setErrorCC(false);
        }
        if (!wheelType) {
            setErrorWheelType(false);
        }
        if (!chasisNumber) {
            setErrorChasisNumber(false);
        }
        if (!horsePower) {
            setErrorHorsePower(false);
        }
        if (!seatingCapacity) {
            setErrorSeatingCapacity(false);
        }
        if (!weightUnladen) {
            setErrorWeightUnladen(false);
        }
        if (!weightLaden) {
            setErrorWeightLaden(false);
        }
        if (!totalPiston) {
            setErrorTotalPiston(false);
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

            setFilePreviewUrl(previewUrl);

            return false;
        }
        return true;
    }

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
                                <SelectBox nameMenu="เลือก" list={list ? list : []} isOpen={isOpen} setIsOpen={setIsOpen} value={value} setValue={setValue} 
                                    id={id} 
                                    setId={setId} 
                                    setType={setType}
                                    setBrand={setBrand}
                                    setModel={setModel}
                                    setYear={setYear}
                                    setMileage={setMileage}

                                    setRegistrationDate={setRegistrationDate} 
                                    registrationDate={registrationDate}
                                    registrationNumber={registrationNumber}
                                    setRegistrationNumber={setRegistrationNumber}
                                    province={province}
                                    setProvince={setProvince}
                                    vehicleType={vehicleType}
                                    setVehicleType={setVehicleType}
                                    vehicleCategory={vehicleCategory}
                                    setVehicleCategory={setVehicleCategory}
                                    characteristics={characteristics}
                                    setCharacteristics={setCharacteristics}
                                    vehicleColor={vehicleColor}
                                    setVehicleColor={setVehicleColor}
                                    vehicleNumber={vehicleNumber}
                                    setVehicleNumber={setVehicleNumber}
                                    vehicleNumberLocation={vehicleNumberLocation}
                                    setVehicleNumberLocation={setVehicleNumberLocation}
                                    engineNumber={engineNumber}
                                    setEngineNumber={setEngineNumber}
                                    engineNumberLocation={engineNumberLocation}
                                    setEngineNumberLocation={setEngineNumberLocation}
                                    engineBrand={engineBrand}
                                    setEngineBrand={setEngineBrand}
                                    fuelType={fuelType}
                                    setFuelType={setFuelType}
                                    cc={cc}
                                    setCC={setCC}
                                    wheelType={wheelType}
                                    setWheelType={setWheelType}
                                    chasisNumber={chasisNumber}
                                    setChasisNumber={setChasisNumber}
                                    horsePower={horsePower}
                                    setHorsePower={setHorsePower}
                                    seatingCapacity={seatingCapacity}
                                    setSeatingCapacity={setSeatingCapacity}
                                    weightUnladen={weightUnladen}
                                    setWeightUnladen={setWeightUnladen}
                                    weightLaden={weightLaden}
                                    setWeightLaden={setWeightLaden}
                                    totalPiston={totalPiston}
                                    setTotalPiston={setTotalPiston}

                                    setIdDuplicate={setIdDuplicate}
                                    setRegistrationDateDuplicate={setRegistrationDateDuplicate}
                                    setRegistrationNumberDuplicate={setRegistrationNumberDuplicate}
                                    setProvinceDuplicate={setProvinceDuplicate}
                                    setVehicleTypeDuplicate={setVehicleTypeDuplicate}
                                    setVehicleCategoryDuplicate={setVehicleCategoryDuplicate}
                                    setCharacteristicsDuplicate={setCharacteristicsDuplicate}
                                    setVehicleColorDuplicate={setVehicleColorDuplicate}
                                    setVehicleNumberDuplicate={setVehicleNumberDuplicate}
                                    setVehicleNumberLocationDuplicate={setVehicleNumberLocationDuplicate}
                                    setEngineNumberDuplicate={setEngineNumberDuplicate}
                                    setEngineNumberLocationDuplicate={setEngineNumberLocationDuplicate}
                                    setEngineBrandDuplicate={setEngineBrandDuplicate}
                                    setFuelTypeDuplicate={setFuelTypeDuplicate}
                                    setCCDuplicate={setCCDuplicate}
                                    setWheelTypeDuplicate={setWheelTypeDuplicate}
                                    setChasisNumberDuplicate={setChasisNumberDuplicate}
                                    setHorsePowerDuplicate={setHorsePowerDuplicate}
                                    setSeatingCapacityDuplicate={setSeatingCapacityDuplicate}
                                    setWeightUnladenDuplicate={setWeightUnladenDuplicate}
                                    setWeightLadenDuplicate={setWeightLadenDuplicate}
                                    setTotalPistonDuplicate={setTotalPistonDuplicate}
                                    setFilePreviewUrlDuplicate={setFilePreviewUrlDuplicate}

                                />
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 justify-center">
                        {/* row 1 */}
                        <div className="w-full flex flex-row items-center">
                            <ParagraphAnimation content={"เลขทะเบียน"} className="text-primaryText w-[16%]" />
                            <input
                                name={"registrationNumber"}
                                value={registrationNumber}
                                onChange={(e) => {setRegistrationNumber(e.target.value);checkErrorFormOnChange();}}
                                placeholder={"เลขทะเบียน"}
                                type="text"
                                className={`w-full h-14 text-primaryText rounded-xl p-3 border-2 ${errorRegistrationNumber ? "border-red-500" : "border-primaryText"} placeholder-secondaryText focus:outline-none focus:border-primary focus:ring-0 transition duration-200 ease-in-out hover:shadow-md`}
                            />
                        </div>

                        {/* row 2 */}
                        <Form
                            content1="จังหวัด"
                            content2="สีรถ"
                            value1={province}
                            value2={vehicleColor}
                            setValue1={setProvince}
                            setValue2={setVehicleColor}
                            errorField1={errorProvince}
                            errorField2={errorVehicleColor}
                            checkErrorFormOnChange={checkErrorFormOnChange}
                            type={"text"}
                        />

                        {/* row 3 */}
                        <Form
                            content1="รย."
                            content2="ลักษณะ"
                            value1={vehicleCategory}
                            value2={characteristics}
                            setValue1={setVehicleCategory}
                            setValue2={setCharacteristics}
                            errorField1={errorVehicleCategory}
                            errorField2={errorCharacteristics}
                            checkErrorFormOnChange={checkErrorFormOnChange}
                            type={"text"}
                        />

                        {/* row 4 */}
                        <div className="w-full flex flex-row items-center">
                            <ParagraphAnimation content={"ประเภท"} className="text-primaryText w-[16%]" />
                            <input
                                name={"vehicleType"}
                                value={vehicleType}
                                onChange={(e) => {setVehicleType(e.target.value);checkErrorFormOnChange();}}
                                placeholder={"ประเภท"}
                                type="text"
                                className={`w-full h-14 text-primaryText rounded-xl p-3 border-2 ${errorVehicleType ? "border-red-500" : "border-primaryText"} placeholder-secondaryText focus:outline-none focus:border-primary focus:ring-0 transition duration-200 ease-in-out hover:shadow-md`}
                            />
                        </div>

                        {/* row 5 */}
                        <Form
                            content1="เลขตัวรถ"
                            content2="ที่อยู่เลขตัวรถ"
                            value1={vehicleNumber}
                            value2={vehicleNumberLocation}
                            setValue1={setVehicleNumber}
                            setValue2={setVehicleNumberLocation}
                            errorField1={errorVehicleNumber}
                            errorField2={errorVehicleNumberLocation}
                            checkErrorFormOnChange={checkErrorFormOnChange}
                            type={"text"}
                        />

                        {/* row 6 */}
                        <Form
                            content1="ยี่ห้อเครื่องยนต์"
                            content2="เลขเครื่องยนต์"
                            value1={engineBrand}
                            value2={engineNumber}
                            setValue1={setEngineBrand}
                            setValue2={setEngineNumber}
                            errorField1={errorEngineBrand}
                            errorField2={errorEngineNumber}
                            checkErrorFormOnChange={checkErrorFormOnChange}
                            type={"text"}
                        />

                        {/* row 7 */}
                        <Form
                            content1="ที่อยู่เลขเครื่องยนต์"
                            content2="เชื้อเพลิง"
                            value1={engineNumberLocation}
                            value2={fuelType}
                            setValue1={setEngineNumberLocation}
                            setValue2={setFuelType}
                            errorField1={errorEngineNumberLocation}
                            errorField2={errorFuelType}
                            checkErrorFormOnChange={checkErrorFormOnChange}
                            type={"text"}
                        />

                        {/* row 8 */}
                        <Form
                            content1="เลขถังแก๊ส"
                            content2="ลักษณะล้อ"
                            value1={chasisNumber}
                            value2={wheelType}
                            setValue1={setChasisNumber}
                            setValue2={setWheelType}
                            errorField1={errorChasisNumber}
                            errorField2={errorWheelType}
                            checkErrorFormOnChange={checkErrorFormOnChange}
                            type={"text"}
                        />

                        {/* row 9 */}
                        <Form
                            content1="จำนวนสูบ"
                            content2="ซีซี"
                            value1={totalPiston}
                            value2={cc}
                            setValue1={setTotalPiston}
                            setValue2={setCC}
                            errorField1={errorTotalPiston}
                            errorField2={errorCC}
                            checkErrorFormOnChange={checkErrorFormOnChange}
                            type={"text"}
                            onInput={(e :any) => e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '')}
                        />

                        {/* row 10 */}
                        <Form
                            content1="แรงม้า"
                            content2="จำนวนที่นั่ง"
                            value1={horsePower}
                            value2={seatingCapacity}
                            setValue1={setHorsePower}
                            setValue2={setSeatingCapacity}
                            errorField1={errorHorsePower}
                            errorField2={errorSeatingCapacity}
                            checkErrorFormOnChange={checkErrorFormOnChange}
                            type={"text"}
                            onInput={(e :any) => e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '')}
                        />

                        {/* row 11 */}
                        <Form
                            content1="น้ำหนักรถ"
                            content2="น้ำหนักรถรวม"
                            value1={weightUnladen}
                            value2={weightLaden}
                            setValue1={setWeightUnladen}
                            setValue2={setWeightLaden}
                            errorField1={errorWeightUnladen}
                            errorField2={errorWeightLaden}
                            checkErrorFormOnChange={checkErrorFormOnChange}
                            type={"number"}
                        />
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
                                    { errorRegistrationDate ?
                                        <label className="text-red-500 w-full"> ค่าว่าง </label>
                                        : <></>
                                    }
                                </div>
                                <input value={registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} className={`text-primaryText w-full ${errorRegistrationDate ? "ring-red-500" : "ring-primaryText"} max-w-md bg-primaryBackground rounded-xl`} type="date"/>
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