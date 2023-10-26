import {Navigate} from "react-router-dom";
import React,{lazy} from "react";

import Home from "@/views/Home.tsx";
//lazy loading components
const About = lazy(()=> import("@/views/About.tsx"));
const User = lazy(()=> import("@/views/User.tsx"));
const Page1 = lazy(()=> import("@/views/Page1.tsx"));
const Page2 = lazy(()=> import("@/views/Page2.tsx"));

const withLoadingComponents = (comp:JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

// nested router
const routes = [
    {
        path:"/",
        element: <Navigate to="/page1"/>
    },
    {
        path:"/",
        element: <Home/>,
        children: [
            {
                path: "/page1",
                element: withLoadingComponents(<Page1/>)
            },
            {
                path: "/page2",
                element: withLoadingComponents(<Page2/>)
            }
        ]
    },
    // {
    //     path: "/about",
    //     element: withLoadingComponents(<About/>)
    // },
    // {
    //     path: "/user",
    //     element: withLoadingComponents(<User/>)
    // }
]
export default routes