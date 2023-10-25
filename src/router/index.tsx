import Home from "@/views/Home.tsx";
import {Navigate} from "react-router-dom";
import React,{lazy} from "react";

//lazy loading components
const About = lazy(()=> import("@/views/About.tsx"));
const User = lazy(()=> import("@/views/User.tsx"));

const withLoadingComponents = (comp:JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const routes = [
    // redirect to path: "/home"
    {
        path:"/",
        element: <Navigate to="/home"/>
    },
    {
        path:"/home",
        element: <Home/>
    },
    {
        path: "/about",
        element: withLoadingComponents(<About/>)
    },
    {
        path: "/user",
        element: withLoadingComponents(<User/>)
    }
]
export default routes