import { LinkButton } from "../../components/shared/LinkButton";
import { heroSection } from "../../utils/homePageText";
import CurveLine from "../shared/CurveLine";
export default function Hero() {
  return (
    <div className="pb-20 bg-gradient-to-r from-burple to-pink">
      <div className="container pt-40 flex ">
        <Images />
        <Text />
      </div>
    </div>
  );
}

const Text = () => {
  return (
    <div className=" lg:w-1/3 w-1/2 mr-4 ">
      <h2 className=" text-3xl ">{heroSection.mainTitle}</h2>
      <div className="font-Lalezar  text-4xl mt-4">
        <h2>{heroSection.slogen1}</h2>
        <h2 className="mt-2">{heroSection.slogen2}</h2>
      </div>
      <h2 className="mt-4  text-justify">{heroSection.description}</h2>
      <div className="  flex  flex-col xl:flex-row items-center mt-4">
        <LinkButton
          title="ابدأ مشروعك الأن"
          link="/getstarted"
          styles="w-40 py-2 px-8 border-t_gray"
        />
        <p className="xl:mx-4 my-4 ">او</p>
        <LinkButton
          title="تواصل معنا"
          link="/getstarted"
          styles="w-40 py-2 px-8 border-t_gray"
        />
      </div>
    </div>
  );
};

const Images = () => {
  return (
    <div className=" relative  lg:w-3/5 w-1/2  ">
      <Img url="/images/8.png" styles="left-4 -top-16" />
      <Img url="/images/1.png" styles="right-20" />
      <Img url="/images/4.png" styles="bottom-0" />
      <Img url="/images/2.png" styles="left-28 -top-32" />
      <Img url="/images/5.png" styles="bottom-0 left-20" imgStyle="w-48" />
    </div>
  );
};

const Img = ({ url, ...props }) => {
  return (
    <div className={`absolute ${props.styles}`}>
      <img src={url} alt="projects" className={props.imgStyle} />
    </div>
  );
};
