import React from 'react'
import { CDN_URL } from "../utils/constants"
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const MenuCart = (cart) => {
    const subMenu = cart.data;

    const dispatch = useDispatch();
    const addClickListner = (menuItem) => {
        dispatch(addItem(menuItem))

    }
    const GenerateMenuCart = (item) => {
        const menuItem = item.data?.card?.info || item.data;
        return (
            <>
                <div className="flex justify-between pr-4 pt-4 pb-4">
                    <div>
                        <div className="text-2xl font-cursive text-nowrap">{menuItem.name}</div>
                        <div className="before:content-['₹'] mt-4 font-cursive text-nowrap">{(menuItem.defaultPrice || menuItem.price) / 100}</div>
                        <div className="flex mt-4 font-light">
                            <div className="">{menuItem.description}</div>
                        </div>
                    </div>
                    <div className="max-w-[156px] min-h-[144px]">
                        <img className="object-fill ml-2 rounded-xl aspect-[auto] shadow-amber-700" src={CDN_URL + menuItem.imageId}></img>
                        <div className="relative left-[55%] bottom-7 z-[1] translate-x-[-50%]">
                            <div className="relative ">
                                <div className="flex justify-center flex-col items-center ">
                                    <div className="bg-white border-1 hover:bg-gray-300 ease-in-out duration-200 transition-all border-solid h-10 rounded-lg w-[120px] relative overflow-hidden inline-flex items-center justify-between shadow-lg">
                                        <div className="absolute inset-0">
                                            <button onClick={() => addClickListner(menuItem)} className="absolute w-32 inset-0 text-center transition-all duration-100 translate-y-0
                                            appearance-none bg-transparent shadow-none border-none h-[100%] cursor-pointer flex items-center justify-center
                                            uppercase"><div className="mr-3 font-extrabold text-lg uppercase text-green-500">Add</div></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-2 border-solid rounded-lg shadow-slate-900 border-slate-500"></hr>
            </>

        )
    }

    return (
        <div className="ml-5">
            {subMenu.map(item => <GenerateMenuCart data={item} key={item.card?.info?.id || item.id} />)}
        </div>
    )
}

export default MenuCart
