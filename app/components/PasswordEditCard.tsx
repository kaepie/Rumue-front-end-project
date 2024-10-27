import { CircleX, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

function PasswordEditCard(props: any) {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-full space-y-16 lg:mx-56 container mx-32">
                <div>
                    <div className='flex justify-end text-primaryText'>
                        <CircleX size={30} className='text-primaryButton cursor-pointer hover:text-primaryButtonHover hover:scale-110 duration-300 ease-in-out' onClick={props.showPasswordEdit} />
                    </div>
                    <h1 className="text-[32px]">ข้อมูลส่วนตัว</h1>
                </div>
                <div className='flex flex-col gap-4 text-primaryText'>
                    <p className="text-[24px]">รหัสผ่านเก่า</p>
                    <div className="relative">
                        <input
                            type={showOldPassword ? "text" : "password"}
                            placeholder="Old Password"
                            className="border px-3 py-4 rounded w-full bg-primaryBackground border-[#A69383]"
                        />
                        <button
                            type="button"
                            onClick={() => setShowOldPassword(!showOldPassword)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                        >
                            {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    <p className="text-[24px] text-primaryText">รหัสผ่านใหม่</p>
                    <div className="relative">
                        <input
                            type={showNewPassword ? "text" : "password"}
                            placeholder="New Password"
                            className="border px-3 py-4 rounded w-full bg-primaryBackground border-[#A69383]"
                        />
                        <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                        >
                            {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    <p className="text-[24px] text-primaryText">ยืนยันรหัสผ่านใหม่</p>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="border px-3 py-4 rounded w-full bg-primaryBackground border-[#A69383]"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                        >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button
                        className="bg-primaryButton text-white rounded py-2 px-4 hover:bg-primaryButtonHover duration-300 ease-in-out"
                        onClick={props.showPasswordEdit}
                    >
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PasswordEditCard;
