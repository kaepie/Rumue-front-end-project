import CarDetailCard from "./CarDetailCard";
import FileAndImgHistoryCard from "./FileAndImgHistoryCard";
import OrderSection from "./OrderSection";

function CardAndOwnerDetailCard(props:any){
    return (
        <div className="flex flex-col gap-8 ">
            <div className="flex items-center justify-center"><p className="text-primaryText text-[36px] font-bold">39bad749-9261-475f-8b64-6a6a5b4784df</p></div>
            <div className="flex items-baseline justify-center">
                <p className="text-[30px] font-bold">สถานะ:&nbsp;</p>
                <p className="text-primaryText text-[36px] font-bold">กำลังดำเนินการ</p>
            </div>
            <div className="2xl:flex gap-8 2xl:space-y-0 space-y-4"> 
                <CarDetailCard></CarDetailCard>
                <OrderSection></OrderSection>
                <FileAndImgHistoryCard></FileAndImgHistoryCard>
            </div>
            
        </div>
    );
}

export default CardAndOwnerDetailCard