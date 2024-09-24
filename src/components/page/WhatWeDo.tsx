import React, { useRef } from 'react';
import { services } from "../../assets/utils/constants";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function WhatWeDo() {

    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
            const mm = gsap.matchMedia();
            mm.add({
                small: '(max-width: 767px)',
                large: '(min-width: 768px)',
            }, (ctx) => {
                const { small, large } = ctx.conditions ?? {};
                if (large) {
                    gsap.from('.box', {
                        opacity: 0,
                        stagger: 0.7,
                        scrollTrigger: {
                            trigger: container.current,
                            start: 'top center'
                        }
                    });
                    gsap.from('.section-arrow', {
                        width: 0,
                        stagger: 0.7,
                        scrollTrigger: {
                            trigger: container.current,
                            start: 'top center'
                        }
                    });
                }
                else if (small) {
                    gsap.utils.toArray('.box').forEach((box :any) => {
                        gsap.fromTo(
                            box,
                            { opacity: 0 },
                            {
                                opacity: 1,
                                duration: 0.8,
                                ease: 'power2.out',
                                scrollTrigger: {
                                    trigger: box,
                                    start: 'top center+=100',
                                    end: 'bottom center',
                                    scrub: true,
                                    toggleActions: 'play none none reverse', // Play on enter, do nothing on other events
                                },
                            }
                        );
                    })
                }
            });
        },
        { scope: container }
    );

    return (
        <section className="what-we-do-section py-14 md:py-20 xl:py-40">
            <div className="container" ref={container}>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-0 relative">
                    {services.map((service, index :number) => {
                        return (
                            <div key={index} className="group xl:px-5 box">
                                {service.icon}
                                <h3 className="lg:text-lg lg:mt-5 lg:mb-2 xl:text-2xl font-medium">{service.label}</h3>
                                <p className="text-gray-text text-base xl:text-lg">{service.text}</p>
                            </div>
                        )
                    })}
                    <div className="hidden xl:block">
                        <div className="section-arrow hidden overflow-hidden xl:block xl:absolute xl:left-[10%] xl:top-[-40px] [transform:matrix(0.97,0.23,0.23,-0.97,0,0)]">
                            <svg fill="none" height="46" viewBox="0 0 177 46" width="177" xmlns="http://www.w3.org/2000/svg"><path d="M.782.914c4.882 14.84 28.996 44.52 86.403 44.52 57.406 0 83.376-19.038 87.574-25.482m0 0l.879 7.03m-.879-7.03h-7.322" opacity="0.9" stroke="#fcfcfa" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>

                        <div className="section-arrow hidden overflow-hidden xl:block xl:absolute xl:left-[40%] xl:bottom-[-60px]">
                            <svg fill="none" height="46" viewBox="0 0 177 46" width="177" xmlns="http://www.w3.org/2000/svg"><path d="M.782.914c4.882 14.84 28.996 44.52 86.403 44.52 57.406 0 83.376-19.038 87.574-25.482m0 0l.879 7.03m-.879-7.03h-7.322" opacity="0.9" stroke="#fcfcfa" strokeLinecap="round" strokeLinejoin="round"></path></svg>                        </div>

                        <div className="section-arrow hidden overflow-hidden xl:block xl:absolute xl:left-[60%] xl:top-[-40px] [transform:matrix(0.97,0.23,0.23,-0.97,0,0)]">
                            <svg fill="none" height="46" viewBox="0 0 177 46" width="177" xmlns="http://www.w3.org/2000/svg"><path d="M.782.914c4.882 14.84 28.996 44.52 86.403 44.52 57.406 0 83.376-19.038 87.574-25.482m0 0l.879 7.03m-.879-7.03h-7.322" opacity="0.9" stroke="#fcfcfa" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
