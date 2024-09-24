import {Project} from "../../assets/utils/types";

export default function ProjectContent({ project } : { project: Project }) {
    return (
        <section className="pt-28">
            <div className="container">
                <div className="flex max-lg:flex-col items-start gap-20">
                    <div className="project-info lg:sticky lg:top-5 w-full lg:w-[380px]">
                        <div className="border border-light rounded-xl md:rounded-3xl py-6 md:py-10 px-8 md:px-12">
                            <div className="flex flex-col gap-6">
                                <InfoBlock
                                    heading="Project"
                                    text="AI Crypto Brand Redesign"
                                    iconSrc="https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Svgs/document-write.svg"
                                />
                                <InfoBlock
                                    heading="Role"
                                    text="Brand and Website Designer"
                                    iconSrc="https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Svgs/user-settings.svg"
                                />
                                <InfoBlock
                                    heading="Name"
                                    text="NorthTensor"
                                    iconSrc="https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Svgs/user-card.svg"
                                />
                                <InfoBlock
                                    heading="Redesign"
                                    text="From OLD Website"
                                    iconSrc="https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Svgs/redesign.svg"
                                />
                                <InfoBlock
                                    heading="Tools"
                                    text="Figma, Photoshop, Lottifiles"
                                    iconSrc="https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Svgs/tools.svg"
                                />
                                <InfoBlock
                                    heading="Tech Stack"
                                    text="Next.Js, TailwindCSS, Node.Js"
                                    iconSrc="https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Svgs/stack.svg"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="project-content flex-1">
                        <div className="content-block">
                            <h2>About:</h2>
                            <p>
                                A company focused on decentralized artificial intelligence (AI). The new website
                                reflects
                                its innovative and user-centric approach to AI development, relationships, guidance
                                readings,
                                and more.
                            </p>
                        </div>
                        <div className="content-block">
                            <h2>Task:</h2>
                            <ul>
                                <li>Modernize the website's design and user experience (UX) for a more professional and
                                    engaging look and feel.</li>
                                <li>Clearly communicate NorthTensor's mission and values, emphasizing their commitment to
                                    democratizing AI.</li>
                                <li>Showcase their investment portfolio and highlight the benefits of decentralized
                                    AI.</li>
                                <li>Improve website navigation and make it easier for users to find relevant
                                    information.</li>
                            </ul>
                            <div className="h-[470px] w-full rounded-xl md:rounded-3xl overflow-hidden">
                                <img src={project.coverImage} alt="Project Cover Image" className="w-full h-full object-cover" />
                            </div>
                            <img src="" alt="" />
                        </div>
                        <div className="content-block">
                            <h2>Challenge:</h2>
                            <p>
                                The challenge of this project was to translate NorthTensor's unique brand preferences into a cohesive and visually stunning website. Their desired aesthetics included:
                                <ul>
                                    <li>Treasure</li>
                                    <li>Modern</li>
                                    <li>Soft</li>
                                    <li>Gradient Mesh</li>
                                    <li>Glasmorphic</li>
                                </ul>
                            </p>
                        </div>
                        <div className="content-block">
                            <h2>Key Features:</h2>
                            <p>
                                The challenge of this project was to translate NorthTensor's unique brand preferences into a cohesive and visually stunning website. Their desired aesthetics included:                                <ul>
                                    <li>Treasure</li>
                                    <li>Modern</li>
                                    <li>Soft</li>
                                    <li>Gradient Mesh</li>
                                    <li>Glasmorphic</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="project-content pt-16 md:pt-28">
                    <div className="project-results text-center">
                        <h2>Results:</h2>
                        <p>The Renaissant solution suite makes organizations more efficient, promotes stakeholder
                            accountability, and weaves safety into all features and functions. Modernize the website's
                            design and user experience (UX) for a more professional and engaging look and feel.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function InfoBlock({ heading, text, iconSrc }: { [key: string]: string }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <img src={iconSrc} alt="" />
                <h3>{heading}:</h3>
            </div>
            <p className="text-lg 2xl:text-xl">{text}</p>
        </div>
    )
}
