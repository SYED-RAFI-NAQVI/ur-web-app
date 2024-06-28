import Button from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1>UR Wealth</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Button title={"this is button"} />
    </main>
  );
}
