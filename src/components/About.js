import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileComponent from "./Profile";

const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <p>
                This is Namaste React Live Course Chapter 07 - Finding the Path
            </p>

            <ProfileComponent name={"Utkarsh"}/>
            <Profile name={"Utkarsh"}/>
        </div>
    );
};

export default About;