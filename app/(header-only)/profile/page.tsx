'use client'
import ProfileCard from "@/app/components/ProfileCard";
import { useEffect, useState } from "react";
import { User } from "../interface/interface";
import { useSession } from "next-auth/react";

export default function Profile() {
    const [user, setUser] = useState<User>()
    const { data: session } = useSession();
    const [onClickUpdate, setOnclickUpdate] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = session?.user.token;
                const response = await fetch(`http://localhost:3001/user/id`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setUser(data);
            } catch (e) {
                console.error("Error fetching data:", e);
            }
        };

        fetchData();

    }, []);

    return (
        <div className="flex items-center justify-center h-screen">
            <ProfileCard user={user} setOnclickUpdate={setOnclickUpdate} />
        </div>
    );
}
