import { motion, Variants } from "framer-motion";
import { useEffect } from "react";

interface SelectBoxProps {
    nameMenu: string; // Name of the menu

    value: string; // Value ที่เลือก รถ ex. ทะเบียนรถ
    setValue: (value: string) => void; //set value ที่เลือก รถ ex. ทะเบียนรถ
    
    list: any[]; // List ของรถที่เลือก

    isOpen: boolean;
    setIsOpen: (value: boolean) => void;

    handleInputChange: any;
    newhandleToSetVehicleForm: any;
}

interface SelectItemProps{
    data: {
      "ID": string,
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
      "CompulsoryInsurancePolicyNumber": string,
      "VoluntaryInsurancePolicyNumber": string,
      "InsuranceType": string,
      "VehicleNumber": string,
      "VehicleNumberLocation": string,
      "EngineBrand": string,
      "EngineNumberLocation": string,
      "WheelType": string
  }; ///data ที่เอาไว้ show ใน dropdown
    handleSelect: (data: setVehicleFormProps['data']) => void;
}
interface setVehicleFormProps {
    data: {
      "ID": string,
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
      "CompulsoryInsurancePolicyNumber": string,
      "VoluntaryInsurancePolicyNumber": string,
      "InsuranceType": string,
      "VehicleNumber": string,
      "VehicleNumberLocation": string,
      "EngineBrand": string,
      "EngineNumberLocation": string,
      "WheelType": string
    };
  }



export default function SelectBox({nameMenu, value, setValue, isOpen, setIsOpen, list = [], handleInputChange, newhandleToSetVehicleForm} : SelectBoxProps) {

    const handleSelect = async (data: setVehicleFormProps['data']) => {
        setValue(data.RegistrationNumber);
        setIsOpen(!isOpen);

        
        // handleInputChange("id", data.ID);
        // handleInputChange("registrationDate", data.RegistrationDate);
        // setTimeout(() => {
        // await newhandleToSetVehicleForm("id", data.ID);
        // }, 100);
        // setTimeout(() => {
        // await newhandleToSetVehicleForm("registrationNumber", data.RegistrationNumber);
        // }, 100);
        await newhandleToSetVehicleForm(data);
        // await newhandleToSetVehicleForm("vehicleType", data.VehicleType);
        // await newhandleToSetVehicleForm("vehicleCategory", data.VehicleCategory);
        // handleInputChange("characteristics", data.Characteristics);
        // handleInputChange("vehiclecolor", data.VehicleColor);
        // handleInputChange("vehicleNumber", data.VehicleNumber);
        // handleInputChange("vehicleNumberLocation", data.VehicleNumberLocation);
        // handleInputChange("engineNumber", data.EngineNumber);
        // handleInputChange("engineNumberLocation", data.EngineNumberLocation);
        // handleInputChange("engineBrand", data.EngineBrand);
        // handleInputChange("fualType", data.FuelType);
        // handleInputChange("CC", 0.0); // If `CC` is intended to be `HorsePower`, replace with "hoursePower"
        // handleInputChange("wheelType", data.WheelType);
        // handleInputChange("chasisNumber", data.ChasisNumber);
        // handleInputChange("hoursePower", data.HorsePower);
        // handleInputChange("seatingCapacity", data.SeatingCapacity);
        // handleInputChange("weightUnladen", data.WeightUnlanden);
        // handleInputChange("weightLaden", data.WeightLaden);
        // handleInputChange("totalPiston", data.TireCount); // Check if `TireCount` corresponds to `totalPiston`
        // handleInputChange("compulsoryInsurancePolicyNumber", data.CompulsoryInsurancePolicyNumber);
        // handleInputChange("voluntaryInsurancePolicyNumber", data.VoluntaryInsurancePolicyNumber);
        // handleInputChange("insuranceType", data.InsuranceType);
        // handleInputChange("vehicleNumber", data.VehicleNumber);
        // handleInputChange("vehicleNumberLocation", data.VehicleNumberLocation);
        // handleInputChange("engineBrand", data.EngineBrand);
        // handleInputChange("engineNumberLocation", data.EngineNumberLocation);
        // handleInputChange("wheelType", data.WheelType);
    };

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
