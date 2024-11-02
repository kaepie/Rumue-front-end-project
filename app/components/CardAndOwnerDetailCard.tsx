import { TransactionData, TransactionWithUndefined } from "../(header-only)/interface/interface";
import CarDetailCard from "./CarDetailCard";
import FileAndImgHistoryCard from "./FileAndImgHistoryCard";
import OrderSection from "./OrderSection";


function CardAndOwnerDetailCard({transaction}:TransactionWithUndefined){
    const chooseStatusWord = (status:string) => {
        if (status === 'Pending') return 'กำลังดำเนินการ'
        else if (status === 'Approve') return 'ดำเนินการสำเร็จ'
        else if (status === 'Approve') return 'ถูกปฏิเสธ'
        return 'สถานะไม่ทราบ'; 
    }
    return (
        <div className="flex flex-col gap-8 ">
            <div className="flex items-center justify-center"><p className="text-primaryText text-[36px] font-bold">{transaction?.Transaction.ID}</p></div>
            <div className="flex items-baseline justify-center">
                <p className="text-[30px] font-bold">สถานะ:&nbsp;</p>
                <p className="text-primaryText text-[36px] font-bold">{transaction?.Transaction.Status ? chooseStatusWord(transaction.Transaction.Status) : 'ไม่ระบุสถานะ'}</p>
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