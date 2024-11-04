import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-screen h-16 shadow-2xl">
            <div className="w-full h-full flex justify-center items-center">
                <ul className="flex space-x-4 text-primaryText">
                    <li>
                        <Link href="/checkPrice">เช็คราคา</Link>
                    </li>
                    <li>
                        <Link href="/contact">ติดต่อ</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
