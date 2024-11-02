import { CircleX, Eye, EyeOff } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

function PasswordEditCard(props: any) {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false)
    const {data: session, status} = useSession();   
    
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');

    const isPasswordValid = (password: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,24}$/;
        return passwordRegex.test(password);
    };

    const handlePasswordChange = async() => {
        console.log(oldPassword, newPassword)
        if (!isPasswordValid(newPassword)) {
            setErrorMessage('Password must contain 1 uppercase letter, 1 lowercase letter, 1 number, and be 6-24 characters long.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setPasswordMatchError('Passwords do not match.');
            return;
        }

        const token = session?.user.token;
        const reponse = await fetch("http://127.0.0.1:3001/user/update/password",{
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                "oldPassword":oldPassword,
                "newPassword":newPassword
            })
        })

        if (!reponse.ok){
            console.log("can't update password")
            alert("Can't update password please try again")
            return
        }

        setErrorMessage('');
        setPasswordMatchError('');
        setShowPopUp(true)
    };

    const closePopup = ()=>{
        setShowPopUp(false)
        props.showPasswordEdit();
    }

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
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
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
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
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
                    {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                    <p className="text-[24px] text-primaryText">ยืนยันรหัสผ่านใหม่</p>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                    {passwordMatchError && <p className="text-red-500 text-sm">{passwordMatchError}</p>}
                </div>
                <div className='flex justify-center items-center'>
                    <button
                        className="bg-primaryButton text-white rounded py-2 px-4 hover:bg-primaryButtonHover duration-300 ease-in-out"
                        onClick={handlePasswordChange}
                    >
                        Change Password
                    </button>
                </div>
            </div>
            {showPopUp && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-60">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                        <h2 className="text-xl font-semibold text-center mb-4">Password Changed Successfully</h2>
                        <p className="text-center text-gray-700">Password ของคุณถูกอัพเดทแล้วครับ!</p>
                        <div className="flex justify-center mt-6">
                            <button
                                className="bg-primaryButton text-white rounded py-2 px-4 hover:bg-primaryButtonHover duration-300 ease-in-out"
                                onClick={closePopup}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PasswordEditCard;
