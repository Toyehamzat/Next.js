import Link from "next/link";
import GetAllUsers from "@/lib/getAllUsers";
export default function Home() {
  const usersData: Promise<> = GetAllUsers();
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>hello world!</h1>
      <p>
        <Link href="users" className="">
          Users
        </Link>
      </p>
    </main>
  );
}
