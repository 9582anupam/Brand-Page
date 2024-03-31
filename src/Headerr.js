import { Link } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import LoginContext from "./LoginContext";


const Header = () => {
    const {username, setUsername} = useContext(LoginContext);
    console.log(username);
    // setUsername("Anupam");
    return (
        <div className="flex justify-between px-20 py-5 bg-white mb-5 items-center">
            <div className="">
                <Link to="/">
                    <img src="https://raw.githubusercontent.com/anshuopinion/React-10-Projects/project-1/project-1/public/images/brand_logo.png"></img>
                </Link>
            </div>
            <div className="list-none flex gap-6 font-bold ">
                <li className="cursor-pointer">MENU</li>
                <li className="cursor-pointer">LOCATION</li>
                <li className="cursor-pointer">ABOUT</li>
                <li className="cursor-pointer">CONTACT</li>
            </div>
            <div className=" text-white flex items-center justify-center ">
                <Link to="/login/">
                    <button className="bg-red-600 py-0.5 px-2 text-lg rounded-md">
                        {username}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
