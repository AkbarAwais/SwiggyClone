import RestaurantCart, { PromotedRestaurantCart } from "./RestaurantCart"
import { useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Courosel from "./Courosel";
import React from "react";

const Body = () => {
    let [restaurantDataObj, setRestaurantDataObj] = useState([]);
    let [couroselData, setcouroselData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const RestaurantCartPromoted = PromotedRestaurantCart(RestaurantCart);
    const searchApiCall = async (value) => {
        const searchData = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.9660037&lng=77.6729397&str=${JSON.stringify(value)}&trackingId=undefined&includeIMItem=true`)
        const json = await searchData.json();
        const restaurantData = json.data.suggestions.map(restaurant => {
            return {
                info: {
                    cloudinaryImageId: restaurant.cloudinaryId,
                    name: restaurant.text,
                    id: function () {
                        const data = JSON.parse(restaurant.metadata)?.data;
                        if (data)
                            return data.primaryRestaurantId ? data.primaryRestaurantId : (data.parentId ? data.parentId : restaurant.text)
                        else
                            return [];
                    }()
                }
            }
        });
        setRestaurantDataObj(restaurantData);
    }
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9660037&lng=77.6729397&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING').catch(() => { });
        const json = await data.json();
        setcouroselData(json.data?.cards[0].card.card.gridElements.infoWithStyle.info)
        const restaurantData = json.data.cards?.filter(item => item.card.card.gridElements?.infoWithStyle?.restaurants)[0].card.card.gridElements.infoWithStyle.restaurants;
        setRestaurantDataObj(restaurantData);
    }
    let timer;
    const debounce = (fn, delay) => {
        return (args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(args), delay);
        };
    };

    const debouncedSearch = debounce(searchApiCall, 400);

    const status = useOnlineStatus();

    if (!status) return (<h1>Oops You are offline</h1>)

    // conditional Rendering
    return restaurantDataObj.length === 0 ? (<ShimmerComponent />) :
        (
            <>
                <Courosel data={couroselData} />
                <div className="max-w-auto">
                    <div className=" flex items-center justify-center">
                        <button className="m-5 text-nowrap" onClick={() => {
                            setRestaurantDataObj(restaurantDataObj.filter(restaurant => restaurant.info.avgRating >= 4));
                        }}>Top Rated Restaurant</button>
                        <input className="m-2 focus:border-hidden bg-transparent text-center rounded-sm" type="text" placeholder="Enter Restaurant" onKeyUp={(e) => {
                            e.target.value.length >= 2 ? debouncedSearch(e.target.value) : fetchData();
                        }} />
                    </div>
                    <div className="flex flex-wrap justify-center">
                        {restaurantDataObj.map((restaurant) => (
                            <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
                                {restaurant.info.promoted ? (<RestaurantCartPromoted respData={restaurant.info} />) : (<RestaurantCart respData={restaurant.info} />)}
                            </Link>
                        ))}
                    </div>
                </div >
            </>

        )
};

export default Body;
