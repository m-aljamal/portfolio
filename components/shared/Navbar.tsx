import Link from "next/link";
import { useState } from "react";
export default function Navbar({ links, serviceLinks }) {
  const [showMenu, setShowMenu] = useState("hidden");
  const linkStyle = "ml-8 hover:text-white cursor-pointer";
  return (
    <div className="bg-gradient-to-r from-burple to-pink py-3.5">
      <div className="container flex justify-between items-center ">
        <div>Logo</div>
        <div className="flex">
          {links?.map((l) => {
            return l.name === "الخدمات" ? (
              <div
                className={`relative ${linkStyle}`}
                onMouseOver={() => setShowMenu("block  ")}
                onMouseOut={() => setShowMenu("hidden")}
              >
                <Link href={l.link}>
                  <>
                    {l.name}
                    <div
                      className={`absolute text-gray  bg-white   ${showMenu} rounded-lg`}
                    >
                      {serviceLinks.map((s) => (
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

Navbar.defaultProps = {
  links: [
    { name: "الرئيسية", link: "/" },
    { name: "الخدمات", link: "/services" },
    { name: "المشاريع", link: "/projects" },
    { name: "رأي الزبائن", link: "/reviews" },
    { name: "عنا", link: "/about" },
    { name: "ابدأ معنا", link: "/getstarted" },
  ],
  serviceLinks: [
    { name: "HTML/CSS", link: "/html-css" },
    { name: "REACT", link: "/react" },
  ],
};
