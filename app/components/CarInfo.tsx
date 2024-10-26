import React from "react";

// Define interfaces for Car and Owner details
interface Car {
  registrationDate: string;
  licenseNumber: string;
  province: string;
  carType: string;
  brand: string;
  model: string;
  color: string;
  chassisNumber: string; // New field
  engineNumber: string;  // New field
  fuelType: string;      // New field
  cylinderCount: number; // New field
  engineCapacity: number; // New field
  horsepower: number;    // New field
  seatingCapacity: number; // New field
  weight: number;        // New field
  grossWeight: number;   // New field
  wheelCount: number;    // New field
}

interface Owner {
  name: string;
  idCard: string;
  birthDate: string;
  nationality: string;
  phone: string;
  address: string;
}

// Update CarOwnerInfoProps to accept raw data instead of a structured object
interface CarOwnerInfoProps {
  orderId: string;
  car: Car; // Use Car interface
  owner: Owner; // Use Owner interface
}

const CarOwnerInfo: React.FC<CarOwnerInfoProps> = ({
  orderId,
  car,
  owner,
}) => {
  return (
    <div className="border p-4 rounded-lg w-1/2">
      <h2 className="font-bold mb-2">ต่อพรบ. รหัสคำสั่ง {orderId}</h2>
      <h3 className="font-semibold mb-2">ข้อมูลรถ</h3>
      <div className="flex justify-between mb-2">
        <p>วันที่จดทะเบียน</p>
        <p>{car.registrationDate}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>ทะเบียนรถ</p>
        <p>{car.licenseNumber}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>จังหวัด</p>
        <p>{car.province}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>ประเภท</p>
        <p>{car.carType}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>แบรนด์</p>
        <p>{car.brand}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>รุ่น</p>
        <p>{car.model}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>สี</p>
        <p>{car.color}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>เลขตัวถัง</p>
        <p>{car.chassisNumber}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>เลขเครื่องยนต์</p>
        <p>{car.engineNumber}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>เชื้อเพลิง</p>
        <p>{car.fuelType}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>จำนวน(สูบ)</p>
        <p>{car.cylinderCount}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>ปริมาตร(ซีซ๊)</p>
        <p>{car.engineCapacity}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>แรงม้า</p>
        <p>{car.horsepower}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>ที่นั่ง(คน)</p>
        <p>{car.seatingCapacity}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>น้ำหนัก(กก.)</p>
        <p>{car.weight}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>น้ำหนักรวม(กก.)</p>
        <p>{car.grossWeight}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>จำนวนล้อ</p>
        <p>{car.wheelCount}</p>
      </div>
      
      <h3 className="font-semibold mt-4 mb-2">ข้อมูลผู้ครอบครอง</h3>
      <div className="flex justify-between mb-2">
        <p>ชื่อ</p>
        <p>{owner.name}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>เลขที่บัตร</p>
        <p>{owner.idCard}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>วันเกิด</p>
        <p>{owner.birthDate}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>สัญชาติ</p>
        <p>{owner.nationality}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>โทร</p>
        <p>{owner.phone}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>ที่อยู่ปัจจุบัน</p>
        <p>{owner.address}</p>
      </div>
    </div>
  );
};

export default CarOwnerInfo;