import Link from "next/link";

export default function VehicleForm() {
    return (
        <div className="space-x-6">
            <Link href={{pathname :"/showPrice"}}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    showPrice
                </button>
            </Link>
            <Link href={{pathname :"/payment", query : {name: "peak"}}}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    payment
                </button>
            </Link>
        </div>
    );
}