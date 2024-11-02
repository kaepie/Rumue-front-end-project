import React from 'react';

const EmployeeInfo = () => {
  return (
    <div className="max-w-3xl p-6 bg-white border border-gray-300 rounded-md shadow-md">
      <h2 className="text-lg font-semibold text-gray-600 mb-4">ข้อมูลของพนักงาน</h2>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">รหัสประจำตัว :</span>
          <span className="font-semibold">12345678901234</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">ชื่อบัญชีผู้ใช้ :</span>
          <span className="font-semibold">lnwza0072535</span>
        </div>

        <div className="flex justify-between items-center">
          <label className="font-medium text-gray-600">รหัสผ่านปัจจุบัน :</label>
          <input
            type="password"
            placeholder="รหัสผ่านปัจจุบัน"
            className="border rounded px-2 py-1 text-sm w-48"
          />
        </div>

        <div className="flex justify-between items-center">
          <label className="font-medium text-gray-600">รหัสผ่านใหม่ :</label>
          <input
            type="password"
            placeholder="รหัสใหม่"
            className="border rounded px-2 py-1 text-sm w-48"
          />
        </div>

        <div className="flex justify-between items-center">
          <label className="font-medium text-gray-600">ยืนยันรหัสผ่านใหม่ :</label>
          <input
            type="password"
            placeholder="ยืนยันรหัสผ่านใหม่"
            className="border rounded px-2 py-1 text-sm w-48"
          />
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-600">ชื่อ :</span>
          <span className="font-semibold">นรสิงห์</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-600">นามสกุล :</span>
          <span className="font-semibold">หลานมา</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-600">หมายเลขโทรศัพท์ :</span>
          <span className="font-semibold">087-458-2315</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-600">ที่อยู่ :</span>
          <span className="font-semibold text-right">
            50 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร<br />
            กรุงเทพมหานคร 10900
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeInfo;