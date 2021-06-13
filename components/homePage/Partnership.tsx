import React from "react";
import { partnerShipSection } from "../../utils/homePageText";
import { LinkButton } from "../shared/LinkButton";

export default function Partnership() {
  return (
    <div className="bg-blue py-8">
      <div className="container md:flex  items-center justify-center">
        <div className="md:w-96 border-2 rounded-lg">
          <img src="/images/coding.jpeg" alt="coding" className="rounded-lg" />
        </div>
        <div className="text-white mr-8 md:w-2/5 mt-4 md:mt-0">
          <h2 className="sm:text-6xl text-4xl">{partnerShipSection.title} </h2>
          <p className="mt-8 mb-8 font-normal text-lg text-justify">
            {partnerShipSection.text}
          </p>
          <LinkButton
            title="المزيد من المعلومات"
            link="/"
            styles="w-40 btnGrayBack p-2 text-center border-white"
          />
        </div>
      </div>
    </div>
  );
}
