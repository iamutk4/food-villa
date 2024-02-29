import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const params = useParams();
    const {id} = params;

    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + id + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setRestaurantInfo(json);
    }

    return (!restaurantInfo) ? <Shimmer /> : (
        <div className="menu">
            <div>
                <h1>Restaurant ID: {restaurantInfo?.data?.cards[0]?.card?.card?.info?.id}</h1>
                <h2>{restaurantInfo?.data?.cards[0]?.card?.card?.info?.name}</h2>
                <img src={IMG_CDN_URL + restaurantInfo?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
                <h3>{restaurantInfo?.data?.cards[0]?.card?.card?.info?.areaName}</h3>
                <h3>{restaurantInfo?.data?.cards[0]?.card?.card?.info?.city}</h3>
                <h3>{restaurantInfo?.data?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
                <h3>{restaurantInfo?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {
                        (restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards).
                        map((item) => (
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;