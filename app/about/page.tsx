import Link from "next/link";
export default function About() {
  return (
    <>
      <h1 className="flex flex-col items-center justify-between p-24">
        About
      </h1>
      <Link href="/">Go home</Link>
    </>
  );
}
