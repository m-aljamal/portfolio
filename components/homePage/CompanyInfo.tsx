import React from "react";
import { companyInfSection } from "../../utils/homePageText";

export default function CompanyInfo() {
  return (
    <div className="flex">
      <div className="bg-red-500 w-1/2">
        <div className="container">
          <h2>{companyInfSection.title}</h2>
          <p>{companyInfSection.text}</p>
          <p>{companyInfSection.text2}</p>
          {companyInfSection?.numbers?.map((n) => (
            <Numbers number={n.number} text={n.text} />
          ))}
        </div>
      </div>
      <div className="bg-t_red w-1/2  ">
        <img src="/images/office.jpeg" alt="programmer" className="w-full" />
      </div>
    </div>
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
