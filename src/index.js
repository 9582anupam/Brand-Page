import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";



const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
	<div>
		<Header/>
		<Body/>
	</div>
);

