import { startOrderText } from "utils/getStartedText";

export default function StartOrder() {
  return (
    <div className="container">
      <div className="  mt-8 w-3/4 mx-auto">
        <div className="text-center">
          <h2 className="text-2xl mb-3">{startOrderText.title}</h2>
          <p>{startOrderText.body}</p>
        </div>
        <div className="mt-10 grid grid-cols-5 gap-2  ">
          {startOrderText.ourService.map((service) => (
            <OrderType icon={service.icon} type={service.type} />
          ))}
        </div>
      </div>
    </div>
  );
}

const OrderType = ({ icon, type }) => {
  return (
    <div className='text-center border-2 border-black p-4 '>
      <i className={icon}></i>
      <p>{type}</p>
    </div>
  );
};
