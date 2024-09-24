import {projects} from "../../assets/utils/constants";
import {Link} from "react-router-dom";
import {useEffect, useState, useRef} from "react";
import {ProjectCategories} from "../../assets/utils/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ProjectsList({ filtersUpdated } : { filtersUpdated: () => void }) {
    const [selectedFilter, setFilter] = useState<string>('All');
    const [filteredProjects, setProjects] = useState(projects);

    useEffect(() => {
        setProjects(selectedFilter === 'All' ? projects : projects.filter((project) => project.category === selectedFilter));
        filtersUpdated();
        }, [selectedFilter]);

    const ProjectsListSection = useRef<HTMLHeadingElement>(null);

    const scrollTriggerConfig = {
        trigger: ProjectsListSection.current,
        start: 'top center'
    };

    useGSAP(() => {
        gsap.from('.section-header', {
            opacity: 0,
            stagger: .7,
            scrollTrigger: scrollTriggerConfig,
            delay: .3
        });
        gsap.from('.project-card', {
            opacity: 0,
            stagger: .4,
            translateY: 50,
            scrollTrigger: scrollTriggerConfig,
            delay: .8
        });
    });

    return (
        <section className="mt-10 md:mt-20" ref={ProjectsListSection}>
            <div className="container">
                <div className="section-header flex max-md:flex-col md:justify-between max-md:gap-10 md:items-end max-md:mb-20">
                    <div>
                        <h2 className="section-header-subtitle">
                            Our Work
                        </h2>
                        <h3 className="section-header-main-heading">
                            Projects
                        </h3>
                    </div>

                    <div className="flex md:mb-3">
                        <div className={`project-filter mr-2.5 ${selectedFilter === 'All' ? 'text-primary' : ''}`}
                             onClick={() => setFilter('All')}>
                            <span>All</span>
                            <span className="project-filters-amount">{projects.length}</span>
                        </div>
                        {Object.values(ProjectCategories).map((category, index) => {
                            const projectCount = projects.filter((project) => project.category === category).length;
                            return (
                                <div className="flex items-center" key={index} onClick={() => setFilter(category)}>
                                    <div className="w-1 h-1 bg-light mx-6"></div>
                                    <div
                                        className={`project-filter ${selectedFilter === category ? 'text-primary' : ''}`}>
                                        <span>{category}</span>
                                        <span className="project-filters-amount">{projectCount}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 md:mt-20 items-stretch">
                    {filteredProjects.map((project, index) => {
                        return <ProjectCard project={project} key={index} />
                    })}
                </div>
            </div>
        </section>
    )
}

interface ProjectCardProps {
    project: any;
}

function ProjectCard({ project } : ProjectCardProps) {
    return (
        <Link to={`/project/${project.id}`} className="project-card">
            <div className="flex flex-col h-full">
                <div className="relative h-full md:!bg-dark-gray p-5 transition duration-500 ease-in-out" style={{ background: project.color }}>
                    <div className="overflow-hidden h-[300px] flex items-center justify-center p-5" style={{ background: project.color }}>
                        <img src={project.coverImage} alt={project.title}/>
                    </div>
                    <div className="project-overlay font-medium">
                        <h4 className="text-light/50 md:text-gray-text mt-5 mb-2 transition duration-500 ease-in-out">
                            {project.subtitle}
                        </h4>
                        <p className="text-xl md:text-2xl text-[#f9f6f1]">
                            {project.title}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

