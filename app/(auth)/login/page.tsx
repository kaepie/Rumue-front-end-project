"use client";
import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSession, signIn, useSession } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [handleError, sethandleError] = useState({
    errorContent: "",
    errorBoolean: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      email.trim();
      password.trim();
      const validEmail = new RegExp(
        "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$",
      );
      const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{4,}$");
      if (!validEmail.test(email) || !validPassword.test(password)) {
        sethandleError({
          errorContent: "กรุณากรอกข้อมูลให้ถูกต้อง",
          errorBoolean: true,
        });
      } else {
        const result = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });

        if (result?.error) {
          sethandleError({
            errorContent: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
            errorBoolean: true,
          });
        } else {
          const session = await getSession();

          if (session?.user.role === "employee") {
            router.push("/homeEmployee");
          } else {
            router.push("/home");
          }
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center py-32 px-4 sm:px-16 md:px-40 lg:px-64 xl:px-96">
      <div className="flex p-6 sm:p-8 lg:p-10 w-full max-w-lg rounded-3xl border-border border-2 bg-primaryBackground">
        <div className="flex flex-col w-full h-full gap-8">
          <div className="flex flex-row justify-start">
              <button onClick={() => router.back()}>
                  <span className="text-primaryText underline"> ย้อนกลับ </span>
              </button>
          </div>
          <div className="w-full">
            <h1 className="text-lg sm:text-xl text-primaryText">เข้าสู่ระบบ</h1>
          </div>
          <form className="flex flex-col h-full justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-primaryText">Email</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                    sethandleError({ errorContent: "", errorBoolean: false });
                  }}
                  value={email}
                  type="email"
                  required
                  placeholder="Email"
                  className="border-[1px] border-border rounded-md p-2 text-primaryText placeholder-secondaryText focus:outline-none focus:border-primary focus:ring-0 transition duration-200 ease-in-out hover:shadow-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-primaryText">Password</label>
                <div className="relative">
                  <input
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                      sethandleError({ errorContent: "", errorBoolean: false });
                    }}
                    value={password}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="border-[1px] border-border rounded-md p-2 text-primaryText placeholder-secondaryText focus:outline-none focus:border-primary focus:ring-0 transition duration-200 ease-in-out hover:shadow-md w-full"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-2.5 text-primaryText text-sm"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-28">
              {handleError.errorBoolean && (
                <div className="flex justify-center items-center h-10 w-full rounded-lg border-red-700 border-2 bg-red-500">
                  <p className="text-white">{handleError.errorContent}</p>
                </div>
              )}
            </div>
            <button
              onClick={handleSubmit}
              className="flex justify-center mt-4 bg-primaryButton text-white rounded-md p-2 w-full"
            >
              Login
            </button>
          </form>
          <div className="flex justify-center gap-4 items-center">
            <div className="h-0.5 bg-border w-full opacity-50"></div>
            <div className="text-border">or</div>
            <div className="h-0.5 bg-border w-full opacity-50"></div>
          </div>

          {/* Register text */}
          <div className="flex justify-center gap-2">
            <p className="text-primaryButton text-center">ยังไม่มีบัญชี?</p>
            <Link
              href="/register"
              className="text-primaryButton text-center underline"
            >
              สมัครสมาชิก
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
