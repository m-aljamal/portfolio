import { useState } from "react";
import SendEmail from "src/components/getStarted/SendEmail";
import StartOrder from "src/components/getStarted/StartOrder";
import { heroText } from "utils/getStartedText";

export default function getstarted() {
  const [type, setType] = useState("startOrder");

  return (
    <div>
      <div className="bg-gradient-to-r from-burple to-pink py-8">
        <div className="container">
          <div className="w-3/4 mx-auto relative">
            <div className="pt-8 text-center 	">
              <h1 className="text-4xl">{heroText.title}</h1>
              <p className="text-xl mt-4">{heroText.body}</p>
            </div>
            <div className="flex mt-6 justify-center">
              <TypeOfContact
                text={heroText.sendEmail}
                setType={setType}
                type="sendEmail"
              />
              <TypeOfContact
                text={heroText.startOrder}
                setType={setType}
                type="startOrder"
              />
            </div>
          </div>
        </div>
      </div>
      {type === "startOrder" ? <StartOrder /> : <SendEmail />}
    </div>
  );
}

const TypeOfContact = ({ text, setType, type }) => {
  return (
    <div
      className="w-1/2 text-center cursor-pointer"
      onClick={() => setType(type)}
    >
      <img
        className="w-20 mx-auto"
        src="/images/add-to-package.svg "
        alt="add-to-package"
      />
      <p className="mt-2">{text}</p>
    </div>
  );
};
