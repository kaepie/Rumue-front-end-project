import React from 'react';
import { OrderData } from './OrderData'; // Adjust the path as necessary

const OrderCard: React.FC<{ order: OrderData }> = ({ order }) => {
  return (
    <div className="border border-black rounded-md p-4 w-full max-w-3xl">
      <div className="flex justify-between items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-lg font-bold">{order.type}</h2>
          <p className="text-sm">รหัสคำสั่ง <span className="font-semibold">{order.orderId}</span></p>
          <p className="text-sm mt-2">{order.car.brand}, {order.car.model}</p>
          <p className="text-sm">ปี {order.car.year} | 'N/A'</p>
          <p className="text-sm mt-1">เลขตัวถัง <span className="font-semibold">{order.car.chassisNumber}</span></p>
          <p className="text-sm">วันที่กรอกคำสั่งซื้อ <span className="font-semibold">{order.creationDate}</span></p>
        </div>

        {/* Right Side - Status */}
        <div className="text-right">
          <p className="text-sm font-medium">สถานะ</p>
          <p className="text-lg font-bold text-black">{order.status}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;