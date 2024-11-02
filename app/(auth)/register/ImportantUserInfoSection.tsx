'use client';

import ParagraphAnimation from "@/app/components/ParagraphAnimation";
import TextTitleAnimation from "@/app/components/TextTitleAnimation";
import { Dispatch, FormEventHandler, SetStateAction } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { Dayjs } from "dayjs";
interface ImportantUserInfoSectionProps {
  fname: string
  lname: string
  phoneNumber: string
  number: string
  valley: string
  soi: string
  route: string
  province: string
  district: string
  subDistrict: string
  postalCode: string
  nationality: string
  citizenID: string
  date: Dayjs | null | undefined
  handleError: {
    errorContent: string,
    errorBoolean: boolean,
  }
  sethandleError: Dispatch<SetStateAction<{
    errorContent: string;
    errorBoolean: boolean;
  }>>
  setFname: Dispatch<SetStateAction<string>>
  setLname: Dispatch<SetStateAction<string>>
  setPhoneNumber: Dispatch<SetStateAction<string>>
  setNumber: Dispatch<SetStateAction<string>>
  setValley: Dispatch<SetStateAction<string>>
  setSoi: Dispatch<SetStateAction<string>>
  setRoute: Dispatch<SetStateAction<string>>
  setProvince: Dispatch<SetStateAction<string>>
  setDistrict: Dispatch<SetStateAction<string>>
  setSubDistrict: Dispatch<SetStateAction<string>>
  setPostalCode: Dispatch<SetStateAction<string>>
  setCitizenID: Dispatch<SetStateAction<string>>
  setNationality: Dispatch<SetStateAction<string>>
  setDate: Dispatch<SetStateAction<Dayjs | undefined | null>>
  handleSubmit: FormEventHandler<HTMLFormElement>
}

