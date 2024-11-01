import ChangePasswordButton from "@/app/components/ChangePassword";
import EmployeeInfo from "@/app/components/EmployeeInfo";

const employeeInfo = () => {
    

    return (
        <div className="flex flex-col items-center p-24">
            <EmployeeInfo />
            <div className="flex flex-col mt-4">
                <ChangePasswordButton />
            </div>
        </div>
    );
}
export default employeeInfo;