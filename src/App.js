import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/**
            Header
                - Logo
                - Nav items (Right side)
                - Cart
            Body
                - Search bar
                - Restaraunt List
                    - Restaurant Card
                        - Image
                        - Name
                        - Rating
                        - Cuisine
            Footer
                - Links
                - Copyright
        */

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
