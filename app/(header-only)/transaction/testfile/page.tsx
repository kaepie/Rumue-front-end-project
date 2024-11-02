"use client"
import { useState } from "react";
import ShowPrice from "./showPrice";
import VehicleProgressBar from "./VehicleProgressBar";
import VehicleForm from "./vehicleform";
import Payment from "./payment";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { parseAbsoluteToLocal } from "@internationalized/date";

export default function vehicleform() {
    const {data: session, status} = useSession();   
    const router = useRouter();
    const searchParams = useSearchParams();

    const type = searchParams.get("type");
    const model = searchParams.get("model");
    const brand = searchParams.get("brand");
    const year = searchParams.get("year");
    const mileage = searchParams.get("mileage");


    const [state, setState] = useState("showPrice");
    const [registrationDate, setRegistrationDate] = useState("");
    const [vehicleform, setVehicleform] = useState({
        id:"",
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

    type VehicleFormKeys = keyof typeof vehicleform;

    interface setVehicleFormprops {
        tag: VehicleFormKeys,
        value: string | number
    }

    const handleToSetVehicleForm = ({tag, value}: setVehicleFormprops) => {
        console.log("tag:", tag);
        console.log("value:", value);
        setVehicleform({
            ...vehicleform,
            [tag]: value
        });
        console.log("vehicleform",tag , vehicleform[tag]);
    }


    const newhandleToSetVehicleForm = async (value: typeof vehicleform) => {
        setVehicleform(value);
    }

    const createVehicle = async () => {
        try {
        const token = session?.user.token;
        const res = await fetch(`http://localhost:3001/vehicle/`, {
            method: 'post',
            headers: {
            'Authorization': `Bearer ${token}`, // ใช้ token จาก session
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(vehicleform)
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        } catch (error) {
        console.error("Error loading Vehicle Data:", error);
        }
    };

    const clickSubmit = () => {
        createVehicle();
    };

    useEffect(() => {
        if (type == "" && model == "" && brand == "" && year == "" && mileage == "") {
            router.push("checkPrice");
        }
    }, [type, model, brand, year, mileage]);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    },[status]);

    return(
        <div className="flex flex-col justify-center items-center h-auto w-screen">
            <VehicleProgressBar currentPath={state}/>

            {/* showPrice section */}
            { state === "showPrice" && (
                <ShowPrice setState={setState} type={type!} model={model!} brand={brand!} year={year!} mileage={mileage!}/>
            )}

            {/* vehicleform section */}
            { state === "vehicleform" && (
                <VehicleForm setState={setState} vehicleform={vehicleform} handleToSetVehicleForm={handleToSetVehicleForm} filePreview={filePreview} setFilePreview={setFilePreview} setRegistrationDate={setRegistrationDate} registrationDate={registrationDate} newhandleToSetVehicleForm={newhandleToSetVehicleForm}/>
            )}

            {/* payment section */}
            { state === "payment" && (
                <Payment setState={setState} type={type || ''} fileSlipPreview={fileSlipPreview} setFileSlipPreview={setFileSlipPreview} fileSlipUrl={fileSlipUrl} setFileSlipUrl={setFileSlipUrl}/>
            )}

        </div>
    );
}