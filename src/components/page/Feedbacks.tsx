import React, {useState} from 'react';
import {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-fade';
import {Link} from "react-router-dom";
import type {SwiperProps} from "swiper/react";
import { clientsFeedback } from "../../assets/utils/constants";


export default function Feedbacks() {
    const swiperRef = useRef<SwiperProps>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    function moveToSlide(index :number) {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    }
    function slideChanged($event :any) {
        setActiveSlide($event.activeIndex);
    }

    return (
        <section className="clients-feedback max-w-[800px] mx-auto py-14 md:py-20">
            <div className="container">
                <div className="pb-10 md:pb-20 relative text-center">
                    <div className="container">
                        <h2 className="section-header-subtitle">
                            My Clients
                        </h2>
                        <h3 className="section-header-heading">
                            Collaborating with inspiring companies
                        </h3>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-3 lg:grid-cols-4 mb-10">
                        {clientsFeedback.map((client, index) => {
                                return (
                                    <div key={index} onClick={() => moveToSlide(index)}>
                                        <div
                                            className={`border border-[#363b3f] aspect-square h-[95px] md:h-[200px] lg::h-[160px] w-full flex justify-center items-center cursor-pointer ${activeSlide === index ? `` : 'grayscale' }`}
                                            style={{ backgroundImage: activeSlide === index ? `linear-gradient(45deg, ${client.bgColor[0]}, ${client.bgColor[1]})` : 'none' }}
                                        >
                                            <div className="size-14 md:size-28">
                                                <img src={client.logo} alt={client.companyName} className=" h-full w-full object-contain" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>

                        <Swiper
                            ref={swiperRef}
                            effect={'fade'}
                            modules={[Autoplay, EffectFade]}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: true
                            }}
                            fadeEffect={{ crossFade: true }}
                            onSlideChange={slideChanged}
                            className="feedback-slider"
                        >
                            {clientsFeedback.map((client, index) => {
                            return (
                                <SwiperSlide key={index} className="text-light">
                                    <div className="border border-[#363b3f] p-4 sm:p-6 w-full cursor-grab">
                                        <blockquote className="text-lg xl:text-xl">
                                            {`"${client.feedback}"`}
                                        </blockquote>
                                        <div className="flex max-md:flex-col md:items-center md:justify-between">
                                            <div className="flex items-center gap-3 mt-4">
                                                <div className="w-8 h-8 overflow-hidden">
                                                    <img src={client.image} alt={client.name} className="w-full h-full object-cover" />
                                                </div>
                                                <p className="text-[#9ea4a6] font-medium text-base pt-2">
                                                    {client.name}
                                                </p>
                                            </div>
                                            <div className="text-end">
                                                <Link to={client.productLink} target="_blank" className="styled-button max-sm:!text-md mt-8 md:mt-4">
                                                    View Project
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                              d="M10.97 14.47a.75.75 0 101.06 1.06l5-5a.75.75 0 000-1.06l-5-5a.75.75 0 10-1.06 1.06l3.72 3.72H4a.75.75 0 000 1.5h10.69l-3.72 3.72z"
                                                              fill="currentColor"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                        </Swiper>
                </div>
            </div>
        </section>
    )
}
