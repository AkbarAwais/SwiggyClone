import Header from "./Header";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RatingsMenuCart from "./RatingsMenuCart";
import MenuAccordian from "./MenuAccordian";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
const RestaurantMenu = () => {
    const { resId } = useParams();

    let resData = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if (resData.length <= 0)
        return (
            <Provider store={appStore}>
                <Header />
            </Provider>
        );

    return (
        <Provider store={appStore}>
            <React.Fragment>
                <Header />
                <div className=" mt-5 mr-auto mb-8 ml-auto max-w-[800px] min-h-[800px]">
                    <div className="mb-[2vh] text-center min-w-[800px]">
                        <h1 className="font-cursive font-extrabold text-4xl leading-7 tracking-[-0.4px] text-black m-1 ">{resData.name}</h1>
                    </div>
                    <RatingsMenuCart data={resData.restaurantMetaData} />
                    <div className="font-cursive p-4 text-center min-w-[800px]">
                        MENU
                    </div>
                    <input type="text" disabled placeholder="Search for dishes" className="mt-1 block w-full px-3 py-2 font-bold bg-white border border-slate-300
                    rounded-md text-sm shadow-sm placeholder-slate-400
                    cursor-pointer
                    placeholder:text-center
                    min-w-[800px]"/>
                    <div>
                        {resData.accordianCards.map((cart, index) => <MenuAccordian data={cart} isActive={index === showIndex} index={index} cb={setShowIndex} key={cart.card.card.title} />)}
                    </div>
                </div>
            </React.Fragment>
        </Provider>


    )
}
export default RestaurantMenu;
