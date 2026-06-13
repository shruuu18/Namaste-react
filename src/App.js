// creting headig in react
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


//Header componenet is in next file

// to give css in jsx 
const styleCard = {
    backgroundColor :" #f0f0f0",
}
// restro card component
const RestaurantCard = (props) => {
    console.log(props);
    return (
        <div className="res-card" style = {styleCard}>
            <h3>{props.resName}</h3>
            <h5>{props.cuisine}</h5>
            <h5>4.4 Ratings</h5>
            <h5>38 Minutes</h5>
           
          

        </div>
    )
}
//Body component 

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
       </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root")
);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
                
            },
            {
                path: "/contact",
                element: <Contact />,
                
            },
            {
                path: "/restaurants/:resId" ,
                element: <RestaurantMenu/>,
                
            },
        ],
        errorElement: <Error/>,
    },
    
    
]);
root.render(<RouterProvider router={appRouter} />);