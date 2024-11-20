import { useEffect, useState } from "react";
import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [login, setLogin] = useState("Login");
    useEffect(() => {
    }, [])
    const navigate = useNavigate();
    return (
        <div className="w-50 h-20 flex border-cyan-300 items-center justify-between bg-pink-50 shadow-lg m-0 sticky inset-0 z-10">
            <div> <img className=" max-w-16 m-2 overflow-hidden hover:scale-[1.1] hover:transition-all duration-300 ease-in cursor-pointer" src={LOGO_URL} onClick={() => navigate('/')} />
            </div>
            <div className="nav-items text-center">
                <ul className="flex justify-between p-10 m-1 text-nowrap">
                    <li className="mr-5 hover:scale-[1.2] hover:transition-all duration-300 ease-in  text-nowrap">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-5 hover:scale-[1.2] hover:transition-all duration-300 ease-in  text-nowrap">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="mr-5 hover:scale-[1.2] hover:transition-all duration-00 ease-in  text-nowrap">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="mr-5 hover:scale-[1.2] hover:transition-all hover:duration-100 hover:ease-in-out">Cart</li>
                    <button id="login" className="hover:scale-[1.2] transition-all duration-200 ease-in" onClick={(e) => {
                        e.target.innerText === "Login" ? setLogin("Logout") : setLogin("Login")
                    }}>{login}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;
