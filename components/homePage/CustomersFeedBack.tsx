import { useState } from "react";
import { customerSection } from "../../utils/homePageText";

export default function CustomersFeedBack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState("opacity-100 ");

  const handleClick = (index) => {
    setFade("opacity-20 ");
    setTimeout(() => handleTimeOut(index), 400);
  };
  const handleTimeOut = (index) => {
    setFade("opacity-100 ");
    setActiveIndex(index);
  };
  return (
    <div className="bg-borderColor py-12">
      <div className="container text-center text-2xl">
        <h2 className="text-3xl">{customerSection.title}</h2>
        <div className="mt-12">
          <FeedBack data={customerSection.feedBack[activeIndex]} fade={fade} />
        </div>
        <ul className="flex mt-8 ">
          {customerSection.feedBack.map((image, index) => (
            <li
              className={`w-14 cursor-pointer  opacity-${
                activeIndex === index ? 100 : 50
              } `}
              onClick={() => handleClick(index)}
            >
              <img src={image.image} className="rounded-full w-full " />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const FeedBack = ({ data, fade }) => {
  return (
    <div
      className={`md:flex items-center justify-center ${fade} transition-opacity`}
    >
      <div className="md:w-72 w-60 m-auto md:m-0 relative customerImg">
        <img src={data.image} alt="face" className="w-full" />
      </div>
      <div className="md:text-right  md:mr-8 md:w-3/6">
        <h2 className="font-bold">{data.name}</h2>
        <div className="font-thin text-lg">
          <h3>{data.jop}</h3>
          <h3>{data.webSite}</h3>
        </div>

        <p className="mt-8 font-normal text-lg">
          <i className="fas fa-quote-left fa-2x"></i>
          {data.comment}
        </p>
      </div>
    </div>
  );
};
