import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MenuCart from "./MenuCart"
import { clearItem } from '../utils/cartSlice';


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const removeClickListner = () => {
        dispatch(clearItem())

    }
    const aggregated = cartItems.reduce((acc, item) => {
        if (!acc[item.id]) {
            acc[item.id] = { ...item, totalCount: 0 };
        }
        acc[item.id].totalCount++;
        return acc;
    }, {});

    // Step 2: Convert the aggregated object back to an array
    const uniqueArray = Object.values(aggregated);

    if (uniqueArray.length === 0)
        return (<div className='mt-5 mr-auto mb-8 ml-auto max-w-[800px] min-h-[700px] flex justify-center items-center font-extrabold'>
            Your cart is emtpy
        </div>)

    return (
        <>
            <div className='mt-5 flex justify-center items-center font-extrabold'>Cart</div>
            <div className='mt-5 mr-auto mb-8 ml-auto max-w-[800px] min-h-[700px] flex justify-center items-center font-extrabold'>
                <MenuCart data={uniqueArray} />
            </div>
            <button className='mt-5 mr-auto mb-8 ml-auto flex font-bold rounded-lg text-white bg-slate-900 p-2 transition-all duration-300 ease-in-out
            hover:scale-[1.1] text-pretty
            '
                onClick={removeClickListner}>Clear Cart</button>
        </>
    )
}

export default Cart
