import { restaurantList } from "../config"
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


function filterData(searchText, restaurants) {

    return restaurants.filter((restaurant) => restaurant.info.name.includes(searchText));
}


const Body = () => {

    const [searchText, setSearchText] = useState("McD");
    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search" 
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button className="search-btn" onClick={() => {
                    const data = filterData(searchText, restaurants);
                    setRestaurants(data);
                }}>Search</button>
            </div>
            <div className="restaurant-list">
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                    })
                };
            </div>
        </>
    );
};

export default Body;