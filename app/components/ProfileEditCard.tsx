'use client'
import { CircleX } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

function ProfileEditCard(props: any) {
    const defaultFname = props.Fname
    const defaultLname = props.Lname
    const defaultCitizenID = props.CitizenID
    const defaultNationlity = props.Nationality
    const defaultPhone = props.PhoneNumber
    const defaultAddress = props.Address
    const defaultBirth: string = props.BirthDate

    const [fname, setFname] = useState(props.Fname)
    const [lname, setLname] = useState(props.Lname)
    const [citizenID, setCitizenID] = useState(props.CitizenID)
    const [nationlity, setNationality] = useState(props.Nationality)
    const [phone, setPhone] = useState(props.PhoneNumber)
    const [address, setAddress] = useState("")
    const [birth, setBirth] = useState("")
    const [houseNumber, setHouseNumber] = useState("")
    const [valley, setValley] = useState("")
    const [soi, setSoi] = useState("")
    const [route, setRoute] = useState("")
    const [province, setProvince] = useState("")
    const [district, setDistrict] = useState("")
    const [subDistrict, setSubDistrict] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [handleError, sethandleError] = useState({
        errorContent: "",
        errorBoolean: false,
    });

    const { data: session } = useSession();

    useEffect(() => {
        setBirth(defaultBirth.split("T")[0])
        const newAddress = defaultAddress + ""
        const splitedAddress: Array<string> = newAddress.split("|")
        setHouseNumber(splitedAddress[0].trim())
        setValley(splitedAddress[1].trim())
        setSoi(splitedAddress[2].trim())
        setRoute(splitedAddress[3].trim())
        setProvince(splitedAddress[4].trim())
        setDistrict(splitedAddress[5].trim())
        setSubDistrict(splitedAddress[6].trim())
        setPostalCode(splitedAddress[7].trim())
    }, [defaultAddress, defaultBirth])

    const handleSubmit = async () => {
        setAddress(`${houseNumber}| ${valley}| ${soi}| ${route}| ${province}| ${district}| ${subDistrict}| ${postalCode}`)
        // add address part together here
        if (fname === defaultFname && lname === defaultLname && citizenID === defaultCitizenID && nationlity === defaultNationlity && phone === defaultPhone && address === defaultAddress && birth === defaultBirth) {
            console.log(true)
            sethandleError({ errorContent: "Anything dont change", errorBoolean: true });
            // set error text to User
        }

        const errors: string[] = [];
        // Trim all inputs
        const trimmedData = {
            fname: fname.trim(),
            lname: lname.trim(),
            phoneNumber: phone.trim(),
            number: houseNumber.trim(),
            valley: valley.trim(),
            soi: soi.trim(),
            route: route.trim(),
            province: province.trim(),
            district: district.trim(),
            subDistrict: subDistrict.trim(),
            postalCode: postalCode.trim(),
            birth,
            nationlity: nationlity.trim(),
            citizenID: citizenID.trim(),
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
        try {
            const token = session?.user.token
            if (!token) {
                return
            }
            const response = await fetch(`http://localhost:3001/user/update`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    fname: trimmedData.fname,
                    lname: trimmedData.lname,
                    phoneNumber: trimmedData.phoneNumber,
                    address: `${trimmedData.number}| ${trimmedData.valley}| ${trimmedData.soi}| ${trimmedData.route}| ${trimmedData.province}| ${trimmedData.district}| ${trimmedData.subDistrict}| ${trimmedData.postalCode}`,
                    nationality: trimmedData.nationlity,
                    birthDate: new Date(birth).toISOString(),
                    citizenID: trimmedData.citizenID
                }),
            });
            if (response.ok) {
                props.setOnclickUpdate(true)
                props.setOnClickEditDetail(false)
            }
        } catch (e) {
            sethandleError({
                errorContent: e + ""
                , errorBoolean: true
            });
        }
    }

    return (
        <div className="flex flex-col px-10 py-16 rounded-xl shadow-xl bg-primaryBackground container overflow-x-auto">
            <div className='flex justify-end text-primaryText'>
                <CircleX size={30} className='text-primaryButton cursor-pointer hover:text-primaryButtonHover hover:scale-110 duration-300 ease-in-out' onClick={props.onClickEdit} />
            </div>
            <p className="text-[32px] text-primaryText">แก้ไข - ข้อมูลส่วนตัว</p>
            <div className="my-[60px] space-y-3">
                <div className="flex flex-col lg:flex-row gap-3 text-primaryText">
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">ชื่อจริง</p>
                        <input type="text" placeholder="ชื่อจริง" value={fname} className="py-4 px-2 rounded-md border-2 border-primaryText"
                            onChange={(e) => {
                                setFname(e.target.value)
                                sethandleError({ errorContent: "", errorBoolean: false });
                            }}></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">นามสกุล</p>
                        <input type="text" placeholder="นามสกุล" value={lname} className="py-4 px-2 rounded-md border-2 border-primaryText"
                            onChange={(e) => {
                                setLname(e.target.value)
                                sethandleError({ errorContent: "", errorBoolean: false });
                            }}></input>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 text-primaryText">
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">รหัสประจำตัวประชาชน</p>
                        <input type="text" placeholder="รหัสประจำตัวประชาชน" value={citizenID} className="py-4 px-2 rounded-md border-2 border-primaryText" onChange={(e) => {
                            setCitizenID(e.target.value)
                            sethandleError({ errorContent: "", errorBoolean: false });
                        }}></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">สัญชาติ</p>
                        <input type="text" placeholder="สัญชาติ" value={nationlity} className="py-4 px-2 rounded-md border-2 border-primaryText"
                            onChange={(e) => {
                                setNationality(e.target.value)
                                sethandleError({ errorContent: "", errorBoolean: false });
                            }}></input>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 text-primaryText">
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">เบอร์โทรศัพท์</p>
                        <input type="text" placeholder="เบอร์โทรศัพท์" value={phone} className="py-4 px-2 rounded-md border-2 border-primaryText" onChange={(e) => {
                            setPhone(e.target.value)
                            sethandleError({ errorContent: "", errorBoolean: false });
                        }}></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">บ้านเลขที่</p>
                        <input type="text" placeholder="บ้านเลขที่" className="py-4 px-2 rounded-md border-2 border-primaryText" value={houseNumber} onChange={(e) => {
                            setHouseNumber(e.target.value)
                            sethandleError({ errorContent: "", errorBoolean: false });
                        }}></input>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-[24px]">หมู่</p>
                        <input type="text" placeholder=">หมู่" className="py-4 px-2 rounded-md border-2 border-primaryText" value={valley}
                            onChange={(e) => {
                                setValley(e.target.value)
                                sethandleError({ errorContent: "", errorBoolean: false });
                            }}></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">ซอย</p>
                        <input type="text" placeholder="ซอย" className="py-4 px-2 rounded-md border-2 border-primaryText" value={soi}
                            onChange={(e) => {
                                setSoi(e.target.value)
                                sethandleError({ errorContent: "", errorBoolean: false });
                            }}></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">ถนน</p>
                        <input type="text" placeholder="ถนน" className="py-4 px-2 rounded-md border-2 border-primaryText" value={route}
                            onChange={(e) => {
                                setRoute(e.target.value)
                                sethandleError({ errorContent: "", errorBoolean: false });
                            }}></input>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 text-primaryText">
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">จังหวัด</p>
                        <input type="text" placeholder="จังหวัด" className="py-4 px-2 rounded-md border-2 border-primaryText" value={province}
                            onChange={(e) => {
                                setProvince(e.target.value)
                                sethandleError({ errorContent: "", errorBoolean: false });
                            }}></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">อำเภอ/เขต</p>
                        <input type="text" placeholder="อำเภอ/เขต" className="py-4 px-2 rounded-md border-2 border-primaryText" value={district} onChange={(e) => {
                            setDistrict(e.target.value)
                            sethandleError({ errorContent: "", errorBoolean: false });
                        }}></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">ตำบล/แขวง</p>
                        <input type="text" placeholder="ตำบล/แขวง" className="py-4 px-2 rounded-md border-2 border-primaryText" value={subDistrict} onChange={(e) => {
                            setSubDistrict(e.target.value)
                            sethandleError({ errorContent: "", errorBoolean: false });
                        }}></input>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-[24px]">รหัสไปษณีย์</p>
                        <input type="text" placeholder="รหัสไปษณีย์" className="py-4 px-2 rounded-md border-2 border-primaryText" value={postalCode} onChange={(e) => {
                            setPostalCode(e.target.value)
                            sethandleError({ errorContent: "", errorBoolean: false });
                        }}></input>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 text-primaryText">
                    <div className="flex-col gap-3 inline-block">
                        <p className="text-[24px]">วันเกิด</p>
                        <input type="date" className="py-4 px-4 rounded-md border-2 border-primaryText" value={birth}></input>
                    </div>
                </div>
            </div>
            {/* Error Message */}
            {handleError.errorBoolean && (
                <div className="flex justify-center items-center h-auto w-full max-w-full rounded-lg border-red-700 border-2 bg-red-500 mt-8 p-2 sm:p-4">
                    <p className="text-white text-center break-words text-sm sm:text-base lg:text-lg">
                        {handleError.errorContent}
                    </p>
                </div>
            )}
            <div className="mt-6 flex space-x-4 items-center justify-center text-[22px]">
                <button className="px-6 py-2 rounded-lg text-white bg-primaryButton hover:bg-primaryButtonHover cursor-pointer" onClick={handleSubmit}>ยืนยัน</button>
            </div>
        </div>
    );

}
export default ProfileEditCard;
