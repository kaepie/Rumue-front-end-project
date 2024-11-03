"use client"
import { delay, } from "framer-motion";
import { MouseEventHandler, useState } from "react";
import RegisterSection from "./RegisterSection";
import ImportantUserInfoSection from "./ImportantUserInfoSection";
import { Dayjs } from "dayjs";
import { useRouter } from 'next/navigation';

interface PopupProps {
  message: string
  onClose: MouseEventHandler<HTMLButtonElement> | undefined
}

export default function Signup() {
  const router = useRouter();

  //  RegisterSection Value
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [handleError, sethandleError] = useState({
    errorContent: "",
    errorBoolean: false,
  });
  const [serverError, setServerError] = useState("");
  const [createSuccess, setCreateSuccess] = useState("");
  const [leawtae, setLeawtae] = useState(false);
  //  RegisterSection Value
  const [fname, setFName] = useState("")
  const [lname, setLName] = useState("")
  const [citizenID, setCitizenID] = useState("")
  const [nationality, setNationality] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [number, setNumber] = useState("") //Home Number
  const [valley, setValley] = useState("")
  const [soi, setSoi] = useState("")
  const [route, setRoute] = useState("")
  const [province, setProvince] = useState("")
  const [district, setDistrict] = useState("")
  const [subDistrict, setSubDistrict] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [date, setDate] = useState<Dayjs | null | undefined>(null)

  function ErrorPopup({ message, onClose }: PopupProps) {
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-md text-center">
          <p className="text-red-600">{message}</p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  function SuccessPopup({ message, onClose }: PopupProps) {
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-md text-center">
          <p className="text-green-600">{message}</p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  }


  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    try {
      email.trim()
      password.trim()
      confirmPassword.trim()
      const validEmail = new RegExp(
        "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$",
      );
      const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{4,}$");
      if (!validEmail.test(email)) {
        sethandleError({
          errorContent: "email is not valid",
          errorBoolean: true,
        });
        throw Error("email is not valid")
      }

      if (!validPassword.test(password)) {
        sethandleError({
          errorContent: "password is not valid",
          errorBoolean: true,
        })
        throw Error("password is not valid")
      }

      if (!(password === confirmPassword)) {
        sethandleError({
          errorContent: "password and confirm password not match!!!",
          errorBoolean: true,
        })
        throw Error("password and confirm password not match!!!")
      }
      setLeawtae(true)
    }
    catch (e) {
      console.log(e)
    }
  }

  async function handleSubmit2(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const errors: string[] = [];
    try {
      // Trim all inputs
      const trimmedData = {
        fname: fname.trim(),
        lname: lname.trim(),
        phoneNumber: phoneNumber.trim(),
        number: number.trim(),
        valley: valley.trim(),
        soi: soi.trim(),
        route: route.trim(),
        province: province.trim(),
        district: district.trim(),
        subDistrict: subDistrict.trim(),
        postalCode: postalCode.trim(),
        date,
      };

      // Validate required fields
      if (!trimmedData.fname) errors.push("First name is required.");
      if (!trimmedData.lname) errors.push("Last name is required.");
      if (!trimmedData.phoneNumber) errors.push("Phone number is required.");
      if (!trimmedData.number) errors.push("Home number is required.");
      if (!trimmedData.valley) errors.push("Valley is required.");
      if (!trimmedData.soi) errors.push("Soi is required.");
      if (!trimmedData.route) errors.push("Route is required.");
      if (!trimmedData.province) errors.push("Province is required.");
      if (!trimmedData.district) errors.push("District is required.");
      if (!trimmedData.subDistrict) errors.push("Sub-district is required.");
      if (!trimmedData.postalCode) errors.push("Postal code is required.");
      if (!trimmedData.date) errors.push("Date of birth is required.");

      // Validate phone number format
      const validPhone = new RegExp("^[0-9]{10}$"); // Adjust for your format
      if (!validPhone.test(trimmedData.phoneNumber)) {
        errors.push("Phone number is not valid. It should be 10 digits.");
      }

      // Handle error display if validation fails
      if (errors.length > 0) {
        sethandleError({
          errorContent: errors.join(" "),
          errorBoolean: true,
        });
        return;
      }

      // Send data to API
      const res = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          fname: trimmedData.fname,
          lname: trimmedData.lname,
          password,
          phoneNumber: trimmedData.phoneNumber,
          address: `${trimmedData.number}| ${trimmedData.valley}| ${trimmedData.soi}| ${trimmedData.route}| ${trimmedData.province}| ${trimmedData.district}| ${trimmedData.subDistrict}| ${trimmedData.postalCode}`,
          nationality,
          birthDate: trimmedData.date,
          citizenID,
        }),
      });

      // Handle server responses
      if (!res.ok) {
        if (res.status === 500) {
          const data = await res.json();
          setServerError(data.error || "Internal Server Error");
        }
        throw new Error("Registration failed");
      }

      const data = await res.json();
      if (data.message) {
        console.log("Registration success:", data.message);
        setCreateSuccess(data.message);
        delay(() => {
          router.push("/");
        }, 5000);
      } else if (data.error) {
        console.log("Server error:", data.error);
      }
    } catch (e) {
      console.log(e);
      sethandleError({
        errorContent: "An error occurred during registration",
        errorBoolean: true,
      });
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-40 h-auto w-screen bg-primaryBackground py-20" >
      <RegisterSection email={email} setEmail={setEmail} password={password} setPassword={setPassword} setConfirmPassword={setConfirmPassword} handleSubmit={handleSubmit} sethandleError={sethandleError} handleError={handleError} confirmPassword={confirmPassword} />
      {leawtae && (<ImportantUserInfoSection fname={fname} lname={lname} phoneNumber={phoneNumber} number={number} valley={valley}
        soi={soi} route={route} province={province} district={district} subDistrict={subDistrict} postalCode={postalCode} date={date}
        citizenID={citizenID} nationality={nationality} handleSubmit={handleSubmit2} handleError={handleError} setNationality={setNationality} setCitizenID={setCitizenID} setLname={setLName} setFname={setFName} setDate={setDate} setPostalCode={setPostalCode} setSubDistrict={setSubDistrict} setDistrict={setDistrict} setProvince={setProvince} setRoute={setRoute} setSoi={setSoi} setValley={setValley} setNumber={setNumber} setPhoneNumber={setPhoneNumber} sethandleError={sethandleError} />)}
      {serverError && (
        <ErrorPopup
          message={serverError}
          onClose={() => setServerError("")} />
      )}
      {createSuccess && (
        <SuccessPopup
          message={createSuccess}
          onClose={() => setCreateSuccess("")} />
      )}
    </div>
  );
}
