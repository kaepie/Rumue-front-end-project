import { useRouter } from "next/navigation";
import { TransactionData, TransactionWithUndefined } from "../(header-only)/interface/interface";
import CarDetailCard from "./CarDetailCard";
import FileAndImgHistoryCard from "./FileAndImgHistoryCard";
import OrderSection from "./OrderSection";


function CardAndOwnerDetailCard({transaction, setClickDetail}:TransactionWithUndefined){
    const chooseStatusWord = (status:string) => {
        console.log(status)
        if (status === 'pending') return 'กำลังดำเนินการ'
        else if (status === 'approved') return 'ดำเนินการสำเร็จ'
        else if (status === 'rejected') return 'ถูกปฏิเสธ'
        return 'สถานะไม่ทราบ'; 
    }

    const spliteTime = (time:string) => {
        const timeArray = time.split('T')
        return timeArray[0]
    }

    return (
        <div className="flex flex-col gap-8 ">
            <div className="flex flex-row justify-start">
                <button onClick={() => setClickDetail(true)}>
                    <span className="text-primaryText underline"> ย้อนกลับ </span>
                </button>
            </div>
            <div className="flex items-center justify-center"><p className="text-primaryText text-[36px] font-bold">{transaction?.Transaction.ID}</p></div>
            <div className="flex items-baseline justify-center">
                <p className="text-[30px] font-bold">สถานะ:&nbsp;</p>
                <p className="text-primaryText text-[36px] font-bold">{transaction?.Transaction.Status ? chooseStatusWord(transaction.Transaction.Status) : 'ไม่ระบุสถานะ'}</p>
            </div>
            <div className="flex justify-center items-center">
                <p className="text-[24px] font-bold">เวลาออกใบเสร็จ:&nbsp;</p>
                <p className="text-primaryText text-[26px] font-bold">{transaction?.Transaction.ReceiptDate === "0001-01-01T00:00:00Z" ? "ไม่ระบุเวลา" : spliteTime(transaction!.Transaction.ReceiptDate) }</p>
            </div>
                <div className="2xl:flex gap-8 2xl:space-y-0 space-y-4"> 
                <CarDetailCard transaction={transaction}></CarDetailCard>
                <OrderSection transaction={transaction}></OrderSection>
                <FileAndImgHistoryCard transaction={transaction}></FileAndImgHistoryCard>
            </div>
            
        </div>
    );
}

export default CardAndOwnerDetailCard