import { useState } from "react";
import Logo from "../assets/img/img.png";
import { Link } from "react-router-dom";

const loggedInUser = () => {
    // API call to check authentication
    return true;
};

const Title = () => (
    <a href="/">
        <img 
            className="logo"
            src={Logo}
            alt="logo"/>
    </a>
);

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            Cart
                        </Link>
                    </li>
                </ul>
            </div>
            {
                isLoggedIn ? (
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                ) : (
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                )
            }
            
            
        </div>
    );
};

export default Header;