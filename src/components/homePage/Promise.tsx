import { promiseSection } from "../../../utils/homePageText";

export default function Promisr() {
  return (
    <div className="container py-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold">{promiseSection.title}</h2>
        <p className="text-xl mt-4">{promiseSection.text}</p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-12">
        {promiseSection?.promises?.map((p) => (
          <Promice data={p} />
        ))}
      </div>
    </div>
  );
}

const Promice = ({ data }) => {
  return (
    <div className="flex">
      <i className={`fas ${data.icon} fa-2x mt-2 text-red-500`}></i>
      <div className="mr-4">
        <h3 className="text-xl">{data.name}</h3>
        <p className="font-light text-lg mt-4">{data.description}</p>
      </div>
    </div>
  );
};
