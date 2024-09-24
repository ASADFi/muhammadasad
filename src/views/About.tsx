import Skills from "../components/page/Skills";
import Tools from "../components/page/Tools";
import ContactBanner from "../components/page/ContactBanner";

export default function About() {
    return (
        <div className="about-page mt-10 md:mt-20">
            <Skills />
            <Tools />
            <ContactBanner />
        </div>
    )
}
