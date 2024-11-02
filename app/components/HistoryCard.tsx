'use client'
import { UserSearch,Check,X } from 'lucide-react';

function HistoryCard(props:any) {
    const chooseInsuranceWord = (category:string)=>{
        if(category == "0") return "พรบ."
        else if(category == "1" || category == "2" || category == "3") return `ประกันภัยรถยนต์ชั้น ${category}`
        else return category
    }
    return (
        <div className="w-full md:p-5 border border-primaryText bg-primaryBackground rounded-3xl mx-6 md:mx-24 container py-5 cursor-pointer hover:border-4 hover:shadow-2xl hover:scale-105 duration-300 ease-in-out" onClick={props.onClickDetail}>
            <div className="flex flex-col md:flex-row items-center md:space-x-5">
                <div className="flex-1 md:border-r border-primaryText font-bold md:pr-5 md:mb-0 pb-8 sm:border-b md:border-b-0">
                    <p className="text-3xl text-primaryText mb-6">{chooseInsuranceWord(props.category)}</p>
                    <div className="space-y-2">
                        <p className="text-xl font-bold">{props.carModel}</p>
                        <p className="text-xl font-bold text-secondaryText">{`${props.year} | ${props.miles}`}</p>
                        <div className="flex items-center text-xl">
                            <p className="text-secondaryText mr-6">เลขตัวถัง</p>
                            <p>{props.engineNo}</p>
                        </div>
                        <div className="flex items-center text-xl">
                            <p className="text-secondaryText mr-6">วันที่กรอกคำสั่งซื้อ</p>
                            <p>{props.date}</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center text-center sm:py-5 mb:pb-0">
                    <p className="text-secondaryText text-2xl">สถานะ</p>
                    {props.status == 'Pending' && <>
                        <p className="text-[#DC8C00] text-3xl">กำลังดำเนินการ</p>
                        <UserSearch className='text-[#DC8C00]' size={50}></UserSearch>
                    </>
                    }
                    {props.status == 'Approve' && <>
                        <p className="text-[#4CAF50] text-3xl">ดำเนินการสำเร็จ</p>
                        <Check className='text-[#4CAF50]' size={50}></Check>
                    </>}
                    {props.status == 'Reject' && <>
                        <p className="text-[#E53935] text-3xl">ถูกปฏิเสธ</p>
                        <X className='text-[#E53935]' size={50}></X>
                        </>}
                </div>
            </div>
        </div>
    );
}

export default HistoryCard;
