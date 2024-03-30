

const Login = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 bg-[#332D2D]  w-[30%] mx-auto text-white rounded-xl">
            <p className="pt-5 text-4xl font-bold">LOGIN</p>
            <p className="text-[#a9a3a3] pb-8">Please enter your login and password!</p>
            <input type="email" placeholder="Email" className="py-1 px-2 rounded-md bg-[#332D2D] border-white border-2 placeholder:text-white text-lg w-2/3"></input>
            <input type="password" placeholder="Password" className="py-1 px-2 rounded-md bg-[#332D2D] border-white border-2 placeholder:text-white text-lg w-2/3"></input>
            <p className="text-[#a9a3a3] pt-3 pb-7">Forgot password?</p>
            <button className="border-white border-2 px-12 py-1.5 rounded-md text-2xl my-auto">Login</button>
            <div className="flex pt-4 pb-10 gap-6">
                <a href="" className=""><i class="fa fa-google fa-lg" aria-hidden="true"></i></a>
                <a href=""><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
                <a href=""><i class="fa fa-facebook-official fa-lg" aria-hidden="true"></i></a>
            </div>
            <div className="flex gap-2">
                <p>Don't have an account?</p>
                <p className="cursor-pointer text-[#a9a3a3] pb-10">Sign Up</p>
            </div>

        </div>
    );
};

export default Login;
