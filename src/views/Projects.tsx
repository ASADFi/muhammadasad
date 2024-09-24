import ProjectsList from "../components/page/ProjectsList";
import Testimonials from "../components/page/Testimonials";
import ContactBanner from "../components/page/ContactBanner";
import {useState} from "react";

export default function Projects() {
    let [compoKey, setKey] = useState(0);
    function updateKey() {
        setKey(Math.random());
    }

    return (
       <>
           <ProjectsList filtersUpdated={updateKey} />
           <Testimonials key={compoKey} />
           <ContactBanner />
       </>
    )
}
