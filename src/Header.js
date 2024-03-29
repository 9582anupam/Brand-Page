
const Header = () => {
    return (
        <div className="flex justify-between mx-20 my-5">
            <div className="">
                <img src="https://raw.githubusercontent.com/anshuopinion/React-10-Projects/project-1/project-1/public/images/brand_logo.png"></img>
            </div>
            <div className="list-none flex gap-6 font-bold ">
                <li className="cursor-pointer">MENU</li>
                <li className="cursor-pointer">LOCATION</li>
                <li className="cursor-pointer">ABOUT</li>
                <li className="cursor-pointer">CONTACT</li>
            </div>
            <div className=" text-white flex items-center justify-center ">
                <button className="bg-red-600 py-0.5 px-2 text-lg rounded-md">Login</button>
            </div>
        </div>
    );
};


export default Header;
