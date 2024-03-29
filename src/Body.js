
const Body = () => {
    return (
        <div className="w-9/12 mx-auto flex pt-16">
            <div className="left w-1/2">
                <p className="font-extrabold text-8xl">YOUR FEET DESERVE<br/>THE BEST</p>
                <p className="text-[#5A5959] font-bold pt-8 w-9/12">YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. </p>
                <div className="flex gap-4 pt-9 ">
                    <button className="bg-red-500 px-3 py-1 text-white text-xl font-bold">Shop Now</button>
                    <button className="border-2 px-3 py-1 font-bold text-xl text-[#5A5959] border-[#5A5959]">Category</button>
                </div>
                <p className="text-[#5A5959] pt-8">Also Available On</p>
                <div className="flex gap-3 pt-4">
                    <img src="https://raw.githubusercontent.com/anshuopinion/React-10-Projects/project-1/project-1/public/images/flipkart.png"></img>
                    <img src="https://raw.githubusercontent.com/anshuopinion/React-10-Projects/project-1/project-1/public/images/amazon.png"></img>
                </div>
            </div>
            <div className="right">
                <img src="https://raw.githubusercontent.com/anshuopinion/React-10-Projects/project-1/project-1/public/images/hero-image.png"></img>
            </div>
        </div>
    )  
};

export default Body;