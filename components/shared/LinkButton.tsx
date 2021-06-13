import { FC } from "react";
import Link from "next/link";
export const LinkButton = ({ title, link, ...props }) => {
  return (
    <div
      className={`border-2    rounded-md cursor-pointer relative btn ${props.styles}`}
    >
      <Link href={link}>
        <a className="font-bold">{title}</a>
      </Link>
    </div>
  );
};
