import React from "react";
import OrderInfo from "@/app/components/OrderInfo";
import CarOwnerInfo from "@/app/components/CarInfo";
import { OrderData } from "@/app/components/OrderData";

const CombinedComponent = () => {
    // Hardcoded data
    const orderData: OrderData = {
      orderId: "12345678901234",
      type: "พรบ.",
      creationDate: "25 กันยายน 2567",
      status: "รอดำเนินการ",
      invoice: "invoice.jpg",
      paymentProof: "e-slip.jpg",
      car: {
        registrationDate: "25 ตุลาคม 2566",
        licenseNumber: "บก 1009",
        province: "กรุงเทพมหานคร",
        carType: "รถยนต์นั่งส่วนบุคคลไม่เกิน 7 คน",
        seatCapacity: 7,
        characteristic: "นั่งสองตอนท้ายรถบรรทุก",
        brand: "TOYOTA",
        model: "HILUX REVO ROCCO",
        year: "2023",
        color: "ดำ",
        chassisNumber: "MRO53HY9305237749",
        engineNumber: "2GD4716282",
        fuelType: "ดีเซล",
        cylinderCount: 4,
        displacementCC: 2393,
        horsepower: 150,
        seatCount: 5,
        carWeight: 1900,
        grossWeight: 1900,
        wheelCount: 4,
      },
      owner: {
        name: "นาย ตัวอย่าง จันหล่อเท่ห์",
        idCard: "12345678901234",
        birthDate: "25 ตุลาคม 2547",
        nationality: "ไทย",
        phone: "098-765-4321",
        address: "25/10 ซอย รักนิรันดร์ อ.เมืองลพบุรี ลพบุรี",
      },
    };
  
    return (
      <div className="flex space-x-16 justify-center p-16">
        {/* Left panel: Order Information */}
        <OrderInfo data={orderData} />
  
        {/* Right panel: Car and Owner Information */}
        <CarOwnerInfo data={orderData} />
      </div>
    );
  };
  
  export default CombinedComponent;