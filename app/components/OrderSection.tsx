import { TransactionWithUndefined } from "../(header-only)/interface/interface";

function OrderSection({transaction}:TransactionWithUndefined){
    return (
        <div className="px-6 py-10 space-y-10 flex-1 border border-primaryText rounded-xl container">
            <div className="flex justify-center items-baseline">
                <p className="font-bold text-[28px]">ข้อมูลส่วนตัว</p>
            </div>
            <div>
                <div className="flex items-center">
                    <p className="text-primaryText text-[24px] flex-1">ชื่อ นามสกุล</p>
                    <p className="text-[24px] font-bold flex-1">{`${transaction?.User.Fname} ${transaction?.User.Lname}`}</p>
                </div>
                <div className="flex items-center">
                    <p className="text-primaryText text-[24px] flex-1">เลขที่บัตร</p>
                    <p className="text-[24px] font-bold flex-1">{transaction?.User.CitizenID}</p>
                </div>
                <div className="flex items-center">
                    <p className="text-primaryText text-[24px] flex-1">วันเกิด</p>
                    <p className="text-[24px] font-bold flex-1">{transaction?.User.BirthDate}</p>
                </div>
                <div className="flex items-center">
                    <p className="text-primaryText text-[24px] flex-1">สัญชาติ</p>
                    <p className="text-[24px] font-bold flex-1">{transaction?.User.Nationality}</p>
                </div>
                <div className="flex items-center">
                    <p className="text-primaryText text-[24px] flex-1">โทร</p>
                    <p className="text-[24px] font-bold flex-1">{transaction?.User.PhoneNumber}</p>
                </div>
                <div className="flex items-center">
                    <p className="text-primaryText text-[24px] flex-1">ที่อยู่ปัจจุบัน</p>
                    <p className="text-[24px] font-bold flex-1">{transaction?.User.Address}</p>
                </div>
            </div>
            <div >
                <div className="flex items-center">
                    <p className="text-primaryText text-[24px] flex-1">วันที่สร้างรายการ</p>
                    <p className="text-[24px] font-bold flex-1">{transaction?.Transaction.CreatedAt}</p>
                </div>
            </div>
        </div>
    );
}

export default OrderSection