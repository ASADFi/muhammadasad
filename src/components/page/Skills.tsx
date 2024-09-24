import { skills } from "../../assets/utils/constants";
import BoxWrapper from "../common/BoxWrapper";

export default function Skills() {
    return (
        <section className="mt">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-header-subtitle">
                        Skills
                    </h2>
                    <h3 className="section-header-heading max-w-[620px] mx-auto">
                        I posses a variety of skills including
                    </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-24">
                    {skills.map((skill, index) => {
                            return <BoxWrapper
                                title={skill.title}
                                icon={skill.icon}
                                key={index} />
                        }
                    )}
                </div>
            </div>
        </section>
    )
}
