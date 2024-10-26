
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
    chassisNumber: "ABC1234567890", // Added field
    engineNumber: "ENG9876543210", // Added field
    fuelType: "Petrol", // Added field
    cylinderCount: 4, // Added field
    engineCapacity: 2500, // Added field
    horsepower: 200, // Added field
    seatingCapacity: 5, // Added field
    weight: 1500, // Added field
    grossWeight: 2000, // Added field
    wheelCount: 4, // Added field
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
        car={orderData.car} // Pass the entire car object
        owner={orderData.owner} // Pass the entire owner object
      />
    </div>
  );
};

export default CombinedComponent;