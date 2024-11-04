interface TransactionCardProps {
  transaction: {
    "CipNumber": string;
    "CrImageUrl": string;
    "ESlipImageUrl": string;
    "ID": string;
    "InsuranceType": string;
    "Price": number;
    "Status": string;
    "VipNumber": string;
    "CreatedAt": string;
    "UpdatedAt": string;
  },
  user: {
    "ID": string;
    "Email": string;
    "Fname": string;
    "Lname": string;
    "Password": string;
    "PhoneNumber": string;
    "Address": string;
    "Nationality": string;
    "CitizenID": string;
    "BirthDate": string;
  },
  vehicle: {
    "ID": string;
    "RegistrationDate": string;
    "RegistrationNumber": string;
    "Province": string;
    "VehicleType": string;
    "VehicleCategory": string;
    "Characteristics": string;
    "Brand": string;
    "Model": string;
    "ModelYear": string;
    "VehicleColor": string;
    "EngineNumber": string;
    "ChasisNumber": string;
    "FuelType": string;
    "HorsePower": number;
    "SeatingCapacity": number;
    "WeightUnlanden": number;
    "WeightLaden": number;
    "TireCount": number;
    "CompulsoryInsurancePolicyNumber": string;
    "VoluntaryInsurancePolicyNumber": string;
    "InsuranceType": string;
    "VehicleNumber": string;
    "VehicleNumberLocation": string;
    "EngineBrand": string;
    "EngineNumberLocation": string;
    "WheelType": string;
  } 
  handleSetTransaction: any;
}

export default function TransactionCard({ transaction, user, vehicle, handleSetTransaction}: TransactionCardProps) {

  const handleClick = () => {
    handleSetTransaction(transaction, user, vehicle);
  };

  return (
    <div onClick={() => {handleClick()}} className="container border-[1px] border-border rounded-xl p-4 max-w-3xl bg-primaryBackground hover:scale-110 cursor-pointer hover:bg-secondaryBackground">
      <div className="w-full h-full flex flex-col items-start lg:flex-row gap-4">

        <div className="w-full h-full flex flex-col text-primaryButton gap-2">
          <h2 className="text-lg font-bold text-primaryButtonHover ">{`${transaction["InsuranceType"] === "class1" ? "ประกันชั้น 1" : transaction["InsuranceType"] === "class2" ? "ประกันชั้น 2" : transaction["InsuranceType"] === "class3" ? "ประกันชั้น 3" : "พรบ."}`}</h2>
          <div className="flex flex-col">
            <p className="text-sm text-primaryButton">รหัสคำสั่ง <span className="font-semibold text-primaryButtonHover">{`${transaction["ID"]}`}</span></p>
            <p className="text-sm font-semibold text-primaryButtonHover">{`${vehicle.Brand}, ${vehicle.Model}`}</p>
            <p className="text-sm font-semibold text-primaryButtonHover">{`${vehicle.ModelYear}`}</p>
            <p className="text-sm">เลขตัวถัง <span className="font-semibold text-primaryButtonHover">{`${vehicle.ChasisNumber}`}</span></p>
            <div className="flex flex-col justify-between gap-1 2xl:flex-row"><p className="text-sm text-nowrap">วันที่กรอกคำสั่งซื้อ</p> <p className="text-sm text-primaryButtonHover font-semibold">{`${transaction.CreatedAt}`}</p></div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center">
          <p className="text-sm font-medium text-secondaryText">สถานะ</p>
          <p className="text-lg font-bold text-primaryText">{`${transaction.Status}`}</p>
        </div>
      </div>
    </div>
  );
}