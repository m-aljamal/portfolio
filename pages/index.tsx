import Hero from "../components/homePage/Hero";
import CoreServices from "../components/homePage/CoreServices";
import CustomersFeedBack from "../components/homePage/CustomersFeedBack";
import Partnership from "../components/homePage/Partnership";
import Promise from "../components/homePage/Promise";
export default function Home() {
  return (
    <div>
      <Hero />
      <CoreServices />
      <CustomersFeedBack />
      <Partnership />
      <Promise />
    </div>
  );
}
