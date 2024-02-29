import { Outlet } from "react-router-dom";
import ProfileCC from "./ProfileClass";
import ProfileFC from "./Profile";
import React from "react";

// const About = () => {
//     return (
//         <div>
//             <h1>About Us Page</h1>
//             <p>
//                 This is Namaste React Live Course Chapter 07 - Finding the Path
//             </p>

//             <ProfileFC name={"Utkarsh"}/>
//             <ProfileCC name={"Utkarsh"}/>
//         </div>
//     );
// };

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent - constructor");
    }
    componentDidMount() {
        console.log("Parent - componentDidMount");
    }
    
    render() {
        console.log("Parent - render");
        return (
            <div>
                <h1>About Us Page</h1>
                <p>
                    This is Namaste React Live Course Chapter 07 - Finding the Path
                </p>
                <ProfileCC name={"First Child"}/>
            </div>
        );
    };
};

export default About;