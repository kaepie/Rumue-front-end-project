'use client'
import ProfileCard from "@/app/components/ProfileCard";
import { useEffect, useState } from "react";
import { User } from "../interface/interface";

export default function Profile() {
    const [user, setUser] = useState<User>()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzA4NTAzOTgsImlkIjoiZTU3MzFmMWYtZTIwYS00Njc5LWEyMTYtMTIxODBlNDU5ODRiIiwicm9sZSI6InVzZXIifQ.VrJgrer0P0VS-dMJfF39_JF2jJPwQMBUovjY8WY5wXk";
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
            <ProfileCard user={user}/>
        </div>
    );
}
