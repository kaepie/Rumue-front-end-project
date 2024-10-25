// app/my-page/page.tsx
'use client';

import OrderCard from '@/app/components/InfoBox';
import { OrderData } from '@/app/components/OrderData';
import React from 'react';

export default function HomePage() {
  const orders: OrderData[] = [
    {
      orderId: "1",
      type: "ต่อพรบ.",
      creationDate: "2023-12-12",
      status: "รอดำเนินการ",
      invoice: "INV123456",
      paymentProof: "proof123456",
      car: {
        registrationDate: "2023-01-01",
        licenseNumber: "123456",
        province: "Bangkok",
        carType: "Sedan",
        seatCapacity: 5,
        characteristic: "Luxury",
        brand: "BMW",
        model: "Z3",
        year: "2024",
        color: "Black",
        chassisNumber: "MR053HY9305237749",
        engineNumber: "EN123456",
        fuelType: "Gasoline",
        cylinderCount: 4,
        displacementCC: 1998,
        horsepower: 150,
        seatCount: 5,
        carWeight: 1500,
        grossWeight: 2000,
        wheelCount: 4,
      },
      owner: {
        name: "John Doe",
        idCard: "1234567890123",
        birthDate: "1990-01-01",
        nationality: "Thai",
        phone: "0123456789",
        address: "123 Main St, Bangkok",
      },
    },
    {
      orderId: "2",
      type: "ต่อพรบ.",
      creationDate: "2023-12-13",
      status: "รอดำเนินการ",
      invoice: "INV654321",
      paymentProof: "proof654321",
      car: {
        registrationDate: "2023-01-01",
        licenseNumber: "987654",
        province: "Bangkok",
        carType: "Hatchback",
        seatCapacity: 5,
        characteristic: "Sporty",
        brand: "Toyota",
        model: "Corolla",
        year: "2024",
        color: "White",
        chassisNumber: "MR053HY9305237780",
        engineNumber: "EN654321",
        fuelType: "Gasoline",
        cylinderCount: 4,
        displacementCC: 1600,
        horsepower: 130,
        seatCount: 5,
        carWeight: 1400,
        grossWeight: 1800,
        wheelCount: 4,
      },
      owner: {
        name: "Jane Smith",
        idCard: "9876543210987",
        birthDate: "1985-05-05",
        nationality: "Thai",
        phone: "0987654321",
        address: "456 Another St, Bangkok",
      },
    },
    // Add more order data as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {orders.map((order) => (
        <OrderCard key={order.orderId} order={order} /> 
      ))}
    </div>
  </div>
  );
}