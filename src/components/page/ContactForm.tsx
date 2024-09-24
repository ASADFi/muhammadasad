import React, {useState, useRef, useEffect} from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ContactForm() {
    const services = ['Product Strategy', 'UX & UI Design', 'Development', 'Conversion'];
    const budget = ['Less than €5k', '€5k - €10k', '€10k - €20k', '€+20k'];

    const [selectedValue, setSelectedValue] = useState('');
    const [fileName, setFileName] = useState('');
    const [fileExtension, setFileExtension] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const lastDotIndex = file.name.lastIndexOf('.');
            const name = lastDotIndex === -1 ? file.name : file.name.slice(0, lastDotIndex);
            const extension = lastDotIndex === -1 ? '' : file.name.slice(lastDotIndex + 1);
            setFileName(name);
            setFileExtension(extension);
        } else {
            setFileName('');
            setFileExtension('');
        }
    };

    const removeSelectedFile = () => {
        setFileName('');
        setFileExtension('');
    }

    const handleRadioChange = (value: string) => {
        setSelectedValue(value);
    };

    const ContactFormSection = useRef<HTMLHeadingElement>(null);

    const scrollTriggerConfig = {
        trigger: ContactFormSection.current,
        start: 'top center'
    };

    useGSAP(() => {
        gsap.to('.contact-us-lamp', {
            opacity: 1,
            translateX: -350,
            translateY: 0,
            scrollTrigger: scrollTriggerConfig,
            delay: .3,
            duration: 1,
        });
        gsap.from('.section-header-text', {
            opacity: 0,
            scrollTrigger: scrollTriggerConfig,
            delay: 1.3
        });
        gsap.from('.contact-form', {
            opacity: 0,
            scrollTrigger: scrollTriggerConfig,
            delay: 1.8
        });
    });

    useEffect(() => {
        const contactForm = document.querySelector('.contact-form') as HTMLFormElement;
        const toggleLampLight = (on :boolean) => {
            const lampLight = document.querySelector('.lamp-light') as HTMLElement;
            if (lampLight) lampLight.style.opacity = on ? '1' : '0';
        }

        contactForm.addEventListener('mouseenter', () => toggleLampLight(true));
        contactForm.addEventListener('mouseleave', () => toggleLampLight(false));
    }, []);


    return (
        <div ref={ContactFormSection}>
            <svg width="708" height="648" viewBox="0 0 708 648" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-us-lamp max-md:hidden">
                <g className="js-svg-lamps-contact-us">
                    <g className="lamp-light svg-transition">
                        <path opacity="0.07" d="M707.5 424.945S426.367 647.418 347.133 647.418C267.9 647.418 10 426.945 10 426.945L279.952 157.1h134.295L707.5 424.945z" fill="url(#paint0_linear_122_2811)"></path>
                        <path opacity="0.07" d="M645.33 411.831S412.298 541.115 347.149 541.115c-65.15 0-288.198-129.284-288.198-129.284l232.885-272.289h110.608L645.33 411.831z" fill="url(#paint1_linear_122_2811)"></path>
                    </g>
                    <path d="M348-101h-2v209.648h2V-101z" fill="#263238"></path>
                    <path d="M420.241 146.63l-5.876 12.266H279.904l-5.859-12.266 46.447-49.955a36.391 36.391 0 0153.302 0l46.447 49.955z" fill="#2C32BB"></path>
                    <path d="M420.241 146.63l-5.892 12.266H279.904l-5.859-12.266h146.196z" fill="#1B209A"></path>
                    <path opacity="0.1" d="M420.241 146.63l-5.892 12.266H279.904l-5.859-12.266h146.196z" fill="#0D1175"></path>
                    <path opacity="0.1" d="M331.286 109.036l-.806-7.344 33.675-3.25-1.159 10.594h-31.71z" fill="#2C31BB"></path>
                </g>
                <defs>
                    <linearGradient id="paint0_linear_122_2811" x1="347.133" y1="157.1" x2="347.133" y2="477.418" gradientUnits="userSpaceOnUse">
                        <stop className="js-svg-lamps-contact-us-light-color" stopColor="#fff"></stop>
                        <stop className="js-svg-lamps-contact-us-light-color" offset="1" stopColor="#fff" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_122_2811" x1="347.14" y1="139.542" x2="347.14" y2="451.115" gradientUnits="userSpaceOnUse">
                        <stop className="js-svg-lamps-contact-us-light-color" stopColor="#fff"></stop>
                        <stop className="js-svg-lamps-contact-us-light-color" offset="1" stopColor="#fff" stopOpacity="0"></stop>
                    </linearGradient>
                </defs>
            </svg>

            <section className="mt-8 md:mt-[200px] relative">
                <div className="container">
                    <div className="section-header-text text-center">
                        <h2 className="section-header-subtitle">
                            CONTACT US
                        </h2>
                        <h3 className="section-header-main-heading">
                            Get in touch
                        </h3>
                    </div>

                    <div className="grid grid-cols-12 justify-center mb-5 mt-14 md:my-[120px]">
                        <div className="col-span-12 md:col-start-3 md:col-span-8">
                            <form className="flex flex-col gap-10 md:gap-16 contact-form">
                                <div>
                                    <label htmlFor="name">What's your name?</label>
                                    <input autoFocus={true} type="text" id="name" />
                                </div>

                                <div>
                                    <label htmlFor="email">What's your email?</label>
                                    <input type="email" id="email" />
                                </div>

                                <div>
                                    <label htmlFor="">How can we help you?</label>
                                    <div className="grid md:grid-cols-2 gap-3 md:gap-1 max-md:mt-3">
                                        {services.map((service, index) => {
                                            return <Checkbox key={index} label={service} />
                                        })}
                                    </div>


                                </div>

                                <div>
                                    <label htmlFor="">What’s your budget?</label>
                                    <div className="grid md:grid-cols-2 gap-1">
                                        {budget.map((range, index) => {
                                            return (
                                                <CustomRadioButton
                                                    key={index}
                                                    label={range}
                                                    isSelected={selectedValue === range}
                                                    value={range}
                                                    onChange={handleRadioChange}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="desc">What can you tell us about it?</label>
                                    <input type="text" id="desc" />
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2.5 relative">
                                        {fileName && (
                                            <div
                                                className="absolute max-lg:top-10 lg:relative py-2 px-3 border border-[#363b3f]">{fileName}
                                                <span className="text-gray-text">.{fileExtension}</span>
                                                <div onClick={removeSelectedFile}
                                                     className="absolute top-[-10px] right-[-10px] bg-[#040b10] cursor-pointer">
                                                    <svg className="transform rotate-45 text-primary" width="20"
                                                         height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 3.5v13M3.5 10h13" stroke="currentColor"
                                                              strokeWidth="1.5" strokeLinecap="round"
                                                              strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex items-center gap-2.5 text-sm font-medium relative">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 className="styles_file-input__icon__1LT1X">
                                                <path
                                                    d="M17.374 13.119c.098-1.172-.23-2.233-.925-2.99l-7.32-7.966a.424.424 0 00-.635 0 .52.52 0 000 .692l7.319 7.968c.502.547.738 1.33.665 2.207-.072.856-.43 1.693-.985 2.296a3.363 3.363 0 01-2.108 1.071c-.801.08-1.525-.177-2.028-.724L3.084 6.666c-.441-.48-.477-1.08-.429-1.498.068-.586.34-1.177.747-1.62.765-.833 2.077-1.202 2.864-.347l6.683 7.275c.503.548.011 1.373-.319 1.732-.33.36-1.088.895-1.59.346L5.947 7.012a.424.424 0 00-.637 0 .52.52 0 000 .693l5.091 5.543c.837.91 2.074.514 2.864-.347.791-.86 1.154-2.208.319-3.117L6.902 2.509c-1.179-1.284-3.065-.82-4.136.346a3.98 3.98 0 00-1.004 2.19c-.103.899.14 1.72.686 2.314l8.273 9.006c.614.669 1.448 1.026 2.376 1.026.122 0 .245-.006.37-.018.992-.098 1.962-.592 2.662-1.355.701-.762 1.154-1.819 1.245-2.9z"
                                                    fill="currentColor"></path>
                                            </svg>
                                            <span className="text-light underline">Add Attachment</span>
                                            <div className="text-gray-text">(Optional)</div>
                                            <input type="file" onChange={handleFileChange}
                                                   className="w-full absolute indent-[-9999px] top-0 bottom-0 left-0 right-0 cursor-pointer overflow-hidden"/>
                                        </div>
                                    </div>

                                    <button className="primary-btn" type="button">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

interface CheckboxProp {
    label :string
}

function Checkbox({ label } :CheckboxProp) {
    return (
        <div className="inline-flex items-center gap-3 group mr-4">
            <div>
                <input type="checkbox" className="opacity-0 absolute h-4 w-4"/>
                <div className="custom-checkbox">
                    <svg
                        className="fill-current hidden w-2 h-2 text-primary pointer-events-none"
                        version="1.1" viewBox="0 0 17 12"
                        xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="evenodd">
                            <g transform="translate(-9 -11)" fill="currentColor"
                               fillRule="nonzero">
                                <path
                                    d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"/>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <label htmlFor="" className="checkbox-label">{label}</label>
        </div>
    )
}


interface CustomRadioButtonProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    isSelected: boolean;
}

function CustomRadioButton({ label, value, onChange, isSelected } :CustomRadioButtonProps) {
    return (
        <label className="inline-flex items-center group cursor-pointer gap-2">
            <input
                type="radio"
                value={value}
                checked={isSelected}
                onChange={() => onChange(value)}
                className="sr-only peer" // Hide the default radio button visually
            />
            <div className="relative w-4 h-4 rounded-full border-[1.5px] border-[#363b3f]
        peer-checked:bg-transparent group-hover:border-primary peer-checked:border-primary
        transition-all duration-200 ease-in-out">
                {isSelected && ( // Show inner circle only when selected
                    <div className="w-2 h-2 rounded-full bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                )}
            </div>
            <label className="checkbox-label">{label}</label>
        </label>
    );
}
