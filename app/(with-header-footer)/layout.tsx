import RootLayout from "@/app/layout";
import Footer from "../components/Footer";
import Header from "../components/header";
import "../globals.css";

export default async function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  
    return (
      <RootLayout>
        <Header />
          {children}
        <Footer />
      </RootLayout>
    );
  }
  