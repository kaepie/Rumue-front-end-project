function ProfileEditCard(props: any){
    return (
        <div className="flex flex-col px-10 py-16 rounded-xl shadow-xl bg-primaryBackground container overflow-x-auto">
            <p className="text-[32px] text-primaryText">แก้ไข - ข้อมูลส่วนตัว</p>
            <div className="my-[60px] space-y-3">
                <div className="flex flex-col lg:flex-row gap-3 text-primaryText">
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">ชื่อจริง</p>
                        <input type="text" placeholder="เลิศพิพัฒน์" className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">นามสกุล</p>
                        <input type="text" placeholder="ทูเดอมูน" className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 text-primaryText">
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">รหัสประจำตัวประชาชน</p>
                        <input type="text" placeholder="1-1014-xxxxx613" className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">สัญชาติ</p>
                        <input type="text" placeholder="ไทย" className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 text-primaryText">
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">เบอร์โทรศัพท์</p>
                        <input type="text" placeholder="09x-xxx-x521" className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">บ้านเลขที่</p>
                        <input type="text" placeholder="43/72" className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-[24px]">หมู่</p>
                        <input type="text" placeholder="3" className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">ซอย</p>
                        <input type="text" placeholder="ซอยอมรพันธ์" className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">ถนน</p>
                        <input type="text" placeholder="ลาดพร้าว11" className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 text-primaryText">
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">จังหวัด</p>
                        <input type="text" placeholder="กรุงเทพ" className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">อำเภอ/เขต</p>
                        <input type="text" placeholder="ธัญบุรี" className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">ตำบล/แขวง</p>
                        <input type="text" placeholder="คลองหลวง" className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">รหัสไปษณีย์</p>
                        <input type="text" placeholder="12130" className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 text-primaryText">
                    <div className="flex-col gap-3 inline-block">
                        <p className="text-[24px]">วันเกิด</p>
                        <input type="date" className="py-4 px-4 rounded-md border-2 border-primaryText"></input>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex space-x-4 items-center justify-center text-[22px]">
                <button className="px-6 py-2 rounded-lg text-white bg-primaryButton hover:bg-primaryButtonHover cursor-pointer">ยืนยัน</button>
            </div>
        </div>
    );
}

export default ProfileEditCard;
