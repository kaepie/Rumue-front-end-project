import ProfileCard from "@/app/components/ProfileCard";

export default function Profile() {
    return (
        <div className="flex items-center justify-center h-screen">
            <ProfileCard
                email="jane.doe@example.com"
                firstName="Jane"
                lastName="Doe"
                phone="09x-xxx-xxxx"
                address="123 Main St, Bangkok"
                nationality="ไทย"
                birthDate="15/07/1995"
                citizenId="1234567890123"
            />
        </div>
    );
}
