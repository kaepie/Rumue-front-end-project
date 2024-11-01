import { motion, Variants } from "framer-motion";
import { useEffect } from "react";


interface SelectItemProps{
  data: {
    "Id": string,
    "RegistrationDate": string,
    "RegistrationNumber": string,
    "Province": string,
    "VehicleType": string,
    "VehicleCategory": string,
    "Characteristics": string,
    "Brand": string,
    "Model": string,
    "ModelYear": string,
    "VehicleColor": string,
    "EngineNumber": string,
    "ChasisNumber": string,
    "FuelType": string,
    "HorsePower": number,
    "SeatingCapacity": number,
    "WeightUnlanden": number,
    "WeightLaden": number,
    "TireCount": number,
    "Cc" : number,
    "CompulsoryInsurancePolicyNumber": string,
    "VoluntaryInsurancePolicyNumber": string,
    "InsuranceType": string,
    "VehicleNumber": string,
    "VehicleNumberLocation": string,
    "EngineBrand": string,
    "EngineNumberLocation": string,
    "WheelType": string,
    "TotalPiston": number,
    "Miles": number
  };
  handleSelect: (data: setVehicleFormProps['data']) => void;
}
interface setVehicleFormProps {
  data: {
    "Id": string,
    "RegistrationDate": string,
    "RegistrationNumber": string,
    "Province": string,
    "VehicleType": string,
    "VehicleCategory": string,
    "Characteristics": string,
    "Brand": string,
    "Model": string,
    "ModelYear": string,
    "VehicleColor": string,
    "EngineNumber": string,
    "ChasisNumber": string,
    "FuelType": string,
    "HorsePower": number,
    "SeatingCapacity": number,
    "WeightUnlanden": number,
    "WeightLanden": number,
    "TireCount": number,
    "Cc" : number,
    "CompulsoryInsurancePolicyNumber": string,
    "VoluntaryInsurancePolicyNumber": string,
    "InsuranceType": string,
    "VehicleNumber": string,
    "VehicleNumberLocation": string,
    "EngineBrand": string,
    "EngineNumberLocation": string,
    "WheelType": string,
    "TotalPiston": number,
    "Miles": number
}; ///data ที่เอาไว้ show ใน dropdown

}
interface SelectBoxProps {
    nameMenu: string; // Name of the menu

    value: string; // Value ที่เลือก รถ ex. ทะเบียนรถ
    setValue: (value: string) => void; //set value ที่เลือก รถ ex. ทะเบียนรถ
    
    list: any[]; // List ของรถที่เลือก

    isOpen: boolean;
    setIsOpen: (value: boolean) => void;

