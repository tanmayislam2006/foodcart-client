import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import Dasboard from "../Pages/Dasboard/Dasboard";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import DishDetails from "../Pages/DishDetails/DishDetails";
import Order from "../Pages/Order/Order";
import Update from "../Pages/Update/Update";
import AddDish from "../Pages/AddDish/AddDish";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {path:'/',
                element:<Home/>
            },
            {
                path:'/menu',
                element:<Menu/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/dashboard',
                element:<PrivateRouter>
                    <Dasboard/>
                </PrivateRouter>
            },
            {
                path:'/cart',
                element:<PrivateRouter>
                    <Cart/>
                </PrivateRouter>
            },
            {
                path:'/checkout',
                element:<PrivateRouter>
                    <Checkout/>
                </PrivateRouter>
            },
            {
                path:'/dishDetails/:id',
                element:<PrivateRouter>
                    <DishDetails/>
                </PrivateRouter>
            },
            {
                path:"/order",
                element:<PrivateRouter>
                    <Order/>
                </PrivateRouter>
            },
            {
                path:"/updateDish/:id",
                element:<PrivateRouter>
                    <Update/>
                </PrivateRouter>
            },
            {
                path:"/addDish",
                element:<PrivateRouter>
                    <AddDish/>
                </PrivateRouter>
            }


        ]
    }
])
export default router