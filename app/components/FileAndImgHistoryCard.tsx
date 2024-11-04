import Image from "next/image";
import payment from '@/public/payment.jpg'
import { TransactionWithUndefined } from "../(header-only)/interface/interface";
import { format } from 'date-fns';

function FileAndImgHistoryCard({transaction}:TransactionWithUndefined){
    function formatTimestamp(timestamp: string | undefined): string {
        timestamp = timestamp?timestamp:"2024-11-01T19:45:11.360291Z"
        const date = new Date(timestamp);
    
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = date.getUTCFullYear();
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    
        return `${day}-${month}-${year} ${hours}:${minutes}`;
    }

    const GenPDF = async()=> {
        console.log(transaction?.Transaction.Price)
        const response = await fetch("/api/pdf-gen",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              {
                "InvoiceDate": format(new Date(), 'dd-MM-yyyy HH:mm'),
                "ApproveDate": formatTimestamp(transaction?.Transaction.UpdatedAt),
                "TranID":transaction?.Transaction.ID,
                "Name":transaction?.User.Fname+" "+transaction?.User.Lname,
                "Description":transaction?.Transaction.InsuranceType,
                "Price":transaction?.Transaction.Price,
                "Cip":transaction?.Transaction.CipNumber, //พรบ
                "Vip":transaction?.Transaction.VipNumber,
                "Brand":transaction?.Vehicle.Brand,
                "Model":transaction?.Vehicle.Model,
                "Year":transaction?.Vehicle.ModelYear,
                "Color":transaction?.Vehicle.VehicleColor
            }
            )
          })
          
    }
    return (
    <div className="flex w-full border border-primaryText py-10 rounded-xl justify-center flex-1 container">
        <div className="flex flex-col flex-[0.7] gap-5 items-center">
            <p className="font-bold text-[32px] ">หลักฐานการชำระเงิน</p>
            <Image
                    alt="Background"
                    src={payment}
                    draggable={false}
                    quality={100}
                    style={{
                        objectFit: 'fill',
                    }}
                />
            {/* {   transaction?.Transaction.Status === 'approved' && (
                <button className="bg-primaryButton text-white rounded-lg py-4 px-6 hover:bg-primaryButtonHover duration-300 ease-in-out font-bold text-xl" onClick={GenPDF}>พิมพ์ใบแจ้งหนี้</button>
                )
            } */}
        </div>
    </div>
    );
}

export default FileAndImgHistoryCard