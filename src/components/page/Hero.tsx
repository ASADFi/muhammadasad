import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {PortfolioOwner} from "../../assets/utils/constants";

export default function Hero() {
    const followerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!headingRef.current) return;

            const headingRect = headingRef.current.getBoundingClientRect();
            // Check if mouse is within heading bounds
            if (
                event.clientX >= headingRect.left &&
                event.clientX <= headingRect.right &&
                event.clientY >= headingRect.top &&
                event.clientY <= headingRect.bottom
            ) {
                // Calculate position relative to heading, clamped within bounds
                const x = Math.round(event.clientX - headingRect.left);
                const y = Math.round(event.clientY - headingRect.top);

                if (followerRef.current) {
                    followerRef.current.style.left = `${x}px`;
                    followerRef.current.style.top = `${y}px`;
                    if (followerRef.current.classList.contains('mouse-left')) {
                        setTimeout(() => {
                            if (followerRef.current) followerRef.current.classList.remove('mouse-left');
                        }, 500);
                    }

                }
            }
        };

        const handleMouseLeave = () => {
            if (followerRef.current) {
                followerRef.current.style.left = `20%`;
                followerRef.current.style.top = `75%`;
                followerRef.current.classList.add('mouse-left');
            }
        }



        if (headingRef.current) {
            headingRef.current.addEventListener('mousemove', function (event) {
                handleMouseMove(event);
            })
            headingRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            // if (headingRef.current) headingRef.current.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.hero-text', {
            opacity: 0,
            translateY: 50,
            scrollTrigger: {
                trigger: container.current,
                start: 'top center'
            },
            delay: .5
        });
        gsap.from('.site-name', {
            opacity: 0,
            scrollTrigger: {
                trigger: container.current,
                start: 'top center'
            },
        });
        gsap.from('.heading-text-piece', {
            opacity: 0,
            scrollTrigger: {
                trigger: container.current,
                start: 'top center'
            },
            delay: .5
        });
    });

    return (
        <div className="home-view mt-10 md:mt-20 lg:pr-10">
            <div className="container 2xl:ml-60" ref={container}>
                <div className="flex">
                    <h1 ref={headingRef} className="hero-heading">
                        <span className="heading-text-piece">I'm</span><br/>
                        <div>
                            <span className="site-name">{PortfolioOwner.FirstName}</span>&nbsp;
                            <span className="heading-text-piece">{PortfolioOwner.LastName}.</span>
                        </div>
                        <div ref={followerRef} className="heading-overlay mouse-left max-md:hidden"></div>
                    </h1>
                </div>

                <div className="flex">
                    <div className="w-full 2xl:w-8/12">
                        <h2 className="hero-text">
                            I have 8 years of experience as a full-stack developer, specializing in Mobile And Web
                            Applications. On the frontend, I'm skilled in React-Native, Java, Kotlin, Swift, Next.js,
                            Vue.js and React.js. For backend development, I'm adept in Node.js, Express, Next.js and
                            have experience working with both NoSQL databases like MongoDB and SQL databases like
                            PostgresSql.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
