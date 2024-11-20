import React from 'react'

const RatingsMenuCart = (card) => {
    const cartData = card.data;

    return (
        <div className="border-y-2 rounded-b-3xl border-solid text-left p-5 border-bankai-black">
            <div className="border-bankai-black border-solid border-2 bg-white shadow-bankai p-5 rounded-xl text-nowrap min-w-[380px]">
                <div className="flex items-center font-bold font-cursive">
                    <div>
                        <h2 className="text-lg">{cartData.avgRating} ({cartData.totalRatingsString})</h2>
                    </div>
                    <div>
                        <h2 className="text-lg m-2"> • {cartData.costForTwoMessage}</h2>
                    </div>
                </div>
                <div className="text-sm font-bold font-cursive">
                    {cartData.cuisines.toString()}
                </div>
                <div className="text-sm font-bold font-cursive inline-flex">
                    Outlet:
                    <h4 className="text-sm font-thin font-cursive text-pretty pl-1">
                        {cartData.location}
                    </h4>
                </div>
                <div className="text-sm font-bold font-cursive">
                    {cartData.time}
                </div>
            </div>
        </div>
    )
}

export default RatingsMenuCart
