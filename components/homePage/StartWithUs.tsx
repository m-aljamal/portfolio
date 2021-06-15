import React from "react";
import { startWithUs } from "../../utils/homePageText";
import { LinkButton } from "../shared/LinkButton";

export default function StartWithUs() {
  return (
    <div className="bg-yellow py-20">
      <div className="container text-center">
        <h2 className="text-4xl mb-8">{startWithUs}</h2>
        <LinkButton
          title="ابدا الان"
          link="/"
          styles="w-40 p-2 border-t_gray mx-auto"
        />
      </div>
    </div>
  );
}
