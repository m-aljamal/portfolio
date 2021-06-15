import React from "react";
import { companyInfSection } from "../../utils/homePageText";

export default function CompanyInfo() {
  return (
    <section className="relative bg-yellow">
      <div className="flex">
        <div className="w-1/2 absolute top-0 left-0 h-full p-0  imgBorder z-10 flex">
          <figure className="bg-office bg-cover bg-right-top top-0 left-0 block w-full h-full"></figure>
        </div>
        <div className="w-1/2">
          <h2>fdfdfd</h2>
          <h2>fdfdfd</h2>
          <h2>fdfdfd</h2>
          <h2>fdfdfd</h2>
          <h2>fdfdfd</h2>
          <h2>fdfdfd</h2>
          <h2>fdfdfd</h2>
          <h2>fdfdfd</h2>
          <h2>fdfdfd</h2>
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

{
  /* <section className="bg-office w-full elative ">
      <div className="flex ">
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
          <div className="w-full"></div>
        </div>
      </div>
      
    </section> */
}
