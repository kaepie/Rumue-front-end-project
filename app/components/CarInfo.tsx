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
  registrationDate: string;
  licenseNumber: string;
  province: string;
  carType: string;
  brand: string;
  model: string;
  color: string;
  ownerName: string;
  ownerIdCard: string;
  ownerBirthDate: string;
  ownerNationality: string;
  ownerPhone: string;
  ownerAddress: string;
}

const CarOwnerInfo: React.FC<CarOwnerInfoProps> = ({
  orderId,
  registrationDate,
  licenseNumber,
  province,
  carType,
  brand,
  model,
  color,
  ownerName,
  ownerIdCard,
  ownerBirthDate,
  ownerNationality,
  ownerPhone,
  ownerAddress,
}) => {
  return (
    <div className="border p-4 rounded-lg w-1/2">
      <h2 className="font-bold mb-2">ต่อพรบ. รหัสคำสั่ง {orderId}</h2>
      <h3 className="font-semibold mb-2">ข้อมูลรถ</h3>
      <div className="flex justify-between mb-2">
        <p>วันที่จดทะเบียน</p>
        <p>{registrationDate}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>ทะเบียนรถ</p>
        <p>{licenseNumber}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>จังหวัด</p>
        <p>{province}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>ประเภท</p>
        <p>{carType}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>ยี่ห้อ</p>
        <p>{brand}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>รุ่น</p>
        <p>{model}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>สี</p>
        <p>{color}</p>
      </div>

      <h3 className="font-semibold mt-4 mb-2">ข้อมูลผู้ครอบครอง</h3>
      <div className="flex justify-between mb-2">
        <p>ชื่อ</p>
        <p>{ownerName}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>เลขที่บัตร</p>
        <p>{ownerIdCard}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>วันเกิด</p>
        <p>{ownerBirthDate}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>สัญชาติ</p>
        <p>{ownerNationality}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>โทร</p>
        <p>{ownerPhone}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>ที่อยู่ปัจจุบัน</p>
        <p>{ownerAddress}</p>
      </div>
    </div>
  );
};

export default CarOwnerInfo;