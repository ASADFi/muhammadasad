import React, {useRef, useState} from "react";
import {clientsFeedback} from "../../assets/utils/constants";
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperProps} from "swiper/swiper-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function Testimonials() {
    const swiperRef = useRef<SwiperProps>(null);

    const [activeSlide, setActiveSlide] = useState(0);

    function slideChanged(event :SwiperProps) {
        setActiveSlide(event.activeIndex)
    }

    const TestimonialsSection = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const animations = [
            { target: '.testimonial-card-1', endY: -19, speed: 1.095 },
            { target: '.testimonial-card-2', endY: -100, speed: 0.5 },
            { target: '.testimonial-card-3', endY: 60, speed: 0.7 },
        ];

        animations.forEach(({ target, endY, speed }) => {
            gsap.fromTo(target,
                { yPercent: 0 },
                {
                    yPercent: endY,
                    scrollTrigger: {
                        trigger: TestimonialsSection.current,
                        start: 'top center',
                        end: 'bottom top',
                        scrub: speed
                    },
                }
            );
        });
    });

    const swiperBreakpoints = {
        768: {
            spaceBetween: 30
        },
    };

    function clientInfo(index: number) {
        const { name, designation, companyName } = clientsFeedback[index];
        const designationString = designation ? `${designation}, ` : '';
        return `${name}, ${designationString}${companyName}`;
    }

    return (
        <section className="pt-24 pb-14 md:pt-52 md:pb-20 max-lg:overflow-hidden relative" ref={TestimonialsSection}>
            <div className="container">
                <div className="hidden lg:grid grid-cols-12 gap-10">
                    <div className="md:col-span-4 md:mt-20">
                        <div className="flex flex-col border border-[#363b3f] p-6 testimonial-card-1">
                            <blockquote className="lg:text-lg xl:text-xl">
                                {`"${clientsFeedback[1].feedback}"`}
                            </blockquote>
                            <p className="font-medium text-base text-gray-text mt-3 md:mt-4">
                                {clientInfo(1)}
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-4 md:mt-36">
                        <div className="flex flex-col border border-[#363b3f] p-6 testimonial-card-2">
                            <blockquote className="lg:text-lg xl:text-xl">
                                {`"${clientsFeedback[0].feedback}"`}
                            </blockquote>
                            <p className="font-medium text-base text-gray-text mt-3 md:mt-4">
                                {clientInfo(0)}
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-4">
                        <div className="flex flex-col border border-[#363b3f] p-6 testimonial-card-3">
                            <blockquote className="lg:text-lg xl:text-xl">
                                {`"${clientsFeedback[3].feedback}"`}
                            </blockquote>
                            <p className="font-medium text-base text-gray-text mt-3 md:mt-4">
                                {clientInfo(3)}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="block lg:hidden">
                    <Swiper
                        ref={swiperRef}
                        slides-per-view={'auto'}
                        spaceBetween={20}
                        breakpoints={swiperBreakpoints}
                        centeredSlides={true}
                        onSlideChange={slideChanged}
                        className="testimonials-mobile-slider !overflow-visible"
                    >
                        <SwiperSlide className="testimonials-mobile-slide">
                            <div className="grid gap-3 border border-[#363b3f] h-full p-6">
                                <blockquote className="text-lg xl:text-xl">
                                    {`"${clientsFeedback[1].feedback}"`}
                                </blockquote>
                                <p className="font-medium text-base text-gray-text mt-3 md:mt-4">
                                    {clientInfo(1)}
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="testimonials-mobile-slide ml-5">
                            <div className="grid gap-3 border border-[#363b3f] h-full p-6">
                                <blockquote className="text-lg xl:text-xl">
                                    {`"${clientsFeedback[0].feedback}"`}
                                </blockquote>
                                <p className="font-medium text-base text-gray-text mt-3 md:mt-4">
                                    {clientInfo(0)}
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="testimonials-mobile-slide ml-5">
                            <div className="grid gap-3 border border-[#363b3f] h-full p-6">
                                <blockquote className="text-lg xl:text-xl">
                                    {`"${clientsFeedback[3].feedback}"`}
                                </blockquote>
                                <p className="font-medium text-base text-gray-text mt-3 md:mt-4">
                                    {clientInfo(3)}
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="flex items-center justify-between gap-5 mt-5">
                        <div className="flex items-center flex-1 gap-2">
                            {[1, 2, 3].map((item, index) => (
                                <div key={index} className={`h-px w-full ${activeSlide === index ? 'bg-primary' : 'bg-light'}`} />
                            ))}
                        </div>
                        <div className="shrink-0">{activeSlide+1} of 3</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
