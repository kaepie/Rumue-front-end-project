'use client';

import Link from "next/link";
import { useSession } from "next-auth/react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const EmployeeHeader = () => {
  const { data: session, status } = useSession();
  const currentPath = usePathname();

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <header className="py-4 px-6 bg-primaryBackground shadow-md sticky">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-primaryText text-center">By Yourself</Link>
        <nav className="">
          <ul className="flex space-x-4 items-center text-primaryText">
            <motion.li whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}>
              <Link href="/home" className={`relative hover:hover-link ${isActive("/home") ? "active-link" : ""}`}>
                หน้าแรก
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}>
              <Link href="/employeeProfile" className={`relative ${isActive("/employeeProfile") ? "active-link" : ""} hover:hover-link`}>
                โปรไฟล์ของพนักงาน
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}>
              <Link href="/orderHistory" className={`relative ${isActive("/orderHistory") ? "active-link" : ""} hover:hover-link`}>
                ประวัติรายการที่จัดการ
              </Link>
            </motion.li>
            {/* {session && ( */}
              <>
                <li>
                  <LogoutButton />
                </li>
              </>
            {/* )} */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default EmployeeHeader;