export default function ImportantUserInfoSection(ImportantUserInfoSection: ImportantUserInfoSectionProps) {


  return (
    <div className="flex flex-col container h-auto bg-white border-2 border-border rounded-xl p-20">
      <TextTitleAnimation content="ข้อมูลที่สำคัญ" className=" text-3xl text-thridText" />
      <div className="flex-row flex gap-2">
        <ParagraphAnimation content="หมายเหตุ -  ควรใส่ข้อมูลที่ถูกต้องและเป็นข้อมูลจริง" className="text-primaryText" />
      </div>

      <form onSubmit={ImportantUserInfoSection.handleSubmit} className="flex flex-col h-full">
        <div className="flex flex-col gap-4">
          {/* Fname */}
          <div className="flex flex-row gap-2">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-primaryText">ชื่อ</label>
              <input
                onChange={(e) => {
                  ImportantUserInfoSection.setFname(e.target.value)
                  ImportantUserInfoSection.sethandleError({ errorContent: "", errorBoolean: false });
                }}
                value={ImportantUserInfoSection.fname}
                type="text"
                required
                placeholder="ชื่อ"
                className="border-2 border-border rounded-md p-2 placeholder-secondaryText w-full"
              />
            </div>

            {/* Lname */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-primaryText">นามสกุล</label>
              <input
                onChange={(e) => {
                  ImportantUserInfoSection.setLname(e.target.value)
                  ImportantUserInfoSection.sethandleError({ errorContent: "", errorBoolean: false });
                }}
                value={ImportantUserInfoSection.lname}
                type="text"
                required
                placeholder="นามสกุล"
                className="border-2 border-border rounded-md p-2 placeholder-secondaryText"
              />
            </div>
          </div>
          {/* CitizenID */}
          <div className="flex flex-row gap-2" >
            <div className="flex flex-col gap-2 w-full">
              <label className="text-primaryText">รหัสประจำตัวประชาชน</label>
              <input
                onChange={(e) => {
                  ImportantUserInfoSection.setCitizenID(e.target.value);
                  ImportantUserInfoSection.sethandleError({ errorContent: "", errorBoolean: false });
                }}
                value={ImportantUserInfoSection.citizenID}
                type="text"
                required
                placeholder="รหัสประจำตัวประชาชน"
                className="border-2 border-border rounded-md p-2 placeholder-secondaryText"
              />
            </div>

            {/* Nationality */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-primaryText">สัญชาติ</label>
              <input
                onChange={(e) => {
                  ImportantUserInfoSection.setNationality(e.target.value);
                  ImportantUserInfoSection.sethandleError({ errorContent: "", errorBoolean: false });
                }}
                value={ImportantUserInfoSection.nationality}
                type="text"
                required
                placeholder="สัญชาติ"
                className="border-2 border-border rounded-md p-2 placeholder-secondaryText"
              />
            </div>
          </div>

          <div className="flex flex-row gap-2">
            {/* Phonumber */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-primaryText">เบอร์โทรศัพท์</label>
              <input
                onChange={(e) => {
                  ImportantUserInfoSection.setPhoneNumber(e.target.value);
                  ImportantUserInfoSection.sethandleError({ errorContent: "", errorBoolean: false });
                }}
                value={ImportantUserInfoSection.phoneNumber}
                type="text"
                required
                placeholder="เบอร์โทรศััพท์"
                className="border-2 border-border rounded-md p-2 placeholder-secondaryText"
              />
            </div>

            {/* HouseNumber */}
            <div className="flex flex-col gap-2">
              <label className="text-primaryText">บ้านเลขที่</label>
              <input
                onChange={(e) => {
                  ImportantUserInfoSection.setNumber(e.target.value);
                  ImportantUserInfoSection.sethandleError({ errorContent: "", errorBoolean: false });
                }}
                value={ImportantUserInfoSection.number}
                type="text"
                required
                placeholder="บ้านเลขที่"
                className="border-2 border-border rounded-md p-2 placeholder-secondaryText"
              />
            </div>

            {/* valley */}
            <div className="flex flex-col gap-2">
              <label className="text-primaryText">หมู่</label>
              <input
                onChange={(e) => {
                  ImportantUserInfoSection.setValley(e.target.value);
                  ImportantUserInfoSection.sethandleError({ errorContent: "", errorBoolean: false });
                }}
                value={ImportantUserInfoSection.valley}
                type="text"
                required
                placeholder="หมู่"
                className="border-2 border-border rounded-md p-2 placeholder-secondaryText"
              />
            </div>

            {/* soi */}
            <div className="flex flex-col gap-2">
              <label className="text-primaryText">ซอย</label>
              <input
                onChange={(e) => {
                  ImportantUserInfoSection.setSoi(e.target.value);
                  ImportantUserInfoSection.sethandleError({ errorContent: "", errorBoolean: false });
                }}
                value={ImportantUserInfoSection.soi}
                type="text"
                required
                placeholder="ซอย"
                className="border-2 border-border rounded-md p-2 placeholder-secondaryText"
              />
            </div>

            {/* route */}
            <div className="flex flex-col gap-2">
              <label className="text-primaryText">ถนน</label>
              <input
                onChange={(e) => {
                  ImportantUserInfoSection.setRoute(e.target.value);
                  ImportantUserInfoSection.sethandleError({ errorContent: "", errorBoolean: false });
                }}
                value={ImportantUserInfoSection.route}
                type="text"
                required
                placeholder="ถนน"
                className="border-2 border-border rounded-md p-2 placeholder-secondaryText"
              />
            </div>
          </div>
          {/* row 4 */}
          <div className="flex flex-row gap-2">
            {/* Province */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-primaryText">จังหวัด</label>
              <input
                onChange={(e) => {
                  ImportantUserInfoSection.setProvince(e.target.value);
                  ImportantUserInfoSection.sethandleError({ errorContent: "", errorBoolean: false });
                }}
                value={ImportantUserInfoSection.province}
                type="text"
                required
                placeholder="จังหวัด"
                className="border-2 border-border rounded-md p-2 placeholder-secondaryText"
              />
            </div>

            {/* District */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-primaryText">อำเภอ/เขต</label>
              <input
                onChange={(e) => {
                  ImportantUserInfoSection.setDistrict(e.target.value);
                  ImportantUserInfoSection.sethandleError({ errorContent: "", errorBoolean: false });
                }}
                value={ImportantUserInfoSection.district}
                type="text"
                required
                placeholder="อำเภอ/เขต"
                className="border-2 border-border rounded-md p-2 placeholder-secondaryText"
              />
            </div>

            {/* SubDistrict */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-primaryText">ตำบล/แขวง</label>
              <input
                onChange={(e) => {
                  ImportantUserInfoSection.setSubDistrict(e.target.value);
                  ImportantUserInfoSection.sethandleError({ errorContent: "", errorBoolean: false });
                }}
                value={ImportantUserInfoSection.subDistrict}
                type="text"
                required
                placeholder="ตำบล/แขวง"
                className="border-2 border-border rounded-md p-2 placeholder-secondaryText"
              />
            </div>

            {/* PostalCode */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-primaryText">รหัสไปษณีย์</label>
              <input
                onChange={(e) => {
                  ImportantUserInfoSection.setPostalCode(e.target.value);
                  ImportantUserInfoSection.sethandleError({ errorContent: "", errorBoolean: false });
                }}
                value={ImportantUserInfoSection.postalCode}
                type="text"
                required
                placeholder="รหัสไปษณีย์"
                className="border-2 border-border rounded-md p-2 placeholder-secondaryText"
              />
            </div>
          </div>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                label="วันเกิด"
                value={ImportantUserInfoSection.date}
                onChange={(newValue) => ImportantUserInfoSection.setDate(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      '& .MuiInputBase-root': {
                        color: '#fffefc !important', // Text color
                        backgroundColor: '#f0f0f0', // Background color
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#fffefc', // Border color
                      },
                      '& .MuiSvgIcon-root': {
                        color: 'secondary.main', // Calendar icon color
                      },
                    }}
                  />
                )}
              />
            </DemoContainer>
          </LocalizationProvider>
          {/* Error Message */}
          {ImportantUserInfoSection.handleError.errorBoolean && (
            <div className="flex justify-center items-center h-auto w-full max-w-full rounded-lg border-red-700 border-2 bg-red-500 mt-8 p-2 sm:p-4">
              <p className="text-white text-center break-words text-sm sm:text-base lg:text-lg">
                {ImportantUserInfoSection.handleError.errorContent}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit" // Note: Set type="submit" for the button
            className="flex justify-center mt-4 bg-primaryButton text-white rounded-md p-2 w-full"
          >
            ยืนยัน
          </button>
        </div>
      </form>
    </div>
  );
}
