'use client';

import TransactionCard from "./CardTransactionPending";
import TextTitleAnimation from '@/app/components/TextTitleAnimation';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import{ useState ,useEffect } from 'react';
import TransactionDetails from "./transactionDetails";
export default function HomePage() {

  // const { data: session , status} = useSession();
  const [transactionsData, setTransactionsData] = useState([]);
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isDelayed, setIsDelayed] = useState(false);
  const [transaction, setTransaction] = useState({
    "CipNumber": "",
    "CrImageUrl": "",
    "ESlipImageUrl": "",
    "ID": "",
    "InsuranceType": "",
    "Price": 0.0,
    "Status": "",
    "VipNumber": "",
    "CreatedAt": "",
    "UpdatedAt": "",
    "ReceiptDate": ""
  });
  const [user, setUser] = useState({
    "ID": "",
    "Email": "",
    "Fname": "",
    "Lname": "",
    "Password": "",
    "PhoneNumber": "",
    "Address": "",
    "Nationality": "",
    "CitizenID": "",
    "BirthDate": ""
  });
  const [vehicle, setVehicle] = useState({
    "ID": "",
    "RegistrationDate": "",
    "RegistrationNumber": "",
    "Province": "",
    "VehicleType": "",
    "VehicleCategory": "",
    "Characteristics": "",
    "Brand": "",
    "Model": "",
    "ModelYear": "",
    "VehicleColor": "",
    "EngineNumber": "",
    "ChasisNumber": "",
    "FuelType": "",
    "HorsePower": 0.0,
    "SeatingCapacity": 0.0,
    "WeightUnlanden": 0.0,
    "WeightLaden": 0.0,
    "TireCount": 0.0,
    "CompulsoryInsurancePolicyNumber": "",
    "VoluntaryInsurancePolicyNumber": "",
    "InsuranceType": "",
    "VehicleNumber": "",
    "VehicleNumberLocation": "",
    "EngineBrand": "",
    "EngineNumberLocation": "",
    "WheelType": "",
    "TotalPiston": 0,
    "Cc": 0
  });
  const [openDetail, setOpenDetail] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [search, setSearch] = useState("");

  const handleSetTransaction = (transaction: any, user: any, vehicle: any) => {
    setTransaction(transaction);
    setUser(user);
    setVehicle(vehicle);
    setOpenDetail(true);
  }

  useEffect(() => {
    // Set a 2-second delay before allowing any action to proceed
    const timer = setTimeout(() => {
      setIsDelayed(true);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  useEffect(() => {
    // Only redirect if the delay is completed and status is checked
    if (isDelayed) {
      if (status === "unauthenticated") {
        router.push("/login");
      } else if (session?.user.role === "user") {
        router.push("/home");
      }
    }
  }, [isDelayed, session?.user.role, status, router]);

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const token = session?.user.token;
        
        if (token) {
          const res = await fetch('http://localhost:3001/transaction/list', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`, // ใช้ token จาก session
              'Content-Type': 'application/json',
            },
          });
  
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await res.json();
          const transactions = data.payload.Transactions || []; // สมมติว่า response มีข้อมูล transactions ในฟิลด์ Transactions

          console.log(transactions);
          setTransactionsData(transactions);
          console.log(transactionsData);
        }
      } catch (error) {
        console.error("Error loading TransactionData:", error);
      }
    };

    fetchTransactionData();
  }, [session, updateStatus, search]);

  const handleSearch = async (e :any) => {
    if (search === "") {
      return;
    }
    try {
      const token = session?.user.token;
      const res = await fetch(`http://localhost:3001/transaction/${search}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // ใช้ token จาก session
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      console.log("12313121312312");
      const data = await res.json();
      const transaction = data.payload.transaction || []; // สมมติว่า response มีข้อมูล transactions ในฟิลด์ Transactions
      console.log("here: ",transaction);

      setTransactionsData([
          transaction
      ]
      );
      e.preventDefault();
    } catch (error) {
      console.error("Error loading TransactionData:", error);
    }
  }

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <>
    { status === "authenticated" && session?.user.role === "employee" && !openDetail &&(

    <div className="relative flex flex-col items-center w-screen h-auto gap-10 py-20">
      {updateStatus && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-500 ease-in-out">
              <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg transform transition-all duration-500 ease-in-out scale-95 opacity-100 animate-fadeIn">
                  <h1 className="text-primaryText text-2xl font-bold">ดำเนินการสำเร็จ</h1>
              </div>
          </div>
      )}
      <TextTitleAnimation content="รายการรถยนต์ที่ต้องดำเนินการ" className="text-center text-3xl text-primaryText font-bold"/>
      <div className="flex flex-row w-full justify-center items-center gap-4 h-full">
        <div className="relative w-60 h-full">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="ค้นหา..."
            className="w-full py-3 pl-12 pr-4 text-sm text-primaryText border-2 border-thrBackground bg-primaryBackground rounded-full focus:outline-none focus:ring-2 focus:ring-thrBackground focus:border-thrBackground placeholder-secondaryText transition-colors duration-200"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-secondaryText">
            🔍
          </span>
        </div>
        <button
          className="flex flex-row items-center justify-center shadow-lg rounded-full py-2 px-6 bg-primaryText text-primaryBackground border-2 border-primaryText hover:bg-primaryBackground hover:text-primaryText hover:border-secondaryText transition-all duration-200"
          onClick={handleSearch}
        >
          ค้นหา
        </button>
      </div>
      <div className="container w-full min-h-screen overflow-y-auto p-6 rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
          transactionsData.map((transaction, index) => (
            <TransactionCard key={index} transaction={transaction["Transaction"]} user={transaction["User"]} vehicle={transaction["Vehicle"]} handleSetTransaction={handleSetTransaction}/>
          ))
        }
        </div>
      </div>
    </div>
    )}
    { openDetail && (
          <TransactionDetails transaction={transaction} user={user} vehicle={vehicle} setOpenDetail={setOpenDetail} setUpdateStatus={setUpdateStatus}/>
        )
    }
  </>
  );
}