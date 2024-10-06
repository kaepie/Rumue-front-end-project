"use client";

import { useEffect } from "react";
import "../../globals.css";
import { usePathname } from "next/navigation";
import VehicleProgressBar from "./VehicleProgressBar";

export default async function transitionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const currentPath = usePathname();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, [currentPath]);

    return (
        <div className="flex flex-col justify-center items-center h-auto w-screen">
            <VehicleProgressBar currentPath={currentPath}/>
            {children}
        </div>
);
}
