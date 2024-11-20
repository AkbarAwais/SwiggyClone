import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
const useRestaurantMenu = (id) => {

    const [restaurantDataObj, setrestaurantDataObj] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_URL + id);
        const json = await data.json();
        const restaurantData = json.data.cards.find(item => item.card.card.info).card.card.info;
        const restaurantMetaData = {
            location: restaurantData.areaName,
            cuisines: restaurantData.cuisines,
            costForTwoMessage: restaurantData.costForTwoMessage,
            time: restaurantData.sla.slaString,
            avgRating: restaurantData.avgRating,
            totalRatingsString: restaurantData.totalRatingsString,

        }
        const restaurantMenuData = json.data.cards.find(item => item.groupedCard).groupedCard.cardGroupMap.REGULAR.cards;
        const accordianCards = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(item => item.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        const restaurantDataObj = {
            name: restaurantData.name,
            menu: restaurantMenuData.filter(item => item.card.card).find(item => item.card.card.itemCards).card.card.itemCards.map(item => item.card.info),
            restaurantMetaData: restaurantMetaData,
            accordianCards: accordianCards
        }
        setrestaurantDataObj(restaurantDataObj);
    }
    return restaurantDataObj;
}

export default useRestaurantMenu;
