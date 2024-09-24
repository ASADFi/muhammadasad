import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";

export default function ProductStrategy() {
    useGSAP(() => {
        const matchMedia = gsap.matchMedia();
        matchMedia.add({
            small: '(max-width: 767px)',
            large: '(min-width: 768px)',
            xlarge: '(min-width: 1024px)',
        }, (ctx) => {
            const {small, large, xlarge} = ctx.conditions ?? {};

            gsap.from('.product-strategy-section', {
                opacity: 0,
                delay: 3,
                padding: () => window.innerWidth >= 1400 ? '68px 0' : '140px 0'
            });

            if (xlarge) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.product-strategy-section',
                        start: 'top top',
                        end: `+=800`,
                        pin: true,
                        scrub: true,
                    },
                })
                tl.to('.strategy-content', { opacity: 0, duration: 0.5 });
                tl.fromTo('.client-message-1', {
                    xPercent: 12,
                    yPercent: -51
                }, {
                    xPercent: -219,
                    yPercent: -44
                })
                tl.fromTo('.concealed-message-1', {
                    xPercent: 46,
                    yPercent: -3
                }, {
                    xPercent: -106,
                    yPercent: -44
                })
                tl.fromTo('.client-message-2', {
                    xPercent: 79,
                    yPercent: -80
                }, {
                    xPercent: 6.5,
                    yPercent: -44
                })
                tl.fromTo('.concealed-message-2', {
                    xPercent: 119,
                    yPercent: -45
                }, {
                    xPercent: 119,
                    yPercent: -45
                })
                tl.from('.section-arrow', { opacity: 0 })
            }
            else if (large) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.product-strategy-section',
                        start: 'top top',
                        end: `+=800`,
                        pin: true,
                        scrub: true,
                    },
                })
                tl.to('.strategy-content', { opacity: 0, duration: 0.5 });
                tl.fromTo('.client-message-1', {
                    xPercent: 0,
                    yPercent: -50
                }, {
                    xPercent: -192,
                    yPercent: -45
                })
                tl.fromTo('.concealed-message-1', {
                    xPercent: 35,
                    yPercent: -11
                }, {
                    xPercent: -97,
                    yPercent: -45
                })
                tl.fromTo('.client-message-2', {
                    xPercent: 60,
                    yPercent: -74
                }, {
                    xPercent: -2,
                    yPercent: -45
                })
                tl.fromTo('.concealed-message-2', {
                    xPercent: 93,
                    yPercent: -46
                }, {
                    xPercent: 93,
                    yPercent: -46
                })
                tl.from('.section-arrow', { opacity: 0 })
            }
            if (small) {
               const smtl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.product-strategy-conversation',
                        start: 'top center',
                        end: 'bottom center+=100',
                        scrub: true,
                    }
                })
                smtl.to('.product-strategy-message.concealed-message-1', {
                        yPercent: -85,
                    }, 0)
                smtl.to('.product-strategy-message.client-message-2', {
                        yPercent: -215,
                    }, '<+=0.3')
                smtl.to('.product-strategy-message.concealed-message-2', {
                        yPercent: -271,
                    }, '<+=0.1');

            }
        })
    })
    return (
        <section className="product-strategy-section">
            <div className="container 2xl:py-40">
                <div className="flex max-md:flex-col items-center relative">
                    <div className="col-span-12 md:col-span-5">
                        <div className="strategy-content max-w-[450px] xl:max-w-[510px] max-md:mb-10">
                            <h2 className="process-title">Product Strategy</h2>
                            <p className="process-desc">
                                Each collaboration starts with a thorough investigation of the product’s business,
                                analysis of its key features and definition of the optimal strategy for developing it.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-7 block md:ml-[8.9%]">
                        <div className="product-strategy-conversation">
                            <div className="product-strategy-message client-message-1">
                                <p>
                                    I have an idea: it’s a new product in this business that will revolutionize its user’s lives.
                                </p>
                                <small className="mt-4 opacity-60">Client</small>
                            </div>
                            <div className="product-strategy-message concealed-message-1">
                                <p>
                                    That solution sounds incredible! We looked into the possible competitors and we suggest this strategy.
                                </p>
                                <small className="mt-4 opacity-60">Concealed</small>
                            </div>
                            <div className="product-strategy-message client-message-2">
                                <p>
                                    Loved the detailed plan, let’s start working on it as soon as possible!
                                </p>
                                <small className="mt-4 opacity-60">Client</small>
                            </div>
                            <div className="product-strategy-message concealed-message-2">
                                <p>
                                    Perfect, we’ll set up the communication channels and kickstart the project immediately.
                                </p>
                                <small className="mt-4 opacity-60">Concealed</small>
                            </div>

                                <div className="section-arrow hidden overflow-hidden md:block absolute w-[298px] md:top-1/2 md:left-1/2 opacity-70 translate-y-[-170px] translate-x-[-115%] xl:translate-y-[-190px] xl:translate-x-[-165%] max-xl:scale-[.8]">
                                    <svg fill="none" height="58" viewBox="0 0 178 58" width="178" xmlns="http://www.w3.org/2000/svg"><path d="M1 32C9.23 16.869 39.642-9.551 95.443 5.816c55.8 15.367 76.571 43.407 79.138 51.668m0 0l2.505-7.551m-2.505 7.551l-7.118-1.96" opacity="0.9" stroke="#fcfcfa" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </div>

                                <div className="section-arrow hidden overflow-hidden md:block absolute md:left-[40%] opacity-70 bottom-[-40px] xl:left-[47%] xl:bottom-[-80px] max-xl:scale-[.8]">
                                    <svg fill="none" height="46" viewBox="0 0 177 46" width="177" xmlns="http://www.w3.org/2000/svg"><path d="M.782.914c4.882 14.84 28.996 44.52 86.403 44.52 57.406 0 83.376-19.038 87.574-25.482m0 0l.879 7.03m-.879-7.03h-7.322" opacity="0.9" stroke="#fcfcfa" strokeLinecap="round" strokeLinejoin="round"></path></svg>                        </div>

                                <div className="section-arrow hidden overflow-hidden md:block absolute md:top-1/2 md:left-1/2 opacity-70 translate-y-[-170px] translate-x-[120%] xl:translate-y-[-190px] xl:translate-x-[150%] max-xl:scale-[.8]">
                                    <svg fill="none" height="58" viewBox="0 0 178 58" width="178" xmlns="http://www.w3.org/2000/svg"><path d="M1 32C9.23 16.869 39.642-9.551 95.443 5.816c55.8 15.367 76.571 43.407 79.138 51.668m0 0l2.505-7.551m-2.505 7.551l-7.118-1.96" opacity="0.9" stroke="#fcfcfa" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
