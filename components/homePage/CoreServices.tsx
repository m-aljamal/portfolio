import { coreServicesSection } from "../../utils/homePageText";
import { LinkButton } from "../shared/LinkButton";
export default function CoreServices() {
  return (
    <div className="container py-10 bg-white">
      <h2 className="text-3xl text-center ">{coreServicesSection.title} </h2>
      <p className="pt-4 text-lg text-center">
        {coreServicesSection.serviceDescription}
      </p>
      <div className="md:grid grid-cols-3 mt-10 ">
        {coreServicesSection.services.map(
          (service, index) =>
            index <= 2 && <Service service={service} key={index} />
        )}
      </div>

      <div className="md:grid grid-cols-3 mt-10 md:border-t-2 border-t-0">
        {coreServicesSection.services.map(
          (service, index) =>
            index > 2 && <Service service={service} key={index} />
        )}
      </div>
    </div>
  );
}

const Service = ({ service }) => {
  return (
    <div
      className={`text-center p-6 leading-8 mt-8  md:border-l-0  md:border-r-2 border-b-2 md:border-b-0`}
    >
      <i className={`${service.icon} fa-4x text-red-500`}></i>
      <h3 className="font-thin">{service.type}</h3>
      <h2 className="text-2xl font-bold font-Poppins">{service.title}</h2>
      <p className="my-4">{service.description}</p>
      <LinkButton
        title="المزيد"
        link={service.link}
        styles="w-32 btnGrayBack border-t_gray mx-auto "
      />
    </div>
  );
};
