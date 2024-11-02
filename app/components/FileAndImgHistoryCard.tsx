import Image from "next/image";
import payment from '@/public/payment.jpg'
import { TransactionWithUndefined } from "../(header-only)/interface/interface";
import { format } from 'date-fns';

function FileAndImgHistoryCard({transaction}:TransactionWithUndefined){
    const GenPDF = async()=> {
        const response = await fetch("/api/pdf-gen/invoice",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              {
                "Date": format(new Date(), 'dd-MM-yyyy HH:mm'),
                "Name":transaction?.User.Fname+" "+transaction?.User.Lname,
                "Description":transaction?.Transaction.InsuranceType,
                "Price":transaction?.Transaction.Price,
            }
            )
          })

          console.log(response)
          
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
            <button className="bg-primaryButton text-white rounded-lg py-4 px-6 hover:bg-primaryButtonHover duration-300 ease-in-out font-bold text-xl" onClick={GenPDF}>พิมพ์ใบแจ้งหนี้</button>
        </div>
    </div>
    );
}

export default FileAndImgHistoryCard