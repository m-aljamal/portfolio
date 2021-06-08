import Link from "next/link";
export default function Navbar() {
  return (
    <div className="bg-blue-400  py-3.5">
      <div className="container flex justify-between items-center">
        <div className="text-white">
          <Link href="/">
            <a className="ml-4">الرئيسية</a>
          </Link>
          <Link href="/blog">المدونة</Link>
        </div>
        <div>
          <p>Social Links</p>
        </div>
      </div>
    </div>
  );
}
