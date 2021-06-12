import { FC } from "react";
import Link from "next/link";
export const LinkButton: FC<{ title: string; link: string }> = ({
  title,
  link,
}) => {
  return (
    <div className="border-2 w-40 py-2 px-8 rounded-md cursor-pointer relative btn ">
      <Link href={link}>
        <a className="font-bold">{title}</a>
      </Link>
    </div>
  );
};
