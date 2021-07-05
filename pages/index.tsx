import Hero from "src/components/homePage/Hero";
import CoreServices from "src/components/homePage/CoreServices";
import CustomersFeedBack from "src/components/homePage/CustomersFeedBack";
import Partnership from "src/components/homePage/Partnership";
import Promise from "src/components/homePage/Promise";
import CompanyInfo from "src/components/homePage/CompanyInfo";
import StartWithUs from "src/components/homePage/StartWithUs";
export default function Home() {
  return (
    <div>
      <Hero />
      <CoreServices />
      <CustomersFeedBack />
      <Partnership />
      <Promise />
      <CompanyInfo />
      <StartWithUs />
    </div>
  );
}
