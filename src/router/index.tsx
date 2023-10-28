import {Navigate} from "react-router-dom";
import React,{lazy} from "react";

import Home from "@/views/Home.tsx";
import Login from "@/views/Login";

//lazy loading components
const Page1 = lazy(()=> import("@/components/Page1"));
const Page2 = lazy(()=> import("@/components/Page2"));
const Page3_1 = lazy(()=> import("@/components/Page3/Page3_1"));
const Page3_1_1 = lazy(()=> import("@/components/Page3/Page3_1/Page3_1_1"));
const Page3_1_2 = lazy(()=> import("@/components/Page3/Page3_1/Page3_1_2"));
const Page3_1_3 = lazy(()=> import("@/components/Page3/Page3_1/Page3_1_3"));
const Page3_2 = lazy(()=> import("@/components/Page3/Page3_2"));
const Page3_3 = lazy(()=> import("@/components/Page3/Page3_3"));
const NotFound = lazy(()=> import("@/components/NotFound"))
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
            },
            {
                path: "/page3/1",
                element: withLoadingComponents(<Page3_1/>),
            },
            {
                path: "/page3/1/1",
                element: withLoadingComponents(<Page3_1_1/>),
            },
            {
                path: "/page3/1/2",
                element: withLoadingComponents(<Page3_1_2/>),
            },
            {
                path: "/page3/1/3",
                element: withLoadingComponents(<Page3_1_3/>),
            },
            {
                path: "/page3/2",
                element: withLoadingComponents(<Page3_2/>),
            },
            {
                path: "/page3/3",
                element: withLoadingComponents(<Page3_3/>),
            },
            {
                path: "/404",
                element: withLoadingComponents(<NotFound/>),
            },
        ]
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "*",
        element: <Navigate to="/404"/>,
    }

]
export default routes