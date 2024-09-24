import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';
import {navigationLinks} from "../../assets/utils/constants";

export default function NavBar() {
    const location = useLocation();
    const { projectId } = useParams();
    const [showMobileMenu, toggleMobileMenu] = useState<boolean>(false);

    useEffect(() => {
        if (showMobileMenu) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    }, [showMobileMenu]);

    useEffect(() => {
        if (showMobileMenu) toggleMobileMenu(false);
            if (location.pathname.includes('/project/')) {
                document.title = projectId?.split('-').join(' ') as string;
                return;
            }

        document.title = navigationLinks.filter(link => link.path === location.pathname)[0]?.title;
    }, [location]);

    return (
        <nav className="py-5 sm:py-10">
            <div className="container">
                <div className="flex items-center justify-between relative z-50">
                    {/*<SiteLogo />*/}
                    <div></div>

                    <ul className="hidden md:flex gap-7 text-light font-inter">
                        {navigationLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link.path}
                                    target={link.isInternalLink ? '_self' : '_blank'}
                                    className={`styled-link ${index === navigationLinks.length - 1 ? 'last-link' : ''}`}
                                >{link.label}</NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className={`flex md:hidden hamburger-toggle ${showMobileMenu ? 'toggle-open' : 'toggle-close'}`} onClick={() => toggleMobileMenu(!showMobileMenu)}>
                        <span className="hamburger-bar origin-[0_0]"></span>
                        <span className="hamburger-bar"></span>
                        <span className="hamburger-bar origin-[0_100%]"></span>
                    </div>
                </div>
            </div>

            { showMobileMenu && <section
                className="absolute top-0 left-0 z-30 bg-primary h-screen w-screen flex items-center justify-center">
                <div className="container">
                    <ul className="flex flex-col gap-5 text-light font-inter text-center">
                        <li className="text-lighter text-base uppercase opacity-60">Menu</li>
                        {navigationLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link.path}
                                    className={`styled-link mobile-link ${index === navigationLinks.length - 1 ? '!hidden' : ''}`}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="absolute bottom-0 left-0 bg-lighter/[0.06] w-full flex justify-center p-7">
                    <NavLink to="contact-us" className="styled-link last-link mobile-link">
                        Say Hello
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M10.97 14.47a.75.75 0 101.06 1.06l5-5a.75.75 0 000-1.06l-5-5a.75.75 0 10-1.06 1.06l3.72 3.72H4a.75.75 0 000 1.5h10.69l-3.72 3.72z"
                                  fill="currentColor">
                            </path>
                        </svg>
                    </NavLink>
                </div>
            </section>
            }
        </nav>
    )
};
