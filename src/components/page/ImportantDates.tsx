import { dates } from "../../assets/utils/constants";
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperProps} from "swiper/swiper-react";
import React, {useRef, useState} from "react";

export default function ImportantDates() {
    const swiperRef = useRef<SwiperProps>(null);

    const [activeSlide, setActiveSlide] = useState(0);
    function slideChanged(event :SwiperProps) {
        setActiveSlide(event.activeIndex)
    }

    const swiperBreakpoints = {
        768: {
            spaceBetween: 30
        },
        1200:  {
            spaceBetween: 40
        },
    };

    return (
        <section className="section-spacing">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="section-header-subtitle">
                            How we got here
                        </h2>
                        <h3 className="section-header-heading left">
                            Important dates
                        </h3>
                    </div>

                    <div className="flex gap-3">
                        <button onClick={() => swiperRef.current?.swiper.slidePrev()} className={`dates-slider-indicator ${activeSlide === 0 ? 'disabled' : ''}`}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <button onClick={() => swiperRef.current?.swiper.slideNext()} className={`dates-slider-indicator ${activeSlide === dates.length - 1 ? 'disabled' : ''}`}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 14l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </button>
                    </div>
                </div>

                <div className="mt-16 md:mt-20">
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={'auto'}
                        spaceBetween={20}
                        breakpoints={swiperBreakpoints}
                        onSlideChange={slideChanged}
                        className="dates-slider"
                    >
                        {dates.map((date, index) => {
                            return (
                                <SwiperSlide key={index} className="!w-[80%] cursor-grab !h-auto">
                                    <div className="flex max-lg:flex-col h-full">
                                        <div className="lg:order-2 h-[250px] md:h-[300px] lg:h-[400px] w-full lg:pb-3">
                                            <img loading="lazy" src={date.image} alt="" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="flex flex-col grow p-6 bg-[#171d22] lg:p-8 lg:max-w-[376px] lg:min-w-[400px]">
                                            <h3 className="text-2xl font-medium">{date.title}</h3>
                                            <p className="text-lg mt-5 mb-10 grow">{date.description}</p>
                                            <div className="text-lg text-primary">{date.date}</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <div className="flex items-center justify-between gap-5 mt-6 md:hidden">
                        <div className="flex items-center flex-1 gap-2">
                            {dates.map((_, index) => (
                                <div key={index} className={`h-px w-full ${activeSlide === index ? 'bg-primary' : 'bg-gray-text'}`} />
                            ))}
                        </div>
                        <div className="shrink-0">{activeSlide+1} of {dates.length}</div>
                    </div>
                </div>

            </div>
        </section>
    )
}
