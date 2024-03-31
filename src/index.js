import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Headerr";
import Body from "./Body";
import Login from "./Login";
import LoginContext from "./LoginContext";


const AppLayout = () => {
    const [username, setUsername] = useState("Login");

    return (
        <LoginContext.Provider  value={{ username, setUsername }}>
            <div className="bg-[#6a11cb] h-screen">
                <Header />
                <Outlet />
            </div>
        </LoginContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<RouterProvider router={appRouter} />);
