import HeroBanner from "@/components/Banner";
import CallToActionBanner from "@/components/CallToActionBanner";
import WhatTravelersSay from "@/components/WhatTravelersSay";
import WhyChooseUs from "@/components/WhyChooceUs";

export default function Home() {
  return (
    <div>
     <HeroBanner></HeroBanner>
     <WhyChooseUs></WhyChooseUs>
     <WhatTravelersSay></WhatTravelersSay>
     <CallToActionBanner></CallToActionBanner>

    </div>
  );
}
