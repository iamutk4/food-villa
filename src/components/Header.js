import { useState } from "react";
import Logo from "../assets/img/img.png";

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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
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