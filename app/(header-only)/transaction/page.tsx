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

interface VehicleData {
    id: string;
    registrationDate: string;
    registrationNumber: string;
    province: string;
    vehicleType: string;
    vehicleCategory: string;
    characteristics: string;
    brand: string;
    model: string;
    modelYear: string;
    miles: number;
    vehicleColor: string;
    engineNumber: string;
    chasisNumber: string;
    fuelType: string;
    horsePower: number;
    seatingCapacity: number;
    weightUnladen: number; // Note: Corrected spelling from 'WeightUnlanden'
    weightLaden: number;
    tireCount: number;
    cc: number;
    compulsoryInsurancePolicyNumber: string;
    voluntaryInsurancePolicyNumber: string;
    insuranceType: string;
    vehicleNumber: string;
    vehicleNumberLocation: string;
    engineBrand: string;
    engineNumberLocation: string;
    wheelType: string;
    totalPiston: number;
    filePreviewUrl: string;
}

export default function vehicleform() {
    const {data: session, status} = useSession();   
    const router = useRouter();
    const searchParams = useSearchParams();
    const [type , setType] = useState(searchParams.get("type"));
    const [model , setModel] = useState(searchParams.get("model"));
    const [brand , setBrand] = useState(searchParams.get("brand"));
    const [year , setYear] = useState(searchParams.get("year"));
    const [mileage , setMileage] = useState(searchParams.get("mileage"));

    const [state, setState] = useState("showPrice");
    const [id, setId] = useState<string>(""); // string
    const [registrationDate, setRegistrationDate] = useState<string>(""); // string
    const [registrationNumber, setRegistrationNumber] = useState<string>(""); // string
    const [province, setProvince] = useState<string>(""); // string
    const [vehicleType, setVehicleType] = useState<string>(""); // string
    const [vehicleCategory, setVehicleCategory] = useState<string>(""); // string
    const [characteristics, setCharacteristics] = useState<string>(""); // string
    const [vehicleColor, setVehicleColor] = useState<string>(""); // string
    const [vehicleNumber, setVehicleNumber] = useState<string>(""); // string
    const [vehicleNumberLocation, setVehicleNumberLocation] = useState<string>(""); // string
    const [engineNumber, setEngineNumber] = useState<string>(""); // string
    const [engineNumberLocation, setEngineNumberLocation] = useState<string>(""); // string
    const [engineBrand, setEngineBrand] = useState<string>(""); // string
    const [fuelType, setFuelType] = useState<string>(""); // string
    const [cc, setCC] = useState<number>(0); // number
    const [wheelType, setWheelType] = useState<string>(""); // string
    const [chasisNumber, setChasisNumber] = useState<string>(""); // string
    const [horsePower, setHorsePower] = useState<number>(0); // number
    const [seatingCapacity, setSeatingCapacity] = useState<number>(0); // number
    const [weightUnladen, setWeightUnladen] = useState<number>(0); // number
    const [weightLaden, setWeightLaden] = useState<number>(0); // number
    const [totalPiston, setTotalPiston] = useState<number>(0); // number
    const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null); // string | null

    const [idDuplicate, setIdDuplicate] = useState<string>(""); // string
    const [registrationDateDuplicate, setRegistrationDateDuplicate] = useState<string>(""); // string
    const [registrationNumberDuplicate, setRegistrationNumberDuplicate] = useState<string>(""); // string
    const [provinceDuplicate, setProvinceDuplicate] = useState<string>(""); // string
    const [vehicleTypeDuplicate, setVehicleTypeDuplicate] = useState<string>(""); // string
    const [vehicleCategoryDuplicate, setVehicleCategoryDuplicate] = useState<string>(""); // string
    const [characteristicsDuplicate, setCharacteristicsDuplicate] = useState<string>(""); // string
    const [vehicleColorDuplicate, setVehicleColorDuplicate] = useState<string>(""); // string
    const [vehicleNumberDuplicate, setVehicleNumberDuplicate] = useState<string>(""); // string
    const [vehicleNumberLocationDuplicate, setVehicleNumberLocationDuplicate] = useState<string>(""); // string
    const [engineNumberDuplicate, setEngineNumberDuplicate] = useState<string>(""); // string
    const [engineNumberLocationDuplicate, setEngineNumberLocationDuplicate] = useState<string>(""); // string
    const [engineBrandDuplicate, setEngineBrandDuplicate] = useState<string>(""); // string
    const [fuelTypeDuplicate, setFuelTypeDuplicate] = useState<string>(""); // string
    const [ccDuplicate, setCCDuplicate] = useState<number>(0); // number
    const [wheelTypeDuplicate, setWheelTypeDuplicate] = useState<string>(""); // string
    const [chasisNumberDuplicate, setChasisNumberDuplicate] = useState<string>(""); // string
    const [horsePowerDuplicate, setHorsePowerDuplicate] = useState<number>(0); // number
    const [seatingCapacityDuplicate, setSeatingCapacityDuplicate] = useState<number>(0); // number
    const [weightUnladenDuplicate, setWeightUnladenDuplicate] = useState<number>(0); // number
    const [weightLadenDuplicate, setWeightLadenDuplicate] = useState<number>(0); // number
    const [totalPistonDuplicate, setTotalPistonDuplicate] = useState<number>(0); // number
    const [filePreviewUrlDuplicate, setFilePreviewUrlDuplicate] = useState<string | null>(null); // string | null

    useEffect(() => {
        console.log("idDuplicate:", idDuplicate);
        console.log("registrationDateDuplicate:", registrationDateDuplicate);
        console.log("registrationNumberDuplicate:", registrationNumberDuplicate);
        console.log("provinceDuplicate:", provinceDuplicate);
        console.log("vehicleTypeDuplicate:", vehicleTypeDuplicate);
    }, [idDuplicate, registrationDateDuplicate, registrationNumberDuplicate, provinceDuplicate, vehicleTypeDuplicate, vehicleCategoryDuplicate, characteristicsDuplicate, vehicleColorDuplicate, vehicleNumberDuplicate, vehicleNumberLocationDuplicate, engineNumberDuplicate, engineNumberLocationDuplicate, engineBrandDuplicate, fuelTypeDuplicate, ccDuplicate, wheelTypeDuplicate, chasisNumberDuplicate, horsePowerDuplicate, seatingCapacityDuplicate, weightUnladenDuplicate, weightLadenDuplicate, totalPistonDuplicate, filePreviewUrlDuplicate]);

    const [fileSlipUrl, setFileSlipUrl] = useState<string | null>(null); // State for file slip

    const [filePreview, setFilePreview] = useState<string | null>(null); // State for file preview
    const [fileSlipPreview, setFileSlipPreview] = useState<string | null>(null); // State for file preview

    const createVehicle = async () => {
        try {
        const RegistrationDate = new Date(registrationDate).toISOString();
        console.log("Registration Date:", RegistrationDate);
        const token = session?.user.token;
        const json = {
            RegistrationDate: RegistrationDate,
            RegistrationNumber: registrationNumber,
            Province: province,
            VehicleType: vehicleType,
            VehicleCategory: vehicleCategory,
            Characteristics: characteristics,
            Brand: brand,
            Model: model,
            ModelYear: year,
            Miles: parseFloat(mileage === "" ? "0" : mileage!.toString()),
            VehicleColor: vehicleColor,
            VehicleNumber: vehicleNumber,
            VehicleNumberLocation: vehicleNumberLocation,
            EngineBrand: engineBrand,
            EngineNumber: engineNumber,
            EngineNumberLocation: engineNumberLocation,
            ChasisNumber: chasisNumber,
            FuelType: fuelType,
            WheelType: wheelType,
            TotalPiston: parseInt(totalPiston.toString()),
            Cc: parseInt(cc.toString()),
            HorsePower: parseInt(horsePower.toString()),
            SeatingCapacity: parseInt(seatingCapacity+""),
            WeightUnlanden: parseFloat(weightUnladen+""),
            WeightLaden: parseFloat(weightLaden+""),
        }
        console.log("vehicle data: ", json);
        const res = await fetch(`http://localhost:3001/vehicle`, {
            method: 'POST',
            headers: {
            'Authorization': `Bearer ${token}`, // ใช้ token จาก session
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(json)
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await res.json();
        console.log("Vehicle Data:", data);
        const vehicleID = await data.payload.vehicleID;
        console.log("Vehicle ID:", vehicleID);
        return vehicleID;
        } catch (error) {
        console.error("Error loading Vehicle Data:", error);
        }
    };

    
    const createTransaction = async (vehicleID : string) => {
        try {
        const token = session?.user.token;
        const json = {
            Price: 0.0,
            InsuranceType: type,
            Status: "pending",
            ESlipImageUrl: fileSlipUrl,
            CrImageUrl: filePreviewUrl,   
            CipNumber: "",
            VipNumber: ""
        }
        console.log(json);
        const res = await fetch(`http://localhost:3001/transaction/create/${vehicleID}`, {
            method: 'POST',
            headers: {
            'Authorization': `Bearer ${token}`, // ใช้ token จาก session
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(json)
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        } catch (error) {
        console.error("Error loading Vehicle Data:", error);
        }
    };

    const checkDuplicate = () => {
        if (id === idDuplicate && registrationDate === registrationDateDuplicate && registrationNumber === registrationNumberDuplicate && province === provinceDuplicate && vehicleType === vehicleTypeDuplicate && vehicleCategory === vehicleCategoryDuplicate && characteristics === characteristicsDuplicate && vehicleColor === vehicleColorDuplicate && vehicleNumber === vehicleNumberDuplicate && vehicleNumberLocation === vehicleNumberLocationDuplicate && engineNumber === engineNumberDuplicate && engineNumberLocation === engineNumberLocationDuplicate && engineBrand === engineBrandDuplicate && fuelType === fuelTypeDuplicate && cc === ccDuplicate && wheelType === wheelTypeDuplicate && chasisNumber === chasisNumberDuplicate && horsePower === horsePowerDuplicate && seatingCapacity === seatingCapacityDuplicate && weightUnladen === weightUnladenDuplicate && weightLaden === weightLadenDuplicate && totalPiston === totalPistonDuplicate && filePreviewUrl === filePreviewUrlDuplicate) {
            return true;
        }
        return false;
    };



    const clickSubmit = async () => {
        // console.log("weightUnladen: ",weightUnladen);
        if (checkDuplicate()) {
            createTransaction(id);
        }
        else {
            const vehicleID = await createVehicle();
            if ( vehicleID ) {
                createTransaction(vehicleID);
            }
        }
        router.push("/home");
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
                <VehicleForm 
                    setState={setState} 
                    id={id} 
                    setId={setId} 
                    filePreview={filePreview} 
                    setFilePreview={setFilePreview} 
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
                    filePreviewUrl={filePreviewUrl}
                    setFilePreviewUrl={setFilePreviewUrl}

                    setType={setType}
                    setModel={setModel}
                    setBrand={setBrand}
                    setYear={setYear}
                    setMileage={setMileage}

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
            )}

            {/* payment section */}
            { state === "payment" && (
                <Payment setState={setState} type={type || ''} fileSlipPreview={fileSlipPreview} setFileSlipPreview={setFileSlipPreview} fileSlipUrl={fileSlipUrl} setFileSlipUrl={setFileSlipUrl} clickSubmit={clickSubmit}/>
            )}

        </div>
    );
}