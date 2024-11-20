import React from "react";
import { CDN_URL } from "../utils/constants";
const CouroselCart = (cart) => {
    return (
        <div className="ml-0 card text-center">
            <img className="ml-0 hover:bg-gray-400 cursor-pointer hover:scale-[1.1] hover:transition-all duration-300 ease-in" src={CDN_URL + cart.data.imageId}></img>
        </div>
    )
}
export default CouroselCart;
