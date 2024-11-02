import ParagraphAnimation from "@/app/components/ParagraphAnimation";
import TextTitleAnimation from "@/app/components/TextTitleAnimation";
import Link from "next/link";
import { Dispatch, FormEventHandler, SetStateAction, } from "react";

interface RegisterSectionProps {
  email: string
  password: string
  confirmPassword: string
  handleError: {
    errorContent: string,
    errorBoolean: boolean,
  }
  sethandleError: Dispatch<SetStateAction<{
    errorContent: string;
    errorBoolean: boolean;
  }>>
  setConfirmPassword: Dispatch<SetStateAction<string>>
  setPassword: Dispatch<SetStateAction<string>>
  setEmail: Dispatch<SetStateAction<string>>
  handleSubmit: FormEventHandler<HTMLFormElement>
}

export default function RegisterSection(registerSection: RegisterSectionProps) {

  return (
    <div className="flex flex-col container h-auto bg-white border-2 border-border rounded-xl p-20">
      {/*Create Account*/}
      <TextTitleAnimation content="สร้างบัญชี" className=" text-3xl text-thridText" />
      <div className="flex-row flex gap-2">
        <ParagraphAnimation content="มีบัญชีอยู่แล้วใช่ไหม?" className="text-primaryText" />
        <Link href={"/login"}
          className="underline text-secondaryText"
        >เข้าสู่ระบบ</Link>
      </div>
      {/*Text Area for Create Account*/}

      <form onSubmit={registerSection.handleSubmit} className="flex flex-col h-full">
        <div className="flex flex-col gap-4">
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-primaryText">อีเมล</label>
            <input
              onChange={(e) => {
                registerSection.setEmail(e.target.value);
                registerSection.sethandleError({ errorContent: "", errorBoolean: false });
              }}
              value={registerSection.email}
              type="email"
              required
              placeholder="อีเมล"
              className="border-2 border-border rounded-md p-2 placeholder-secondaryText"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <label className="text-primaryText">รหัสผ่าน</label>
            <input
              onChange={(e) => {
                registerSection.setPassword(e.target.value);
                registerSection.sethandleError({ errorContent: "", errorBoolean: false });
              }}
              value={registerSection.password}
              type="password"
              required
              placeholder="รหัสผ่าน"
              className="border-2 border-border rounded-md p-2 placeholder-secondaryText"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="flex flex-col gap-2">
            <label className="text-primaryText">ยืนยันรหัสผ่าน</label>
            <input
              onChange={(e) => {
                registerSection.setConfirmPassword(e.target.value);
                registerSection.sethandleError({ errorContent: "", errorBoolean: false });
              }}
              value={registerSection.confirmPassword}
              type="password"
              required
              placeholder="ยืนยันรหัสผ่าน"
              className="border-2 border-border rounded-md p-2 placeholder-secondaryText"
            />
          </div>
        </div>

        {/* Error Message */}
        {registerSection.handleError.errorBoolean && (
          <div className="flex justify-center items-center h-auto w-full max-w-full rounded-lg border-red-700 border-2 bg-red-500 mt-8 p-2 sm:p-4">
            <p className="text-white text-center break-words text-sm sm:text-base lg:text-lg">
              {registerSection.handleError.errorContent}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit" // Note: Set type="submit" for the button
          className="flex justify-center mt-4 bg-primaryButton text-white rounded-md p-2 w-full"
        >
          ถัดไป
        </button>
      </form>
    </div >
  )
}
