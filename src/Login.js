import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState(false);
    const handleChange = (event) => {
        setSubmit(true);
        console.log(email, password);                                                   
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    return (
        <div className="flex flex-col justify-center items-center gap-3 bg-[#332D2D]  w-[30%] mx-auto text-white rounded-xl">
            <p className="pt-5 text-4xl font-bold">{"LOGIN"}</p>
            <p className="text-[#a9a3a3] pb-8">Please enter your login and password!</p>
            <input type="email" name="email" placeholder="Email" className="py-1 px-2 rounded-md bg-[#332D2D] border-white border-2 placeholder:text-white text-lg w-2/3" onChange={handleEmailChange}></input>
            <input type="password" placeholder="Password" className="py-1 px-2 rounded-md bg-[#332D2D] border-white border-2 placeholder:text-white text-lg w-2/3" onChange={handlePasswordChange}></input>
            <p className="text-[#a9a3a3] pt-3 pb-7 cursor-pointer">Forgot password?</p>
            <button type="submit" className="border-white border-2 px-12 py-1.5 rounded-md text-2xl my-auto" onClick={handleChange}>Login</button>
            <div className="flex pt-4 pb-10 gap-6">
                <a href="" ><i className="fa fa-google fa-lg" aria-hidden="true"></i></a>
                <a href=""><i className="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
                <a href=""><i className="fa fa-facebook-official fa-lg" aria-hidden="true"></i></a>
            </div>
            <div className="flex gap-2">
                <p>Don't have an account?</p>
                <p className="cursor-pointer text-[#a9a3a3] pb-10">Sign Up</p>
            </div>
            
            {submit && <p>Email: {email}</p>}
            {submit && <p className="pb-3">Password: {password}</p>}
            
        </div>
    );
};

export default Login;
