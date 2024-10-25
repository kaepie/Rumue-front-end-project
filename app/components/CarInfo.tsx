import React from "react";
import { OrderData } from "./OrderData";

interface CarOwnerInfoProps {
  data: OrderData;
}

const CarOwnerInfo: React.FC<CarOwnerInfoProps> = ({ data }) => {
    return (
      <div className="border p-4 rounded-lg w-1/2">
        <h2 className="font-bold mb-2">ต่อพรบ. รหัสคำสั่ง {data.orderId}</h2>
        <h3 className="font-semibold mb-2">ข้อมูลรถ</h3>
        <div className="flex justify-between mb-2">
          <p>วันที่จดทะเบียน</p>
          <p>{data.car.registrationDate}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>ทะเบียนรถ</p>
          <p>{data.car.licenseNumber}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>จังหวัด</p>
          <p>{data.car.province}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>ประเภท</p>
          <p>{data.car.carType}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>ยี่ห้อ</p>
          <p>{data.car.brand}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>รุ่น</p>
          <p>{data.car.model}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>สี</p>
          <p>{data.car.color}</p>
        </div>
  
        <h3 className="font-semibold mt-4 mb-2">ข้อมูลผู้ครอบครอง</h3>
        <div className="flex justify-between mb-2">
          <p>ชื่อ</p>
          <p>{data.owner.name}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>เลขที่บัตร</p>
          <p>{data.owner.idCard}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>วันเกิด</p>
          <p>{data.owner.birthDate}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>สัญชาติ</p>
          <p>{data.owner.nationality}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>โทร</p>
          <p>{data.owner.phone}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>ที่อยู่ปัจจุบัน</p>
          <p>{data.owner.address}</p>
        </div>
      </div>
    );
  };
  
  export default CarOwnerInfo;