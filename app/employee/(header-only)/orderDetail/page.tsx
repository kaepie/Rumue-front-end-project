import CarOwnerInfo from "@/app/components/CarInfo";
import OrderInfo from "@/app/components/OrderInfo";
import React from "react";

const orderData = {
  orderId: "123456",
  type: "Renewal",
  creationDate: "2023-10-01",
  status: "Pending",
  invoice: "invoice_123456.pdf",
  paymentProof: "payment_proof_123456.jpg",
  car: {
    registrationDate: "2022-01-01",
    licenseNumber: "XYZ-1234",
    province: "Bangkok",
    carType: "Sedan",
    brand: "Toyota",
    model: "Camry",
    color: "Black",
  },
  owner: {
    name: "John Doe",
    idCard: "1234567890123",
    birthDate: "1990-01-01",
    nationality: "Thai",
    phone: "012-345-6789",
    address: "123 Main St, Bangkok",
  },
};

const CombinedComponent = () => {
  return (
    <div className="flex space-x-16 justify-center p-16">
      {/* Left panel: Order Information */}
      <OrderInfo
        orderId={orderData.orderId}
        type={orderData.type}
        creationDate={orderData.creationDate}
        status={orderData.status}
        invoice={orderData.invoice}
        paymentProof={orderData.paymentProof}
      />

      {/* Right panel: Car and Owner Information */}
      <CarOwnerInfo
        orderId={orderData.orderId}
        registrationDate={orderData.car.registrationDate}
        licenseNumber={orderData.car.licenseNumber}
        province={orderData.car.province}
        carType={orderData.car.carType}
        brand={orderData.car.brand}
        model={orderData.car.model}
        color={orderData.car.color}
        ownerName={orderData.owner.name}
        ownerIdCard={orderData.owner.idCard}
        ownerBirthDate={orderData.owner.birthDate}
        ownerNationality={orderData.owner.nationality}
        ownerPhone={orderData.owner.phone}
        ownerAddress={orderData.owner.address}
      />
    </div>
  );
};

export default CombinedComponent;