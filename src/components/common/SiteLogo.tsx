import { Link } from "react-router-dom";

function SiteLogo() {
    return <Link to="/">
        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M.036 10.245c1.114 5.472 5.871 9.585 11.572 9.585a11.64 11.64 0 007.178-2.472l3.192 2.289C19.679 22.315 16.301 24 12.542 24 5.615 24 0 18.28 0 11.224c0-.282.009-.562.027-.84l.01-.14zM11.608 0c2.133 0 4.048.891 5.435 2.328l2.452-1.76A12.59 12.59 0 0122 2.786l-3.69 2.647c-1.471-1.524-3.503-2.47-5.768-2.47-4.255 0-7.744 3.337-8.083 7.582a7.896 7.896 0 01-.493-2.756C3.966 3.487 7.387 0 11.608 0z"
                  fill="currentColor"></path>
        </svg>
    </Link>
}

export default SiteLogo
