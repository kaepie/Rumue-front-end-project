'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import PasswordEditCard from "./PasswordEditCard";
import { UserWithUndefined } from "../(header-only)/interface/interface";
import ProfileEditCard from "./ProfileEditCard";

function ProfileCard({user}: UserWithUndefined) {
    const [showPasswordEdit, setShowPasswordEdit] = useState(false);
    const [onClickEditDetail, setOnClickEditDetail] = useState(false)
    const router = useRouter();

    const routeToProfileEdit = () => {
        setOnClickEditDetail((prev) => !prev)
        
    };

    const togglePasswordEdit = () => {
        setShowPasswordEdit((prev) => !prev); // Toggle the visibility of the PasswordEditCard
    };

    return (
        <>
        <div className={`w-full p-6 rounded-lg shadow-xl mx-24 container ${onClickEditDetail?"hidden":"inline-block"} bg-primaryBackground`}>
            <h1 className="text-[30px] font-semibold mb-6">ข้อมูลส่วนตัว</h1>
            <div className="space-y-4 text-[24px]">
                <div className="flex justify-between ">
                    <p>Email</p>
                    <p>{user?.Email}</p>
                </div>
                <div className="flex justify-between">
                    <p>ชื่อจริง</p>
                    <p>{user?.Fname}</p>
                </div>
                <div className="flex justify-between">
                    <p>นามสกุล</p>
                    <p>{user?.Lname}</p>
                </div>
                <div className="flex justify-between">
                    <p>เบอร์โทรศัพท์</p>
                    <p>{user?.PhoneNumber}</p>
                </div>
                <div className="flex justify-between">
                    <p>ที่อยู่</p>
                    <p>{user?.Address}</p>
                </div>
                <div className="flex justify-between">
                    <p>สัญชาติ</p>
                    <p>{user?.Nationality}</p>
                </div>
                <div className="flex justify-between">
                    <p>วันเกิด</p>
                    <p>{user?.BirthDate}</p>
                </div>
                <div className="flex justify-between">
                    <p>รหัสประจำตัวประชาชน</p>
                    <p>{user?.CitizenID}</p>
                </div>
            </div>
            <div className="mt-6 flex space-x-4 items-center justify-center text-[22px]">
                <button
                    className="px-4 py-2 rounded-lg text-white bg-primaryButton hover:bg-primaryButtonHover cursor-pointer duration-300 ease-in-out"
                    onClick={routeToProfileEdit}
                >
                    แก้ไขข้อมูลส่วนตัว
                </button>
                <button
                    className="px-4 py-2 bg-primaryButton rounded-lg text-white hover:bg-primaryButtonHover cursor-pointer duration-300 ease-in-out"
                    onClick={togglePasswordEdit}
                >
                    แก้ไขรหัสผ่าน
                </button>
            </div>
            {showPasswordEdit && <PasswordEditCard showPasswordEdit={togglePasswordEdit}/>}
        </div>
        {onClickEditDetail&& 
        <div className="px-56 py-24 flex items-center justify-center">
            <ProfileEditCard Email={user?.Email} Fname={user?.Fname} Lname={user?.Lname} PhoneNumber={user?.PhoneNumber} Address={user?.Address} Nationality={user?.Nationality} BirthDate={user?.BirthDate} CitizenID={user?.CitizenID} onClickEdit={routeToProfileEdit}></ProfileEditCard>
        </div>
        }
        </>
    );
}

export default ProfileCard;
