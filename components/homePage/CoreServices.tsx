import { coreServicesSection } from "../../utils/homePageText";

export default function CoreServices() {
  return (
    <div className="container py-10">
      <h2 className="text-3xl text-center">{coreServicesSection.title} </h2>
      <p className="pt-4 text-lg">{coreServicesSection.serviceDescription}</p>
      <div></div>
    </div>
  );
}
