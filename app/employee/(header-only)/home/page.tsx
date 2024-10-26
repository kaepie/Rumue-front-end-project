'use client';

import OrderCard from '@/app/components/InfoBox';
import React from 'react';

const orders = [
  {
    orderId: "123456789",
    type: "ต่อพรบ.",
    creationDate: "12 ธันวาคม 2567",
    status: "รอดำเนินการ",
    car: {
      brand: "BMW",
      model: "Z3",
      year: "2024",
      chassisNumber: "MR053HY9305237749"
    }
  },
  {
    orderId: "987654321",
    type: "ต่อพรบ.",
    creationDate: "13 ธันวาคม 2567",
    status: "สำเร็จ",
    car: {
      brand: "Toyota",
      model: "Corolla",
      year: "2024",
      chassisNumber: "JTDBT923981729384"
    }
  },
  {
    orderId: "2468101214",
    type: "ต่อพรบ.",
    creationDate: "14 ธันวาคม 2567",
    status: "กำลังดำเนินการ",
    car: {
      brand: "Honda",
      model: "Civic",
      year: "2023",
      chassisNumber: "1HGCM82633A123456"
    }
  }
];

export default function HomePage() {
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