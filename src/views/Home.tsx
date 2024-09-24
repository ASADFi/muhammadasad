import Hero from "../components/page/Hero";
import WhatWeDo from "../components/page/WhatWeDo";
import Feedbacks from "../components/page/Feedbacks";
import ContactBanner from "../components/page/ContactBanner";
import OurWork from "../components/page/OurWork";
import SkillsInfiniteSlider from "../components/page/SkillsInfiniteSlider";

export default function Home() {

    return (
        <>
            <Hero/>
            <WhatWeDo/>
            <OurWork />
            <SkillsInfiniteSlider />
            <Feedbacks />
            <ContactBanner />
        </>
    )
}
