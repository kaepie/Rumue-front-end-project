import React from "react";
import GenerateInvoiceButton from "./GenerateInvoiceButton";
import UpdateStatusButton from "./UpdateStatusButton";
import TextTitleAnimation from "@/app/components/TextTitleAnimation";
import ParagraphAnimation from "@/app/components/ParagraphAnimation";

interface OrderInfoProps {
  orderId: string;
  type: string;
  creationDate: string;
  status: string;
  invoice: string;
  paymentProof: string;
}

const OrderInfo: React.FC<OrderInfoProps> = ({
  orderId,
  type,
  creationDate,
  status,
  invoice,
  paymentProof,
}) => {
  return (
    <div className="border-2 border-secondaryBackground p-6 rounded-lg w-full max-w-xl bg-white space-y-4">
      <TextTitleAnimation
        className="text-primaryButtonHover text-3xl font-black text-center mb-6"
        content="ข้อมูลรายการคำสั่ง"
      />
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <ParagraphAnimation className="text-lg font-medium" content="รหัสคำสั่ง" />
          <ParagraphAnimation className="text-lg" content={orderId} />
        </div>

        <div className="flex justify-between">
          <ParagraphAnimation className="text-lg font-medium" content="ประเภท" />
          <ParagraphAnimation className="text-lg" content={type} />
        </div>

        <div className="flex justify-between">
          <ParagraphAnimation className="text-lg font-medium" content="วันที่สร้างรายการ" />
          <ParagraphAnimation className="text-lg" content={creationDate} />
        </div>

        <div className="flex justify-between">
          <ParagraphAnimation className="text-lg font-medium" content="สถานะ" />
          <ParagraphAnimation className="text-lg" content={status} />
        </div>

        <div className="flex justify-between">
          <ParagraphAnimation className="text-lg font-medium" content="ใบแจ้งหนี้" />
          <a href={`/files/${invoice}`} className="text-blue-500">
            <ParagraphAnimation className="text-lg" content={invoice} />
          </a>
        </div>

        <div className="flex justify-between">
          <ParagraphAnimation className="text-lg font-medium" content="หลักฐานการชำระเงิน" />
          <a href={`/files/${paymentProof}`} className="text-blue-500">
            <ParagraphAnimation className="text-lg" content={paymentProof} />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center mt-6 space-y-2">
        <GenerateInvoiceButton />
        <UpdateStatusButton />
      </div>
    </div>
  );
};

export default OrderInfo;