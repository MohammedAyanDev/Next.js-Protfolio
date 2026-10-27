
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex text-white gap-4 items-center justify-center font-sans bg-black">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    </div>
  );
}
