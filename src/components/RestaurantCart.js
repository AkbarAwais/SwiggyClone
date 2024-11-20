import { CDN_URL, START_LOGO } from "../utils/constants";
import React from "react";

const resCardRatingStyle = {
    'display': 'flex',
    'justifyContent': 'center'
}

const ratingElement = (avgRating, sla) => {
    if (avgRating && sla.deliveryTime)
        return (
            <React.Fragment>
                <img className="w-10 h-10 mt-2.5" src={START_LOGO}></img>
                <h4 className="mt-5">{avgRating} | {sla.deliveryTime} Mins</h4>
            </React.Fragment>
        )
}

const cuisinesFun = (cuisines) => {
    if (cuisines)
        return <p className="text-wrap p-4">{cuisines.toString()}</p>;
}
const RestaurantCart = (props) => {
    const { cloudinaryImageId, name, cuisines, avgRating, locality, sla, id } = props?.respData;
    return (
        <div className="w-[300px] min-h-[450px] box-border m-[30px] text-ellipsis text-center bg-[seashell] hover:bg-gray-200 hover:rounded-[20px]
        hover:shadow-red-800 hover:border-2 transform transition-transform ease-in-out duration-500 hover:scale-[0.98]">
            <img className="res-card-image w-[100%] h-[200px] rounded-[15px]" alt="resLogo" src={`${CDN_URL}${cloudinaryImageId}`}></img>
            <div className="text-center break-all">
                <h3 className="font-extrabold mt-9">{name}</h3>
                <div className="res-card-ratings h-auto" style={resCardRatingStyle}>
                    {ratingElement(avgRating, sla)}
                </div>
                {cuisinesFun(cuisines)}
                <p className="mt-4">{locality}</p>
            </div>
        </div>
    )
};

export const PromotedRestaurantCart = (RestaurantCart) => {
    return (props) => {
        return (
            <div>
                <div className="absolute text-white bg-black m-1 p-1">Promoted</div>
                <RestaurantCart {...props} />

            </div>
        )
    }
}

export default RestaurantCart;
