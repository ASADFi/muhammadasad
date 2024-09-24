import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function AboutImages() {
    const AboutImagesSection = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        gsap.from('.section-header-text', {
            opacity: 0,
            scrollTrigger: {
                trigger: AboutImagesSection.current,
                start: 'top center'
            },
            delay: .3,
        });
        gsap.from('.about-image', {
            opacity: 0,
            translateY: 50,
            stagger: 0.5,
            scrollTrigger: {
                trigger: AboutImagesSection.current,
                start: 'top center'
            },
            delay: .8
        });
        gsap.from('.about-content', {
            opacity: 0,
            scrollTrigger: {
                trigger: AboutImagesSection.current,
                start: 'top center'
            },
            delay: 2
        });
    });

    return (
        <section ref={AboutImagesSection}>
            <div className="container">
                <div className="section-header-text text-center">
                    <h2 className="section-header-subtitle">
                        Who we are
                    </h2>
                    <h3 className="section-header-main-heading">
                        A fully remote creative digital agency
                    </h3>
                </div>
            </div>

            <div className="container md:max-w-[1400px] md:px-0 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-8 mt-20 lg:mt-32">
                    <div className="max-md:order-2 col-span-1">
                        <img className="about-image" loading="eager" src="https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-1.03386880.jpg&w=1200&q=100" alt=""/>
                    </div>
                    <div className="max-md:order-1 col-span-2">
                        <img className="about-image" loading="eager" src="https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-2.fb81c818.jpg&w=3840&q=100" alt=""/>
                    </div>
                    <div className="max-md:order-3 col-span-1">
                        <img className="about-image" loading="eager" src="https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-3.9a7a20ae.jpg&w=1920&q=100" alt=""/>
                    </div>
                </div>
            </div>

            <div className="container mt-20 md:mt-32">
                <div className="grid md:grid-cols-12 gap-6 md:gap-12 about-content">
                    <div className="col-span-12 md:col-span-5">
                        <p className="text-lg xl:text-2xl">
                            Concealed was created in João Saraiva’s living room table in 2017 with the goal of assembling a fully remote team that would live their best life while delivering their best work.
                        </p>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-12 md:col-span-6">
                        <p className="text-gray-text text-lg xl:text-2xl">
                            “Despite my professional skills being mainly as a developer I always had a strong passion for design and how these two areas should be combined together. Concealed was born out of that passion with the vision to work in the “shadows” and allowing the work that we do shine by itself. We love to work in different products from diverse areas: share your idea with us so that we can surprise you.”
                        </p>
                        <div className="flex items-center gap-3 mt-5">
                            <div className="h-8 w-8">
                                <img src="https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjoao-saraiva.49a03236.jpg&w=3840&q=100" alt=""/>
                            </div>
                            <p className="text-lg text-light-gray">João Saraiva, CEO-Founder</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
