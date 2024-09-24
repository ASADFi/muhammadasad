import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function JoinOurTeam() {
    const JoinOurTeamSection = useRef<HTMLHeadingElement>(null);

    const scrollTriggerConfig = {
        trigger: JoinOurTeamSection.current,
        start: 'top center'
    };

    useGSAP(() => {
        gsap.from('.section-header-text', {
            opacity: 0,
            scrollTrigger: scrollTriggerConfig,
            delay: .3,
        });
        gsap.from('.team-desc', {
            opacity: 0,
            scrollTrigger: scrollTriggerConfig,
            delay: .8,
        });
        gsap.from('.team-image', {
            opacity: 0,
            translateY: 50,
            scrollTrigger: scrollTriggerConfig,
            delay: .8
        });
    });

    return (
        <div className="mt-10 md:mt-20">
            <div className="container">
                <div className="flex max-md:flex-col md:justify-between max-md:gap-10 md:items-end max-md:mb-20">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-28">
                        <div className="col-span-5 xl:col-span-6">
                            <div className="section-header-text">
                                <h2 className="section-header-subtitle">
                                    Join our team
                                </h2>
                                <h3 className="section-header-main-heading left">
                                    Become a part of Concealed
                                </h3>
                            </div>

                            <p className="team-desc mt-3 md:mt-6 text-lg xl:text-2xl">
                                We are a fully remote team of 8, distributed across five Portuguese cities. Wherever you
                                work from, we are looking forward to meeting you and your drive to excel!
                            </p>
                        </div>

                        <div className="col-span-7 xl:col-span-6">
                            <img className="team-image" src="https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam.e72830c3.jpg&w=3840&q=100" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
