import React from "react";
import { companyInfSection } from "../../utils/homePageText";

export default function CompanyInfo() {
  return (
    <section className="bg-office w-full   ">
      <div className="flex bg-transparentWhite">
        <div className="bg-red-500 w-1/2 py-20">
          <div className="container">
            <h2>{companyInfSection.title}</h2>
            <p>{companyInfSection.text}</p>
            <p>{companyInfSection.text2}</p>
            {companyInfSection?.numbers?.map((n) => (
              <Numbers number={n.number} text={n.text} />
            ))}
          </div>
        </div>
        <div className=" w-1/2 py-20  ">
          <div className="w-full bg-none">ff</div>
        </div>
      </div>
    </section>
  );
}

const Numbers = ({ number, text }) => {
  return (
    <div>
      <p>{number}</p>
      <p>{text}</p>
    </div>
  );
};
