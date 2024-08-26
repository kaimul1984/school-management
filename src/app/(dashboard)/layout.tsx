import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen flex p-4">
      <div className="w-[14%] md-[8%] lg:w-[16%] xl:w-[14%] ">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 "
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">KaimulSchool</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </section>
  );
}
