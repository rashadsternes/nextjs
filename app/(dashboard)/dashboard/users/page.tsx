import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Users Dashboard</h1>
      <p className="text-lg">This is the users dashboard page.</p>

      <ul className="mt-10">
        <li className="text-lg">
          <Link href="/dashboard/users/1">User 1</Link>
        </li>
        <li className="text-lg">
          <Link href="/dashboard/users/2">User 2</Link>
        </li>
        <li className="text-lg">
          <Link href="/dashboard/users/3">User 3</Link>
        </li>
        <li className="text-lg">
          <Link href="/dashboard/users/4">User 4</Link>
        </li>
      </ul>
    </div>
  );
}

export default Page;