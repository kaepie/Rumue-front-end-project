import { Transaction, TransactionData, TransactionWithUndefined } from "../(header-only)/interface/interface";

function CarDetailCard({transaction}:TransactionWithUndefined){

    const chooseInsuranceWord = (category:string | undefined)=>{
        if(category == "0") return "พรบ."
        else if(category == "1" || category == "2" || category == "3") return `ประกันภัยรถยนต์ชั้น ${category}`
        else return category
    }

    return (
        <div className="px-6 py-10 space-y-16 flex-1 border border-primaryText rounded-xl container">
                <div className="text-[32px] font-bold flex items-center justify-center"><p>{chooseInsuranceWord(transaction?.Transaction.InsuranceType)}</p></div>
                <div className="space-y-4">
                    <p className="text-[28px]">ข้อมูลรถยนต์</p>
                    <div className="px-6">
                        <div className="flex justify-between items-center text-[24px]">
                            <p>วันที่จดทะเบียน</p>
                            <p>{transaction?.Vehicle.RegistrationDate}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>ทะเบียนรถ</p>
                            <p>{transaction?.Vehicle.RegistrationNumber}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>จังหวัด</p>
                            <p>{transaction?.Vehicle.Province}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>ประเภทรถ</p>
                            <p>{transaction?.Vehicle.Model}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>รย.</p>
                            <p>{transaction?.Vehicle.VehicleCategory}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>ลักษณะ</p>
                            <p>{transaction?.Vehicle.Characteristics}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>ยี่ห้อ</p>
                            <p>{transaction?.Vehicle.Brand}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>แบบ</p>
                            <p>{transaction?.Vehicle.Model}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>รุ่นปี ค.ศ.</p>
                            <p>{transaction?.Vehicle.ModelYear}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>สี</p>
                            <p>{transaction?.Vehicle.VehicleColor}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>เลขตัวถัง</p>
                            <p>{transaction?.Vehicle.ChasisNumber}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>เลขเครื่องยนต์</p>
                            <p>{transaction?.Vehicle.EngineNumber}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>เชื่อเพลิง</p>
                            <p>{transaction?.Vehicle.FuelType}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>จำนวน(สูบ)</p>
                            <p>{transaction?.Vehicle.TotalPiston}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>ปริมาตร(ซีซี)</p>
                            <p>{transaction?.Vehicle.Cc}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>แรงม้า</p>
                            <p>{transaction?.Vehicle.HorsePower}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>ที่นั่ง(คน)</p>
                            <p>{transaction?.Vehicle.SeatingCapacity}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>น้ำหนักรถ(กก.)</p>
                            <p>{transaction?.Vehicle.WeightUnlanden}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>น้ำหนักรวม(กก.)</p>
                            <p>{transaction?.Vehicle.WeightLaden}</p>
                        </div>
                        <div className="flex justify-between items-center text-[24px]">
                            <p>จำนวนล้อ</p>
                            <p>{transaction?.Vehicle.WheelType}</p>
                        </div>
                    </div> 
                </div>
        </div>
    );
}

export default CarDetailCard