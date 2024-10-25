import React from "react";
import { OrderData } from "./OrderData";
import GenerateInvoiceButton from "./GenerateInvoiceButton";
import UpdateStatusButton from "./UpdateStatusButton";

interface OrderInfoProps {
  data: OrderData;
}

const OrderInfo: React.FC<OrderInfoProps> = ({ data }) => {
  return (
    <div className="border p-4 rounded-lg w-1/2">
      <h2 className="font-bold mb-2">ข้อมูลรายการคำสั่ง</h2>
      <div className="flex justify-between mb-2">
        <p>รหัสคำสั่ง</p>
        <p>{data.orderId}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>ประเภท</p>
        <p>{data.type}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>วันที่สร้างรายการ</p>
        <p>{data.creationDate}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>สถานะ</p>
        <p>{data.status}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>ใบแจ้งหนี้</p>
        <a href={`/files/${data.invoice}`} className="text-blue-500">
          {data.invoice}
        </a>
      </div>
      <div className="flex justify-between mb-2">
        <p>หลักฐานการชำระเงิน</p>
        <a href={`/files/${data.paymentProof}`} className="text-blue-500">
          {data.paymentProof}
        </a>
      </div>
      <div className="flex flex-col mt-4">
        <GenerateInvoiceButton/>
        <UpdateStatusButton/>
      </div>
    </div>
  );
};

export default OrderInfo;