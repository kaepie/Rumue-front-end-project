'use client'
import { CircleX } from "lucide-react";
import { useState } from "react";

function ProfileEditCard(props: any){
    const defaultFname = props.Fname
    const defaultLname = props.Lname
    const defaultCitizenID = props.CitizenID
    const defaultNationlity = props.Nationality
    const defaultPhone = props.PhoneNumber
    const defaultAddress = props.Address
    const defaultBirth = props.BirthDate

    const [fname, setFname] = useState(props.Fname)
    const [lname, setLname] = useState(props.Lname)
    const [citizenID, setCitizenID] = useState(props.CitizenID)
    const [nationlity, setNationality] = useState(props.Nationality)
    const [phone, setPhone] = useState(props.PhoneNumber)
    const [address, setAddress] = useState(props.Address)
    const [brith, setBirth] = useState(props.BirthDate)

    const handleSubmit = async() =>{
        // add address part together here
        if (fname === defaultFname && lname === defaultLname && citizenID === defaultCitizenID && nationlity === defaultNationlity && phone === defaultPhone && address === defaultAddress && brith === defaultBirth){
            // set error text to User
        }

        const response = await fetch("")
    }

    return (
        <div className="flex flex-col px-10 py-16 rounded-xl shadow-xl bg-primaryBackground container overflow-x-auto">
            <div className='flex justify-end text-primaryText'>
                <CircleX size={30} className='text-primaryButton cursor-pointer hover:text-primaryButtonHover hover:scale-110 duration-300 ease-in-out' onClick={props.onClickEdit} />
            </div>
            <p className="text-[32px] text-primaryText">แก้ไข - ข้อมูลส่วนตัว</p>
            <div className="my-[60px] space-y-3">
                <div className="flex flex-col lg:flex-row gap-3 text-primaryText">
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">ชื่อจริง</p>
                        <input type="text" placeholder="เลิศพิพัฒน์" value={fname} className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">นามสกุล</p>
                        <input type="text" placeholder="ทูเดอมูน" value={lname} className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 text-primaryText">
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">รหัสประจำตัวประชาชน</p>
                        <input type="text" placeholder="1-1014-xxxxx613" value={citizenID} className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">สัญชาติ</p>
                        <input type="text" placeholder="ไทย" value={nationlity} className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 text-primaryText">
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">เบอร์โทรศัพท์</p>
                        <input type="text" placeholder="09x-xxx-x521" value={phone} className="py-4 px-2 rounded-md border-2 border-primaryText"></input>
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
                        <input type="date" className="py-4 px-4 rounded-md border-2 border-primaryText" value={brith}></input>
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
