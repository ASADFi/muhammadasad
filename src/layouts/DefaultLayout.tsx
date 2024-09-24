import {Outlet, useLocation} from "react-router-dom";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import {useEffect} from "react";

export default function DefaultLayout() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <div className={`flex flex-col bg-dark text-light font-inter ${location.pathname === '/process' ? 'dotted-styled-bg' : ''}`}>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
