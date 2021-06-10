import Link from "next/link";
import { useState } from "react";
export default function Navbar({ links, serviceLinks }) {
  const [showMenu, setShowMenu] = useState("hidden");
  const linkStyle = "ml-8 hover:text-blue";
  return (
    <div className="bg-yellow py-3.5" onMouseOut={() => setShowMenu("hidden")}>
      <div className="container flex justify-between items-center ">
        <div>Logo</div>
        <div className="flex">
          <div className="ml-2">
            <Link href={links[0].link}>{links[0].name}</Link>
          </div>
          <div className="ml-2 relative">
            <Link href={links[1].link}>{links[1].name}</Link>
          </div>
        </div>
        {/* <div className="relative">
          {links?.map((link) => (
            <Link href={link.link} key={link.name}>
              {link.name === "SERVICES" ? (
                <a
                  className={linkStyle}
                  onMouseOver={() => setShowMenu("block")}
                >
                  {link.name}
                </a>
              ) : (
                <a className={linkStyle}>{link.name}</a>
              )}
            </Link>
          ))}
          <div
            className={`absolute top-10 bg-white left-20 ${showMenu} rounded-lg`}
          >
            {serviceLinks.map((s) => (
              <div className="px-8 mb-2 pt-2" key={s.name}>
                <Link href={s.link}>{s.name}</Link>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  links: [
    { name: "HOME", link: "/" },
    { name: "SERVICES", link: "/services" },
    { name: "PROJECTS", link: "/projects" },
    { name: "REVIEWS", link: "/reviews" },
    { name: "ABOUT", link: "/about" },
    { name: "GET STARTED", link: "/getstarted" },
  ],
  serviceLinks: [
    { name: "HTML/CSS", link: "/html-css" },
    { name: "REACT", link: "/react" },
  ],
};