    id: string;
    setId: (value: string) => void;
    registrationDate: string;
    setRegistrationDate: (value: string) => void;
    registrationNumber: string;
    setRegistrationNumber: (value: string) => void;
    province: string;
    setProvince: (value: string) => void;
    vehicleType: string;
    setVehicleType: (value: string) => void;
    vehicleCategory: string;
    setVehicleCategory: (value: string) => void;
    characteristics: string;
    setCharacteristics: (value: string) => void;
    vehicleColor: string;
    setVehicleColor: (value: string) => void;
    vehicleNumber: string;
    setVehicleNumber: (value: string) => void;
    vehicleNumberLocation: string;
    setVehicleNumberLocation: (value: string) => void;
    engineNumber: string;
    setEngineNumber: (value: string) => void;
    engineNumberLocation: string;
    setEngineNumberLocation: (value: string) => void;
    engineBrand: string;
    setEngineBrand: (value: string) => void;
    fuelType: string;
    setFuelType: (value: string) => void;
    cc: number;
    setCC: (value: number) => void;
    wheelType: string;
    setWheelType: (value: string) => void;
    chasisNumber: string;
    setChasisNumber: (value: string) => void;
    horsePower: number;
    setHorsePower: (value: number) => void;
    seatingCapacity: number;
    setSeatingCapacity: (value: number) => void;
    weightUnladen: number;
    setWeightUnladen: (value: number) => void;
    weightLaden: number;
    setWeightLaden: (value: number) => void;
    totalPiston: number;
    setTotalPiston: (value: number) => void;

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



export default function SelectBox({
  setBrand,
  setModel,
  setYear,
  setMileage,
  setType,
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

  setId,
  setRegistrationDate,
  setRegistrationNumber,
  setProvince,
  setVehicleType,
  setVehicleCategory,
  setCharacteristics,
  setVehicleColor,
  setVehicleNumber,
  setVehicleNumberLocation,
  setEngineNumber,
  setEngineNumberLocation,
  setEngineBrand,
  setFuelType,
  setCC,
  setWheelType,
  setChasisNumber,
  setHorsePower,
  setSeatingCapacity,
  setWeightUnladen,
  setWeightLaden,
  setTotalPiston,
  nameMenu,
  value,
  setValue,
  isOpen,
  setIsOpen, 
  list = []} : SelectBoxProps) {
    
    const handleSelect = async ({...setVehicleFormProps}) => {
      setValue(setVehicleFormProps.RegistrationNumber);
      setIsOpen(!isOpen);
      
      const date = setVehicleFormProps.RegistrationDate
      const dateSplit = date.split("T")[0];
      setId(setVehicleFormProps.Id);
      setRegistrationDate(dateSplit);
      setRegistrationNumber(setVehicleFormProps.RegistrationNumber);
      setProvince(setVehicleFormProps.Province);
      setVehicleType(setVehicleFormProps.VehicleType);
      setVehicleCategory(setVehicleFormProps.VehicleCategory);
      setCharacteristics(setVehicleFormProps.Characteristics);
      setVehicleColor(setVehicleFormProps.VehicleColor);
      setVehicleNumber(setVehicleFormProps.VehicleNumber);
      setVehicleNumberLocation(setVehicleFormProps.VehicleNumberLocation);
      setEngineNumber(setVehicleFormProps.EngineNumber);
      setEngineNumberLocation(setVehicleFormProps.EngineNumberLocation);
      setEngineBrand(setVehicleFormProps.EngineBrand);
      setFuelType(setVehicleFormProps.FuelType);
      setCC(setVehicleFormProps.Cc);
      setWheelType(setVehicleFormProps.WheelType);
      setChasisNumber(setVehicleFormProps.ChasisNumber);
      setHorsePower(setVehicleFormProps.HorsePower);
      setSeatingCapacity(setVehicleFormProps.SeatingCapacity);
      setWeightUnladen(setVehicleFormProps.WeightUnlanden);
      setWeightLaden(setVehicleFormProps.WeightLaden);
      setTotalPiston(setVehicleFormProps.TotalPiston);

      setIdDuplicate(setVehicleFormProps.Id);
      setRegistrationNumberDuplicate(setVehicleFormProps.RegistrationNumber);
      setProvinceDuplicate(setVehicleFormProps.Province);
      setVehicleTypeDuplicate(setVehicleFormProps.VehicleType);
      setVehicleCategoryDuplicate(setVehicleFormProps.VehicleCategory);
      setCharacteristicsDuplicate(setVehicleFormProps.Characteristics);
      setVehicleColorDuplicate(setVehicleFormProps.VehicleColor);
      setVehicleNumberDuplicate(setVehicleFormProps.VehicleNumber);
      setVehicleNumberLocationDuplicate(setVehicleFormProps.VehicleNumberLocation);
      setEngineNumberDuplicate(setVehicleFormProps.EngineNumber);
      setEngineNumberLocationDuplicate(setVehicleFormProps.EngineNumberLocation);
      setEngineBrandDuplicate(setVehicleFormProps.EngineBrand);
      setFuelTypeDuplicate(setVehicleFormProps.FuelType);
      setCCDuplicate(setVehicleFormProps.Cc);
      setWheelTypeDuplicate(setVehicleFormProps.WheelType);
      setChasisNumberDuplicate(setVehicleFormProps.ChasisNumber);
      setHorsePowerDuplicate(setVehicleFormProps.HorsePower);
      setSeatingCapacityDuplicate(setVehicleFormProps.SeatingCapacity);
      setWeightUnladenDuplicate(setVehicleFormProps.WeightLanden);
      setWeightLadenDuplicate(setVehicleFormProps.WeightLaden);
      setTotalPistonDuplicate(setVehicleFormProps.TotalPiston);
      setFilePreviewUrlDuplicate(setVehicleFormProps.ESlipImageUrl);
      setModel(setVehicleFormProps.Model);
      setYear(setVehicleFormProps.ModelYear);
      setMileage(setVehicleFormProps.Miles);
      setBrand(setVehicleFormProps.Brand);

      setRegistrationDateDuplicate(dateSplit);
      };
    console.log("list into selectBox:",list);

    return (
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="relative w-[160px] flex flex-col gap-2"
        > 
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
            className=" w-full flex flex-row bg-primaryText text-primaryBackground rounded-xl justify-between items-center px-4 py-2 drop-shadow-md"
          >
            {value === "" ? nameMenu : value}
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" fill="white"/>
              </svg>
            </motion.div>
          </motion.button>

          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05
                }
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3
                }
              }
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
            className="z-10 absolute top-14 border-2 h-60 border-border rounded-xl overflow-y-auto bg-primaryBackground w-full"
          >
            {
              list.length > 0 && (
                list.map((item, index) => (    
                    <SelectItem key={index} data={item} handleSelect={handleSelect} />
                ))
              )
            }
          </motion.ul>
        </motion.nav>
    );
}
function SelectItem({data, handleSelect} : SelectItemProps) {
    const itemVariants: Variants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };

    return (
        <motion.button 
            onClick={() => {
                    handleSelect(data);
            }} 
            variants={itemVariants} 
            className="px-4 py-2 text-primaryText w-full text-left hover:bg-secondaryBackground"
        >
            {data.RegistrationNumber}
        </motion.button>
    );
}
