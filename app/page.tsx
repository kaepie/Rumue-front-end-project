'use client';

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  router.push("/home");
  return (
    <>
    </>
  );
};

export default Home;
