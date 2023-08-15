import { Metadata } from "next";
import GetAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Users page",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = GetAllUsers();
  const users = await usersData;
  const content = (
    <section>
      <h2>
        <Link href="/" className="text-red-700 font-bold">Go back home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <div className="flex flex-col mb-4 ">
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
          </div>
        );
      })}
    </section>
  );
  return content;
}
