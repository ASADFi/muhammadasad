import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Perks() {
    const benefits = [
        {
            title: 'Health Insurance',
            description: 'The most important thing in life is our health.',
            icon: <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><g className="[transform:matrix(0.8,0,0,0.8,5.8,5.821)] group-hover:[transform:matrix(1,0,0,1,0,0)] svg-transition" data-svg-origin="29.000003814697266 29.10499858856201" transform="matrix(0.8,0,0,0.8,5.8,5.821)"><mask id="path-1-inside-1_50_980" fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 20.368c0 4.564 2.184 8.618 5.564 11.174l20.09 20.09 19.6-19.955A13.98 13.98 0 0054.5 20.368c0-7.732-6.268-14-14-14A13.984 13.984 0 0029 12.382a13.984 13.984 0 00-11.5-6.014c-7.732 0-14 6.268-14 14z"></path></mask><path fillRule="evenodd" clipRule="evenodd" d="M3.5 20.368c0 4.564 2.184 8.618 5.564 11.174l20.09 20.09 19.6-19.955A13.98 13.98 0 0054.5 20.368c0-7.732-6.268-14-14-14A13.984 13.984 0 0029 12.382a13.984 13.984 0 00-11.5-6.014c-7.732 0-14 6.268-14 14z" fill="#3D43D8" fillOpacity="0.8"></path><path d="M9.064 31.542l.354-.353-.025-.025-.027-.02-.302.398zm20.09 20.09l-.354.354.357.356.354-.36-.357-.35zm19.6-19.955l-.295-.404-.033.024-.028.03.356.35zM29 12.382l-.41.285.41.59.41-.59-.41-.285zM9.366 31.143A13.478 13.478 0 014 20.368H3c0 4.728 2.263 8.927 5.763 11.573l.603-.798zM29.508 51.28l-20.09-20.09-.707.707 20.09 20.09.707-.707zm18.89-19.952l-19.6 19.955.713.7 19.6-19.955-.713-.7zM54 20.368a13.48 13.48 0 01-5.54 10.905l.59.808A14.48 14.48 0 0055 20.368h-1zm-13.5-13.5c7.456 0 13.5 6.044 13.5 13.5h1c0-8.008-6.492-14.5-14.5-14.5v1zm-11.09 5.8a13.484 13.484 0 0111.09-5.8v-1a14.484 14.484 0 00-11.91 6.228l.82.571zm-11.91-5.8c4.593 0 8.65 2.293 11.09 5.8l.82-.572A14.484 14.484 0 0017.5 5.868v1zM4 20.368c0-7.456 6.044-13.5 13.5-13.5v-1C9.492 5.868 3 12.36 3 20.368h1z" fill="#fff" mask="url(#path-1-inside-1_50_980)"></path></g></svg>
        },
        {
            title: '€50/Month Wellness Stipend',
            description: 'Gym, massages, the works. Treat yourself!',
            icon: <svg width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="js-svg-monthly-wellness-card" fill="#3D43D8" fill-opacity="0.8" stroke="#fff" stroke-width="0.4" d="M10.555 17.361L45.14 8.094l5.24 19.553-34.585 9.266z" data-svg-origin="30.467498779296875 22.503499031066895" transform="matrix(0.98481,0.17365,-0.17365,0.98481,4.37053,-1.94885)"></path><g className="js-svg-monthly-wellness-wallet" data-svg-origin="7.4079999923706055 15.119999885559082" transform="matrix(1,0,0,1,0,-3)"><path className="js-svg-monthly-wellness-wallet-main-path" fill="#3D43D8" fill-opacity="0.8" stroke="#fff" stroke-width="0.4" d="M7.408 15.12h43.85v34.799H7.408z"></path><path fill="#3D43D8" fill-opacity="0.8" stroke="#fff" stroke-width="0.4" d="M7.408 15.152h35.804v34.799H7.408z"></path><path d="M36.573 35.569a5.331 5.331 0 015.331-5.331h9.354V40.9h-9.354a5.331 5.331 0 01-5.331-5.331z" fill="#3B41D0" stroke="#fff" stroke-width="0.4"></path></g></svg>
        },
        {
            title: 'Remote Work and Flexible Schedule',
            description: 'Work from anywhere, anytime: you decide.',
            icon: <svg width="59" height="58" viewBox="0 0 59 58" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path className="js-remote-work-base-path" d="M53.349 47.05c0 .748-.579 1.527-1.789 2.283-1.198.748-2.948 1.43-5.132 2.007-4.365 1.153-10.409 1.87-17.095 1.87-6.685 0-12.729-.717-17.094-1.87-2.185-.577-3.934-1.259-5.132-2.007-1.211-.756-1.789-1.535-1.789-2.283 0-.749.578-1.527 1.789-2.283 1.198-.748 2.947-1.431 5.132-2.008 4.365-1.153 10.409-1.869 17.094-1.869 6.686 0 12.73.716 17.095 1.869 2.184.577 3.934 1.26 5.132 2.008 1.21.756 1.789 1.534 1.789 2.283z" fill="#3d43d8" fill-opacity="0.8" fill-rule="nonzero" stroke="#fff" stroke-width="0.5" data-svg-origin="5.31799840927124 40.88999938964844" transform="matrix(1,0,0,1,0,-1)"></path><g className="js-remote-work-location-mark" data-svg-origin="29.028013229370117 24.301000595092773" transform="matrix(0.9,0,0,0.9,2.9028,5.4301)"><path d="M41.851 30.6l-.396-.305-.326.423.443.297.279-.415zm-22.982 2.724l.36-.348-.022-.022-.024-.019-.314.389zm10.16 10.521l-.36.347.357.369.36-.366-.357-.35zm12.934-13.169l.357.35.422-.429-.5-.336-.279.415zm2.749-9.951c0 3.603-1.215 6.922-3.257 9.57l.792.611a16.613 16.613 0 003.465-10.181h-1zM29.028 5.041c8.662 0 15.684 7.022 15.684 15.684h1c0-9.215-7.47-16.684-16.684-16.684v1zM13.344 20.725c0-8.662 7.022-15.684 15.684-15.684v-1c-9.214 0-16.684 7.469-16.684 16.684h1zm5.839 12.21a15.656 15.656 0 01-5.839-12.21h-1c0 5.248 2.424 9.93 6.211 12.988l.628-.778zm10.206 10.562l-10.16-10.521-.72.695 10.16 10.521.72-.695zm12.218-13.171L28.672 43.494l.714.701L42.32 31.026l-.713-.7zm-.035.689l.113.076.557-.83-.112-.076-.558.83z" fill="#fff" fill-rule="nonzero"></path><path d="M41.851 30.6a16.108 16.108 0 003.361-9.875c0-8.939-7.246-16.184-16.184-16.184s-16.184 7.245-16.184 16.184c0 5.09 2.35 9.632 6.025 12.599l10.16 10.521 12.934-13.169-.112-.076zm-5.768-10.059c0 3.712-3.229 6.75-7.25 6.75-4.02 0-7.25-3.038-7.25-6.75s3.23-6.75 7.25-6.75c4.021 0 7.25 3.038 7.25 6.75z" fill="#3d43d8" fill-opacity="0.8"></path><path d="M36.083 20.541c0 3.712-3.229 6.75-7.25 6.75-4.02 0-7.25-3.038-7.25-6.75s3.23-6.75 7.25-6.75c4.021 0 7.25 3.038 7.25 6.75z" fill="none" stroke="#fff" stroke-width="0.5"></path></g></svg>
        },
        {
            title: 'Birthday Leave',
            description: 'Take any day of your birthday week off, go celebrate it in style',
            icon: <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h58v58H0z"></path><g className="js-svg-birthday-leave-circles" fill="#3D43D8" fill-opacity="0.8" stroke="#fff" stroke-width="0.5" data-svg-origin="4.499999523162842 28.309999465942383" transform="matrix(1,0,0,1,0,0)"><path d="M53.5 44.872c0 .766-.592 1.561-1.827 2.333-1.223.763-3.008 1.46-5.236 2.048C41.984 50.429 35.819 51.16 29 51.16c-6.82 0-12.984-.73-17.437-1.907-2.228-.589-4.013-1.285-5.236-2.048-1.235-.772-1.827-1.567-1.827-2.333 0-.767.592-1.562 1.827-2.333 1.223-.763 3.008-1.46 5.236-2.048 4.453-1.177 10.618-1.907 17.437-1.907 6.82 0 12.984.73 17.437 1.907 2.228.588 4.013 1.285 5.236 2.048 1.235.771 1.827 1.566 1.827 2.333z"></path><path d="M53.5 34.597c0 .767-.592 1.562-1.827 2.333-1.223.763-3.008 1.46-5.236 2.048-4.453 1.177-10.618 1.907-17.437 1.907-6.82 0-12.984-.73-17.437-1.907-2.228-.588-4.013-1.285-5.236-2.048-1.235-.771-1.827-1.566-1.827-2.333 0-.766.592-1.561 1.827-2.332 1.223-.764 3.008-1.46 5.236-2.049C16.016 29.04 22.181 28.31 29 28.31c6.82 0 12.984.73 17.437 1.906 2.228.589 4.013 1.285 5.236 2.049 1.235.771 1.827 1.566 1.827 2.332z"></path></g><g className="js-svg-birthday-leave-candles" data-svg-origin="9.790995597839355 5.881000995635986" transform="matrix(1,0,0,1,0,5)"><g className="js-svg-birthday-leave-center-candle"><mask id="path-3-inside-1_714_3423" fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M24.38 10.88a5.242 5.242 0 108.332.033l.086-.057-4.265-4.265-4.19 4.265.037.025z"></path></mask><path fillRule="evenodd" clipRule="evenodd" d="M24.38 10.88a5.242 5.242 0 108.332.033l.086-.057-4.265-4.265-4.19 4.265.037.025z" fill="#3D43D8" fillOpacity="0.8"></path><path d="M24.38 10.88l.396.306.326-.422-.443-.298-.279.415zm8.332.034l-.276-.418-.446.294.323.426.398-.302zm.086-.058l.276.418.511-.338-.433-.433-.354.353zm-4.265-4.265l.354-.354-.357-.356-.354.36.357.35zm-4.19 4.265l-.356-.35-.422.43.5.335.278-.415zm-.552 3.224c0-1.09.367-2.093.985-2.894l-.792-.61a5.72 5.72 0 00-1.193 3.504h1zm4.742 4.742a4.742 4.742 0 01-4.742-4.742h-1a5.742 5.742 0 005.742 5.742v-1zm4.742-4.742a4.742 4.742 0 01-4.742 4.742v1a5.742 5.742 0 005.742-5.742h-1zm-.962-2.864a4.72 4.72 0 01.962 2.864h1a5.72 5.72 0 00-1.165-3.469l-.797.605zm.21-.777l-.087.057.55.835.088-.057-.551-.835zm-4.344-3.495l4.266 4.266.707-.707-4.265-4.266-.708.707zM24.7 11.207l4.19-4.266-.714-.7-4.19 4.265.714.7zm-.041-.741l-.037-.025-.558.83.037.025.558-.83z" fill="#fff" mask="url(#path-3-inside-1_714_3423)"></path></g><g className="js-svg-birthday-leave-right-candle"><mask id="path-5-inside-2_714_3423" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.38 16.881a5.242 5.242 0 108.331.033l.087-.057-4.265-4.266-4.19 4.266.037.024z"></path></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M37.38 16.881a5.242 5.242 0 108.331.033l.087-.057-4.265-4.266-4.19 4.266.037.024z" fill="#3D43D8" fill-opacity="0.8"></path><path d="M37.38 16.881l.396.305.326-.422-.443-.298-.279.415zm8.331.033l-.275-.418-.446.295.323.425.398-.302zm.087-.058l.276.418.511-.338-.433-.433-.354.354zm-4.265-4.265l.353-.353-.356-.357-.354.36.357.35zm-4.19 4.266l-.356-.35-.422.429.5.335.278-.415zm-.552 3.223c0-1.09.367-2.093.985-2.893l-.792-.611a5.72 5.72 0 00-1.193 3.504h1zm4.742 4.742a4.742 4.742 0 01-4.742-4.742h-1a5.742 5.742 0 005.742 5.742v-1zm4.742-4.742a4.742 4.742 0 01-4.742 4.742v1a5.742 5.742 0 005.742-5.742h-1zm-.962-2.864c.604.796.962 1.787.962 2.864h1a5.72 5.72 0 00-1.165-3.468l-.797.604zm.21-.777l-.087.058.55.834.088-.057-.551-.835zm-4.344-3.494l4.266 4.265.707-.707-4.266-4.265-.707.707zM37.7 17.207l4.19-4.266-.714-.7-4.19 4.265.714.7zm-.041-.74l-.037-.025-.558.83.037.024.558-.83z" fill="#fff" mask="url(#path-5-inside-2_714_3423)"></path></g><g className="js-svg-birthday-leave-left-candle"><mask id="path-7-inside-3_714_3423" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.38 16.881a5.242 5.242 0 108.332.033l.086-.057-4.265-4.266-4.19 4.266.037.024z"></path></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M11.38 16.881a5.242 5.242 0 108.332.033l.086-.057-4.265-4.266-4.19 4.266.037.024z" fill="#3D43D8" fill-opacity="0.8"></path><path d="M11.38 16.881l.396.305.326-.422-.443-.298-.279.415zm8.332.033l-.276-.418-.446.295.323.425.399-.302zm.086-.058l.276.418.511-.338-.433-.433-.354.354zm-4.265-4.265l.354-.353-.357-.357-.354.36.357.35zm-4.19 4.266l-.356-.35-.422.429.5.335.278-.415zm-.552 3.223c0-1.09.367-2.093.985-2.893l-.792-.611a5.72 5.72 0 00-1.193 3.504h1zm4.742 4.742a4.742 4.742 0 01-4.742-4.742h-1a5.742 5.742 0 005.742 5.742v-1zm4.742-4.742a4.742 4.742 0 01-4.742 4.742v1a5.742 5.742 0 005.742-5.742h-1zm-.962-2.864c.604.796.962 1.787.962 2.864h1a5.72 5.72 0 00-1.165-3.468l-.797.604zm.21-.777l-.087.058.55.834.088-.057-.551-.835zm-4.344-3.494l4.266 4.265.707-.707-4.266-4.265-.707.707zM11.7 17.207l4.19-4.266-.714-.7-4.19 4.265.714.7zm-.041-.74l-.037-.025-.558.83.037.024.558-.83z" fill="#fff" mask="url(#path-7-inside-3_714_3423)"></path></g></g></svg>
        },
        {
            title: 'Company Tech',
            description: 'Whatever equipment you need to work – we’ll send it to you.',
            icon: <svg width="58" height="58" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clipRule="evenodd" className="styles_card__icon__Vh26k "><path fill="#3238b0" stroke="#fff" strokeWidth="0.441015" d="M41.624 3.421h3.528v35.826h-3.528z"></path><path d="M27.127 25.458c0-.974-.79-1.764-1.764-1.764h-11.94v3.528h10.176v27.357h3.528V25.458z" fill="#3238b0" stroke="#fff" strokeWidth="0.441015" strokeLinejoin="round"></path><circle className="js-company-tech-right-circle" cx="43.5" cy="38" r="5.75" fill="#3238b0" stroke="#fff" strokeWidth="0.5" data-svg-origin="37.75 32.25" transform="matrix(1,0,0,1,0,0)"></circle><circle className="js-company-tech-left-circle" cx="12" cy="25" r="5.75" fill="#3238b0" stroke="#fff" strokeWidth="0.5" data-svg-origin="6.25 19.25" transform="matrix(1,0,0,1,0,0)"></circle></svg>
        },
        {
            title: 'Annual Team Retreat',
            description: 'In addition to our quarterly dinners, we get together for a full week once a year to cook, laugh and get to know each other even better.',
            icon: <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles_card__icon__Vh26k "><g className="js-team-retreat-left-person" data-svg-origin="5.928999900817871 15.911999702453613" transform="matrix(1,0,0,1,-4,0)"><rect x="13.025" y="15.912" width="8.171" height="8.171" rx="4.086" fill="#3D43D8" fill-opacity="0.8" stroke="#fff" stroke-width="0.43"></rect><mask id="path-2-inside-1_1225_3804" fill="#fff"><path d="M30.013 38.448A12.043 12.043 0 006.846 33.84a12.041 12.041 0 00-.917 4.608h24.084z"></path></mask><path d="M30.013 38.448A12.043 12.043 0 006.846 33.84a12.041 12.041 0 00-.917 4.608h24.084z" fill="#3D43D8" stroke="#fff" stroke-width="0.86" mask="url(#path-2-inside-1_1225_3804)"></path></g><g className="js-team-retreat-right-person" data-svg-origin="29.90399932861328 15.911999702453613" transform="matrix(1,0,0,1,4,0)"><rect x="37.861" y="15.912" width="8.171" height="8.171" rx="4.086" fill="#3D43D8" fill-opacity="0.8" stroke="#fff" stroke-width="0.43"></rect><mask id="path-5-inside-2_1225_3804" fill="#fff"><path d="M53.989 38.448A12.043 12.043 0 0030.82 33.84a12.042 12.042 0 00-.916 4.608h24.084z"></path></mask><path d="M53.989 38.448A12.043 12.043 0 0030.82 33.84a12.042 12.042 0 00-.916 4.608h24.084z" fill="#3D43D8" stroke="#fff" stroke-width="0.86" mask="url(#path-5-inside-2_1225_3804)"></path></g><g className="js-team-retreat-center-person"><rect x="25.658" y="20.848" width="8.171" height="8.171" rx="4.086" fill="#3D43D8" fill-opacity="0.8" stroke="#fff" stroke-width="0.43"></rect><mask id="path-6-inside-3_1225_3804" fill="#fff"><path d="M41.786 43.382a12.043 12.043 0 00-23.168-4.608 12.043 12.043 0 00-.916 4.608h24.084z"></path></mask><path d="M41.786 43.382a12.043 12.043 0 00-23.168-4.608 12.043 12.043 0 00-.916 4.608h24.084z" fill="#3D43D8" stroke="#fff" stroke-width="0.86" mask="url(#path-6-inside-3_1225_3804)"></path></g></svg>
        }
    ];

    const PerksSection = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        gsap.from('.team-perk', {
            opacity: 0,
            translateY: 50,
            stagger: .7,
            scrollTrigger: {
                trigger: PerksSection.current,
                start: 'top center'
            },
        });
    });
    return (
        <section className="perks-section mt-32 xl:mt-60">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-header-subtitle">
                        Perks
                    </h2>
                    <h3 className="section-header-heading max-w-[620px] mx-auto">
                        Do great work, live an amazing life
                    </h3>
                </div>
            </div>

            <div className="career-perks">
                <div className="container">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-8 mt-24 relative z-20">
                        {benefits.map((benefit, index) => {
                                return (<div className="flex flex-col team-perk" key={index}>
                                        {benefit.icon}
                                        <h4 className="lg:text-lg lg:mt-5 lg:mb-2 xl:text-2xl font-medium">{benefit.title}</h4>
                                        <p className="text-gray-text text-base xl:text-lg">{benefit.description}</p>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
             </div>
        </section>
    )
}
