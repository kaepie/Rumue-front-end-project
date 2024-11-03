'use client';

import ParagraphAnimation from "@/app/components/ParagraphAnimation";
import TextTitleAnimation from "@/app/components/TextTitleAnimation";
import Image from "next/image";
import SelectBox from "./selectBox";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { format } from 'date-fns';

interface TransactionDetailsProps {
    transaction: {
    "CipNumber": string;
    "CrImageUrl": string;
    "ESlipImageUrl": string;
    "ID": string;
    "InsuranceType": string;
    "Price": number;
    "Status": string;
    "VipNumber": string;
    "CreatedAt": string;
    "UpdatedAt": string;
    "ReceiptDate": string;
    },
    user: {
    "ID": string;
    "Email": string;
    "Fname": string;
    "Lname": string;
    "Password": string;
    "PhoneNumber": string;
    "Address": string;
    "Nationality": string;
    "CitizenID": string;
    "BirthDate": string;
    },
    vehicle: {
    "ID": string;
    "RegistrationDate": string;
    "RegistrationNumber": string;
    "Province": string;
    "VehicleType": string;
    "VehicleCategory": string;
    "Characteristics": string;
    "Brand": string;
    "Model": string;
    "ModelYear": string;
    "VehicleColor": string;
    "EngineNumber": string;
    "ChasisNumber": string;
    "FuelType": string;
    "HorsePower": number;
    "SeatingCapacity": number;
    "WeightUnlanden": number;
    "WeightLaden": number;
    "TireCount": number;
    "TotalPiston": number;
    "Cc": number;
    "CompulsoryInsurancePolicyNumber": string;
    "VoluntaryInsurancePolicyNumber": string;
    "InsuranceType": string;
    "VehicleNumber": string;
    "VehicleNumberLocation": string;
    "EngineBrand": string;
    "EngineNumberLocation": string;
    "WheelType": string;
    }
    setOpenDetail: any;
    setUpdateStatus: any;
}
export default function TransactionDetails ({transaction, user, vehicle, setOpenDetail, setUpdateStatus}: TransactionDetailsProps) {
    const [statusTransaction, setStatusTransaction] = useState(transaction.Status);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { data: session } = useSession();
    const [CipNumber, setCipNumber] = useState(transaction.CipNumber);
    const [VipNumber, setVipNumber] = useState(transaction.VipNumber);
    const [error, setError] = useState(false);
    const [clickDisabled, setClickDisabled] = useState(false);
    const splitTime = transaction.ReceiptDate.split("T")[0];
    
    const updateStatusData = async (check :string) => {
        const token = session?.user?.token;
    
        if (token) {
            console.log("Token:", transaction.ID, statusTransaction , transaction.CipNumber, transaction.VipNumber);
            const res = await fetch('http://localhost:3001/transaction', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ID: transaction.ID,
                    Status: statusTransaction,
                    CipNumber: check === "approved" ? "" : check === "rejected" ? "" : CipNumber,
                    VipNumber: check === "approved" ? "" : check === "rejected" ? "" : VipNumber,
                }),
            });

            if (res.ok) {
                setUpdateStatus(true);
                setTimeout(() => {
                   setUpdateStatus(false);
                }, 750);
                console.log("statusTransaction: ",statusTransaction);
                setOpenDetail(false)
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 1000);
            }
        }
    };

    // useEffect(() => {
    //     if (statusTransaction !== transaction.Status) {
    //         updateStatusData();
    //     }
    // }, [statusTransaction]);

    const handleUpdateStatusClick = () => {
        if (statusTransaction === "pending" && (CipNumber === "" || VipNumber === "")) {
            setError(true);
            return;
        }
        if ((statusTransaction === "approved" && transaction.Status === "pending" && CipNumber !== "")) {
            updateStatusData("approved");
            return;
        }
        if ((statusTransaction === "approved" && transaction.Status === "pending" && CipNumber === "")) {
            setError(true);
            return;
        }

        if ((statusTransaction === "rejected" && transaction.Status === "pending")){
            updateStatusData("rejected");
            return;
        }

        if (statusTransaction === "pending" && transaction.Status === "pending") {   
            setError(true);
            return;
        }
    }

    useEffect(() => {
        if (CipNumber !== "") {
            setError(false);
        }
        if (VipNumber !== "") {
            setError(false);
        }
    }
    , [CipNumber, VipNumber]);

    function formatTimestamp(timestamp: string | undefined): string {
        timestamp = timestamp?timestamp:"2024-11-01T19:45:11.360291Z"
        const date = new Date(timestamp);
    
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = date.getUTCFullYear();
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    
        return `${day}-${month}-${year} ${hours}:${minutes}`;
    }

    const GenPDF = async()=> {
        const response = await fetch("/api/pdf-gen",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              {
                "InvoiceDate": format(new Date(), 'dd-MM-yyyy HH:mm'),
                "ApproveDate": formatTimestamp(transaction.UpdatedAt),
                "TranID": transaction.ID,
                "Name": user.Fname+" "+user.Lname,
                "Description":transaction.InsuranceType,
                "Price":transaction.Price,
                "Cip":transaction.CipNumber, //พรบ
                "Vip":transaction.VipNumber,
                "Brand": vehicle.Brand,
                "Model": vehicle.Model,
                "Year": vehicle.ModelYear,
                "Color": vehicle.VehicleColor
            }
            )
          })
          
    }

    
    return (
    <div className="w-screen h-auto grid lg:grid-cols-[1fr_2fr] gap-6 justify-center items-center py-24 px-6">   
        <div className="container border-2 flex flex-col border-secondaryBackground p-6 rounded-lg w-auto h-full bg-white gap-4">
            <div className="flex flex-row justify-start">
                <button onClick={() => setOpenDetail(false)}>
                    <span className="text-primaryText underline"> ย้อนกลับ </span>
                </button>
            </div>
            <TextTitleAnimation
            className="text-primaryText text-xl font-black"
            content="ข้อมูลผู้ครอบครอง"
            />
                
            <div className="flex flex-col justify-between w-full h-full items-center">
                <div className="flex flex-col gap-2 text-secondaryText w-full">
                    <div className="flex justify-between">
                        <ParagraphAnimation className="text-sm font-medium text-left w-full" content="ชื่อ นามสกุล" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${user.Fname} ${user.Lname}`} />
                    </div>

                    <div className="flex justify-between">
                        <ParagraphAnimation className="text-sm font-medium text-left w-full" content="เลขที่บัตรประชาชน" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${user.CitizenID}`} />
                    </div>

                    <div className="flex justify-between">
                        <ParagraphAnimation className="text-sm font-medium text-left w-full" content="วันเกิด" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${user.BirthDate}`} />
                    </div>

                    <div className="flex justify-between">
                        <ParagraphAnimation className="text-sm font-medium text-left w-full" content="สัญชาติ" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${user.Nationality}`} />
                    </div>
                    <div className="flex justify-between">
                        <ParagraphAnimation className="text-sm font-medium text-left w-full" content="เบอร์โทร" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${user.PhoneNumber}`} />
                    </div>
                    <div className="flex justify-between">
                        <ParagraphAnimation className="text-sm font-medium text-left w-full" content="ที่อยู่" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${user.Address}`} />
                    </div>
                    <div className="flex justify-between">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="วันที่สร้างรายการ" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${transaction.CreatedAt}`} />
                    </div>

                    <div className="flex justify-between">
                        <ParagraphAnimation className="text-sm font-medium text-left" content="หลักฐานการชำระเงิน" />
                    </div>
                    <div className="w-full h-80 bg-secondaryBackground rounded-2xl overflow-clip">
                        {transaction.CrImageUrl && (
                            <Image
                                src={transaction.CrImageUrl}
                                alt="File preview"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                </div>
                
                <div className="flex flex-col justify-center items-center h-80 w-full gap-2">
                    { transaction.Status === "pending" &&  (
                        <>
                            {  statusTransaction === "approved" && (
                                <>
                                    <div className="w-full flex flex-col">
                                        <ParagraphAnimation content={"เลขกรมธรรม์ของพรบ."} className="text-primaryText w-1/3 text-nowrap" />
                                        <input
                                            value={CipNumber}
                                            onChange={(e) => setCipNumber(e.target.value)}
                                            placeholder={"เลขกรมธรรม์ของพรบ."}
                                            type="text"
                                            className={`w-full h-14 text-primaryText rounded-xl p-3 border-2  placeholder-secondaryText focus:outline-none focus:border-primary focus:ring-0 transition duration-200 ease-in-out hover:shadow-md`} />
                                    </div>
                                    <div className="w-full flex flex-col">
                                        <ParagraphAnimation content={"เลขกรมธรรม์ของประกัน"} className="text-primaryText w-1/3 text-nowrap" />
                                        <input
                                            value={VipNumber}
                                            onChange={(e) => setVipNumber(e.target.value)}
                                            placeholder={"เลขกรมธรรม์ของประกัน"}
                                            type="text"
                                            className={`w-full h-14 text-primaryText rounded-xl p-3 border-2 placeholder-secondaryText focus:outline-none focus:border-primary focus:ring-0 transition duration-200 ease-in-out hover:shadow-md`} />
                                    </div>
                                </>
                                )
                             }
                            <SelectBox list={statusTransaction === "pending" ? ["approved", "rejected"] : statusTransaction === "approved" ? ["rejected"] : ["approved"]} nameMenu="เลือกสถานะ" isOpen={isOpen} setIsOpen={setIsOpen} setValue={setStatusTransaction} value={statusTransaction} />
                            <button
                                onClick={handleUpdateStatusClick}
                                className="flex flex-row items-center justify-center shadow-lg rounded-3xl py-2 px-4 bg-primaryText text-primaryBackground border-2 border-primaryText hover:bg-primaryBackground hover:text-primaryText"
                            >
                                update
                            </button>
                        </>
                        )
                    }
                    { transaction.Status === "approved" && (
                        <button 
                            disabled={clickDisabled}
                            onClick={() => {
                                GenPDF();
                                setClickDisabled(true);
                                setTimeout(() => {
                                    setClickDisabled(false);
                                }, 10000);
                            }}
                            className={`flex flex-row items-center justify-center shadow-lg rounded-3xl py-2 px-4 ${clickDisabled ? "hover:text-gray-400 text-gray-400 bg-gray-200 border-2 border-gray-300 cursor-not-allowed" : "bg-primaryText text-primaryBackground border-2 border-primaryText hover:bg-primaryBackground hover:text-primaryText"} `}
                            >
                                ดาวโหลดใบเสร็จ
                        </button>
                    )
                    }
                </div>
            </div>
        </div>
        <div className="container w-full h-full flex flex-col gap-4 rounded-lg border-secondaryBackground p-6 border-2">
            <div className="flex flex-row justify-between items-end">
                <div className="flex flex-row gap-4 justify-center items-end">
                    <h1 className="text-primaryButtonHover text-3xl font-black">
                        {`${transaction["InsuranceType"] === "class1" ? "ประกันชั้น 1" : transaction["InsuranceType"] === "class2" ? "ประกันชั้น 2" : transaction["InsuranceType"] === "class3" ? "ประกันชั้น 3" : "พรบ."}`}
                    </h1>
                    <p className="text-primaryButton text-sm font-medium">รหัสคำสั่งซื้อ: {`${transaction.ID}`}</p>
                </div>
                <div className="flex flex-row gap-4 justify-center items-end">
                    <p className="text-primaryButton text-sm font-medium">สถานะ</p>
                    <h1 className="text-primaryButtonHover text-xl font-black">{`${transaction.Status}`}</h1>
                </div>
            </div>
            <div className="container flex flex-col gap-4">
                <TextTitleAnimation
                className="text-primaryText text-xl font-black"
                content="ข้อมูลรถยนต์"
                />
                
                <div className="flex flex-col text-secondaryText">
                    <div className="flex w-full justify-around border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-left w-full" content="วันที่จดทะเบียน" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.RegistrationDate}`} />
                    </div>

                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-left w-full" content="ทะเบียนรถ" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.RegistrationNumber}`} />
                    </div>

                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-left w-full" content="จังหวัด" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.Province}`} />
                    </div>

                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-left w-full" content="ประเภทรถ" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.VehicleType}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-left w-full" content="รย." />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.VehicleCategory}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-left w-full" content="ลักษณะ" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.Characteristics}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="ยี่ห้อ" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.Brand}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="แบบ" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.Model}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="รุ่นปี ค.ศ.  " />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.ModelYear}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="สี" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.VehicleColor}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="เลขตัวรถ" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.VehicleNumber}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="ที่อยู่เลขตัวรถ" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.VehicleNumberLocation}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="ยี่ห้อเครื่องยนต์" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.EngineBrand}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="เลขเครื่องยนต์" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.EngineNumber}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="ที่อยู่เลขเครื่องยนต์" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.EngineNumberLocation}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="ประเภทเชื่อเพลิง" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.FuelType}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="เลขถังแก๊ส" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.ChasisNumber}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="จำนวน(สูบ)" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.TotalPiston}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="ซีซี" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.Cc}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="แรงม้า" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.HorsePower}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="ที่นั่ง(คน)" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.SeatingCapacity}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="น้ำหนักรถ(กก.)" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.WeightUnlanden}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="น้ำหนักรวม(กก.)" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.WeightLaden}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="ประเภทยาง" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${vehicle.WheelType}`} />
                    </div>
                    <div className="flex justify-between border-b-[1px] py-2 border-border">
                        <ParagraphAnimation className="text-sm font-medium text-lef w-full" content="เวลาออกใบเสร็จ" />
                        <ParagraphAnimation className="text-sm text-right w-full text-primaryText font-bold" content={`${splitTime === "0001-01-01" ? "ไม่ระบุเวลา" : splitTime}`} />
                    </div>
                    
                </div>
            </div>
            

        </div>
        {error && (
                <div className="flex justify-center items-center h-10 w-full rounded-lg border-red-700 border-2 bg-red-500">
                  <p className="text-white">กรอกข้อมูลไม่ครบถ้วน</p>
                </div>
        )}

    </div>
    );
}