import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCreative} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-creative';
import type {SwiperProps} from "swiper/swiper-react";
import {projects} from "../../assets/utils/constants";
import {Link} from "react-router-dom";


export default function OurWork() {
    const swiperRef = useRef<SwiperProps>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    function moveToSlide(index :number) {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    }

    function slideChanged($event :any) {
        if (window.innerWidth >= 992) setActiveSlide($event.activeIndex);
    }

    const autoPlayTime = 4000;

    function mouseHoverMovement(mouseOver :string) {
        const bar = document.querySelector('.animate-bar')
        const animation = bar?.getAnimations()[0];
        if (animation) {
            if (mouseOver === 'in') {
                animation.pause();
                swiperRef.current?.swiper?.autoplay?.stop();
            } else if (mouseOver === 'out') {
                animation.play();
                swiperRef.current?.swiper?.autoplay?.start();
            }
        }
    }

    return (
        <section className="py-14 md:py-20 lg:py-40">
            <div className="container">
                <div className="flex max-sm:flex-col sm:justify-between sm:items-center pb-10 md:pb-20">
                    <div className="flex flex-col">
                        <h2 className="section-header-subtitle">
                            Our Work
                        </h2>
                        <h3 className="section-header-heading max-sm:text-left max-sm:!ml-0">
                            Recent Projects
                        </h3>
                    </div>

                    <div className="max-sm:pt-5">
                        <Link to="projects" className="primary-btn">View all projects</Link>
                    </div>
                </div>

                <div>
                    <div className="flex lg:hidden">
                        <ProjectTabGroup activeSlide={activeSlide} updateIndex={(index :number) => setActiveSlide(index)} />
                    </div>

                    <div className="hidden lg:grid grid-cols-12 h-[520px]">
                        <div className="col-span-7 lg:order-2 lg:pl-5">
                            <Swiper
                                ref={swiperRef}
                                effect={'creative'}
                                creativeEffect={{
                                    prev: {
                                        shadow: true,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ['100%', 0, 0],
                                    },
                                }}
                                modules={[Autoplay, EffectCreative]}
                                autoplay={{
                                    delay: autoPlayTime,
                                    pauseOnMouseEnter: true
                                }}
                                onSlideChange={slideChanged}
                                className=" overflow-hidden h-[520px] !min-h-full"
                            >
                                {projects.slice(0, 4).map((project, index) => {
                                    return (
                                        <SwiperSlide key={index} onMouseEnter={() => mouseHoverMovement('in')} onMouseLeave={() => mouseHoverMovement('out')} style={{backgroundColor: project.color}}
                                                     className="overflow-hidden">
                                            <img src={project.coverImage} alt=""
                                                 className="w-full h-full object-contain"/>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                        <div className="lg:col-span-5 lg:order-1 lg:pr-5">
                            <div className="flex flex-col">
                                {projects.slice(0, 4).map((project, index) => {
                                    return (
                                        <button key={index} type="button" onClick={() => moveToSlide(index)} className={`relative py-6 px-5 font-medium border-b border-[#242b31] text-left hover:bg-[#363B3F]/20 cursor-pointer ${activeSlide === index ? 'bg-[#363B3F]/20' : '' }`}>
                                           <div className={`bg-primary absolute top-0 left-0 h-px ${activeSlide === index ? 'animate-bar':''}`}></div>
                                            <h4 className="text-gray-text text-base mb-1 md:mb-2">
                                                {project.subtitle}
                                            </h4>
                                            <h5 className="text-xl md:text-2xl">
                                                {project.title}
                                            </h5>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
}

interface ProjectTabGroupPropsType {
    activeSlide: number
    updateIndex: (index :number) => void
}
function ProjectTabGroup({ activeSlide, updateIndex } :ProjectTabGroupPropsType) {
    return (
        <div className="flex flex-col flex-1">
            {projects.slice(0, 4).map((project, index) => {
                return (
                    <div key={index} className="flex flex-col">
                        <button type="button" onClick={() => updateIndex(index)}
                                className={`relative py-6 px-5 font-medium border-b border-[#242b31] text-left hover:bg-[#363B3F]/20 cursor-pointer ${activeSlide === index ? 'bg-[#363B3F]/20' : ''}`}>
                            <div
                                className={`bg-primary absolute top-0 left-0 h-px ${activeSlide === index ? 'w-full' : 'w-0'}`}></div>
                            <h4 className="text-gray-text text-base mb-1 md:mb-2">
                                {project.subtitle}
                            </h4>
                            <h5 className="text-xl md:text-2xl">
                                {project.title}
                            </h5>
                        </button>
                        <div  style={{backgroundColor: project.color}}
                                     className={`overflow-hidden flex justify-center items-center aspect-square ${activeSlide === index ? 'block' : 'hidden'}`}>
                            <img src={project.coverImage} alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
