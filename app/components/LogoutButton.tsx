import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton(){
    const router = useRouter();

    return (
        <form
          action={async () => {
            await signOut()
            router.push('/login')
          }}
        >
          <button type="submit" className="bg-primaryText text-white rounded-3xl p-3 border-2 border-primaryBackground hover:bg-primaryBackground hover:text-primaryText hover:border-2 hover:border-primaryText">ออกจากระบบ </button>
        </form>
      )
}
