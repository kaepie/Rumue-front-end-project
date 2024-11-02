'use client'
import HistoryCard from "@/app/components/HistoryCard";
import { useEffect, useState } from "react";
import { TransactionData } from "../interface/interface";
import CardAndOwnerDetailCard from "@/app/components/CardAndOwnerDetailCard";

export default function History(){
    const [transaction, setTransaction] = useState<TransactionData[]>([])
    const [clickDetail, setClickDetail] = useState(true)
    const [item, setItem] = useState<TransactionData>()

    const handleClickDetail = (item:TransactionData) =>{
        setClickDetail(!clickDetail)
        setItem(item)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzA4NTAzOTgsImlkIjoiZTU3MzFmMWYtZTIwYS00Njc5LWEyMTYtMTIxODBlNDU5ODRiIiwicm9sZSI6InVzZXIifQ.VrJgrer0P0VS-dMJfF39_JF2jJPwQMBUovjY8WY5wXk";
                const response = await fetch(`http://localhost:3001/transaction/history`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setTransaction(data.transactions);
            } catch (e) {
                console.error("Error fetching data:", e);
            }
        };

        fetchData();

    }, []);

    return (
        <>
        {
        clickDetail&&
        <div className="flex flex-col items-center justify-center my-24 space-y-5">
            {transaction.map((item, index) => (
                <HistoryCard category={item.Transaction.InsuranceType} carModel={`${item.Vehicle.Brand} ${item.Vehicle.Model}`} year={item.Vehicle.ModelYear} miles={">3000"} engineNo={item.Vehicle.EngineNumber} date="12 ธันวาคม 2567" status={item.Transaction.Status} onClickDetail={()=>handleClickDetail(item)}></HistoryCard>
            ))}
        </div>
        }
        {
            !clickDetail&&
            <div className="px-32 py-24 flex justify-center">
                <CardAndOwnerDetailCard transaction={item}></CardAndOwnerDetailCard>
            </div>
            
        }
        </>
    );
}