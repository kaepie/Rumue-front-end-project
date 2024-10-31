"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Header = () => {
  const { data: session, status } = useSession();
  const currentPath = usePathname();

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <header className="py-4 px-6 bg-primaryBackground shadow-md sticky">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-primaryText text-center">
          {" "}
          By Yourself
        </Link>
        <nav className="">
          <ul className="flex space-x-4 items-center text-primaryText">
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <Link href="/home" className={`relative hover:hover-link`}>
                หน้าแรก
              </Link>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <Link
                href="/checkPrice"
                className={`relative ${isActive("/checkPrice") ? "active-link" : ""} hover:hover-link`}
              >
                เช็คราคา
              </Link>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <Link
                href="/history"
                className={`relative ${isActive("/history") ? "active-link" : ""} hover:hover-link`}
              >
                ประวัติ
              </Link>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <Link
                href="/contact"
                className={`relative ${isActive("/contact") ? "active-link" : ""} hover:hover-link`}
              >
                ติดต่อ
              </Link>
            </motion.li>
            {!session && status === "unauthenticated" && (
              <>
                <motion.li
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                >
                  <Link
                    href="/register"
                    className={`relative ${isActive("/register") ? "active-link" : ""} hover:hover-link`}
                  >
                    สมัครสมาชิก
                  </Link>
                </motion.li>
                <li>
                  <LoginButton />
                </li>
              </>
            )}
            {session && (
              <>
                <li>
                  <Link href="/profile" className="relative">
                    โปรไฟล์
                  </Link>
                </li>
                <li>
                  <LogoutButton />
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
