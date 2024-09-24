import { useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import 'swiper/css';
import 'swiper/css/effect-creative';
import {projects} from "../assets/utils/constants";
import type {Project} from "../assets/utils/types";
import ProjectIntro from "../components/page/ProjectIntro";
import ProjectContent from "../components/page/ProjectContent";
import ContactBanner from "../components/page/ContactBanner";

export default function ProjectDetail() {
    const [projectDetail, setDetail] = useState<Project | null>(null)
    const { projectId } = useParams();
    useEffect(() => {
        setDetail(projects.filter(project => project.id === projectId)[0]);
    }, [projectId]);

    return (
        <div>
            {projectDetail && (<section className="mt-10 md:mt-20">
                <ProjectIntro project={projectDetail} />
                <ProjectContent project={projectDetail} />
                <ContactBanner />
            </section>)
            }
        </div>
    )
}
