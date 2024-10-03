import { useRouter } from 'next/navigation';

export default function LoginButton(){
    const router = useRouter();
    const handleClick = () => {
        router.push('/login');
    };

    return (
        <button onClick={handleClick} className="bg-primaryText text-white rounded-3xl p-3 border-2 border-primaryBackground hover:bg-primaryBackground hover:text-primaryText hover:border-2 hover:border-primaryText">เข้าสู่ระบบ</button>
    );
}
