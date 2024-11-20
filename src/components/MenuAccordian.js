import React from 'react'
import downSvg from "../../src/downArrow.svg"
import upsvg from "../../src/upArrow.svg"
import { useState } from "react"
import MenuCart from './MenuCart'

const MenuAccordian = (cards) => {
    const data = cards.data;
    const isActive = cards.isActive;
    const index = cards.index;
    const handleAccodian = cards.cb;
    const [arrow, setArrow] = useState(downSvg);

    return (
        <>
            <div className="p-6 hover:bg-gray-200 rounded-2xl ease-in-out duration-300" onClick={() => {
                isActive ? handleAccodian(null) : handleAccodian(index);
                setArrow((prev) => (prev === downSvg ? upsvg : downSvg));
            }}>
                <div className="flex justify-between cursor-pointer"  >
                    <h2 className="transition-all hover:scale-[1.08] ease-in-out duration-300 font-cursive text-gray-950">{data.card.card.title} ({data.card.card.itemCards.length})</h2>
                    <img className="w-6 transition-all hover:scale-125" src={arrow}></img>
                </div>
            </div>
            {isActive && <><MenuCart data={data.card.card.itemCards} /></>}
        </>
    )
}

export default MenuAccordian
