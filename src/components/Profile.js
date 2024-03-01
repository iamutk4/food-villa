import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Hello");
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <div>
            <h1>Profile Functional Component</h1>
            <h2>Name: {props.name}</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(1)}>setCount</button>
        </div>
    );
};

export default Profile;