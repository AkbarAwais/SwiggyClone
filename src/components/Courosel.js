import CouroselCart from "./CouroselCart";
import { useState } from "react";
import React from "react";
const Courosel = ({ data }) => {
    let [currentIndex, setCurrentIndex] = useState(1);

    function updateCarousel() {
        const container = document.getElementById('cardContainer');
        const cardWidth = container.children[0].clientWidth;
        container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function prevCard() {
        const cards = document.querySelectorAll('#cardContainer > div');
        setCurrentIndex((currentIndex > 0) ? currentIndex - 1 : cards.length - 1);
        updateCarousel();
    }

    function nextCard() {
        const cards = document.querySelectorAll('#cardContainer > div');
        setCurrentIndex((currentIndex < cards.length - 1) ? currentIndex + 1 : 0);
        updateCarousel();
    }

    return (
        <div className="m-20 mb-10 overflow-hidden">
            <hr className="mb-5 ml-16 border-stone-700" />
            <h1 className="ml-16 font-extrabold text-left text-3xl inline">What's on your mind?</h1>
            <button onClick={prevCard} disabled={currentIndex === 1} className="disabled:bg-gray-400 transition-all ease-in duration-200 inline-block ml-[65%] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg></button>
            <button onClick={nextCard} disabled={currentIndex === data.length - 1} className="disabled:bg-gray-400 transition-all ease-in duration-200 m-5 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            <div id="cardContainer" className="max-w-6 ml-0 p-4 flex min-w-[150%] object-cover transition-transform duration-300">
                {data.map(cart => <CouroselCart key={cart.id} data={cart} />)}
            </div>
            <hr className="ml-16 border-stone-700" />
        </div>
    )
}
export default Courosel;
