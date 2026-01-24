import Footer from "@/components/Footer";
import Hero from "@/components/Home/Hero";

import WhyChoose from "@/components/Home/WhyChoose";
import Navbar from "@/components/Navbar";
import WhyGlobal from "@/components/Home/WhyGlobal";
import CountryComparator from "@/components/Home/CountryComparator";
import MarketInsights from "@/components/Home/MarketInsights";


export default function Home() {
  return (
    <div>
     <Navbar/>
    
       <Hero/>
     
      
        <WhyChoose/>
        <WhyGlobal />
    <CountryComparator />
        <MarketInsights />


        <Footer/>

    
    </div>
  );
}
