import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AddCraft from "../AddCraft/AddCraft";
import AllCrafts from "../AllCrafts/AllCrafts";

const routes = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/add',
                element:<AddCraft></AddCraft>
            },
            {
                path:'/all',
                element:<AllCrafts></AllCrafts>
            }
        ]
    }
]);
export default routes;