import Link from "next/link";

export default function Payment(){
    return(
        <div>
            <Link href="/vehicleform">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    ไปหน้ากรอกข้อมูล
                </button>
            </Link>
        </div>
    );
}