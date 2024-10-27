'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import PasswordEditCard from "./PasswordEditCard";

function ProfileCard(props: any) {
    const [showPasswordEdit, setShowPasswordEdit] = useState(false); // Renamed for clarity
    const router = useRouter();

    const routeToProfileEdit = () => {
        router.push("profile/edit");
    };

    const togglePasswordEdit = () => {
        setShowPasswordEdit((prev) => !prev); // Toggle the visibility of the PasswordEditCard
    };

    return (
        <div className="w-full p-6 rounded-lg shadow-xl mx-24 container inline-block bg-primaryBackground">
            <h1 className="text-[30px] font-semibold mb-6">ข้อมูลส่วนตัว</h1>
            <div className="space-y-4 text-[24px]">
                <div className="flex justify-between">
                    <p>Email</p>
                    <p>{props.email}</p>
                </div>
                <div className="flex justify-between">
                    <p>ชื่อจริง</p>
                    <p>{props.firstName}</p>
                </div>
                <div className="flex justify-between">
                    <p>นามสกุล</p>
                    <p>{props.lastName}</p>
                </div>
                <div className="flex justify-between">
                    <p>เบอร์โทรศัพท์</p>
                    <p>{props.phone}</p>
                </div>
                <div className="flex justify-between">
                    <p>ที่อยู่</p>
                    <p>{props.address}</p>
                </div>
                <div className="flex justify-between">
                    <p>สัญชาติ</p>
                    <p>{props.nationality}</p>
                </div>
                <div className="flex justify-between">
                    <p>วันเกิด</p>
                    <p>{props.birthDate}</p>
                </div>
                <div className="flex justify-between">
                    <p>รหัสประจำตัวประชาชน</p>
                    <p>{props.citizenId}</p>
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
    );
}

export default ProfileCard;
