import Image from "next/image";
import EmployeeCard from "./components/EmployeeCard";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-[32px] items-center justify-center sm:items-start mt-6 pt-6">
        <EmployeeCard
          name="John Doe"
          position="Software Engineer"
          photoUrl="https://randomuser.me/api/portraits/men/75.jpg"
          email="john.doe@example.com"
          phone="+1 (555) 123-4567"
        />
      </main>
    </div>
  );
}
