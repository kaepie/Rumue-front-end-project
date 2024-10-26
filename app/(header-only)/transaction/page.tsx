"use client"
import { useState } from "react";
import ShowPrice from "./showPrice";
import VehicleProgressBar from "./VehicleProgressBar";
import VehicleForm from "./vehicleform";
import Payment from "./payment";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function vehicleform() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const type = searchParams.get("type");
    const model = searchParams.get("model");
    const brand = searchParams.get("brand");
    const year = searchParams.get("year");
    const mileage = searchParams.get("mileage");


    const [state, setState] = useState("showPrice");
    
    const [vehicleform, setVehicleform] = useState({
        registrationDate: "",
        registrationNumber: "",
        province: "",
        vehicleType: "",
        vehicleCategory: "",
        characteristics: "",
        vehiclecolor: "",
        vehicleNumber: "",
        vehicleNumberLocation: "",
        engineNumber: "",
        engineNumberLocation: "",
        engineBrand: "",
        fualType: "",
        CC: "",
        wheelType: "",
        chasisNumber: "",
        hoursePower: "",
        seatingCapacity: "",
        weightUnladen: "",
        weightLaden: "",
        totalPiston: "",
        filePreviewUrl: "",
    });

    const [fileSlipUrl, setFileSlipUrl] = useState<string | null>(null); // State for file slip

    const [filePreview, setFilePreview] = useState<string | null>(null); // State for file preview
    const [fileSlipPreview, setFileSlipPreview] = useState<string | null>(null); // State for file preview

    interface setVehicleFormprops {
        tag: string,
        value: string
    }

    const handleToSetVehicleForm = ({tag, value}: setVehicleFormprops) => {
        setVehicleform({
            ...vehicleform,
            [tag]: value
        });
    }

    useEffect(() => {
        if (type == "" && model == "" && brand == "" && year == "" && mileage == "") {
            router.push("checkPrice");
        }
    }, [type, model, brand, year, mileage]);

    return(
        <div className="flex flex-col justify-center items-center h-auto w-screen">
            <VehicleProgressBar currentPath={state}/>

            {/* showPrice section */}
            { state === "showPrice" && (
                <ShowPrice setState={setState} type={type!} model={model!} brand={brand!} year={year!} mileage={mileage!}/>
            )}

            {/* vehicleform section */}
            { state === "vehicleform" && (
                <VehicleForm setState={setState} vehicleform={vehicleform} handleToSetVehicleForm={handleToSetVehicleForm} filePreview={filePreview} setFilePreview={setFilePreview}/>
            )}

            {/* payment section */}
            { state === "payment" && (
                <Payment setState={setState} type={type || ''} fileSlipPreview={fileSlipPreview} setFileSlipPreview={setFileSlipPreview} fileSlipUrl={fileSlipUrl} setFileSlipUrl={setFileSlipUrl}/>
            )}

        </div>
    );
}