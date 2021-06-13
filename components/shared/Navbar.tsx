import Link from "next/link";
import { useState } from "react";
import { links } from "../../utils/links";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState("hidden");
  const linkStyle = "ml-8 hover:text-white cursor-pointer";
  return (
    <div className="bg-gradient-to-r from-burple to-pink py-3.5">
      <div className="container flex justify-between items-center ">
        <div>Logo</div>
        <div className="flex">
          {links?.mainLinks?.map((l) => {
            return l.name === "الخدمات" ? (
              <div
                key={l.name}
                className={`relative ${linkStyle}`}
                onMouseOver={() => setShowMenu("block  ")}
                onMouseOut={() => setShowMenu("hidden")}
              >
                <Link href={l.link}>
                  <>
                    {l.name}
                    <div
                      className={`absolute text-t_gray  bg-white   ${showMenu} rounded-lg`}
                    >
                      {links?.serviceLinks?.map((s) => (
                        <div className="px-8 mb-2 pt-2 " key={s.name}>
                          <Link href={s.link}>{s.name}</Link>
                        </div>
                      ))}
                    </div>
                  </>
                </Link>
              </div>
            ) : (
              <div className={linkStyle}>
                <Link href={l.link}>{l.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
