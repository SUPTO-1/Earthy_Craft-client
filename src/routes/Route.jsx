import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AddCraft from "../AddCraft/AddCraft";
import AllCrafts from "../AllCrafts/AllCrafts";
import CraftDetails from "../AllCrafts/CraftDetails";
import MyCraft from "../MyCraft/MyCraft";
import UpdateCraft from "../MyCraft/UpdateCraft";

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
            },
            {
                path:'/craftDetails/:id',
                element:<CraftDetails></CraftDetails>,
                loader:({params})=>fetch(`http://localhost:5000/crafts/${params.id}`)
            },
            {
                path:'/myCraft/:email',
                element:<MyCraft></MyCraft>,
                loader:({params})=>fetch(`http://localhost:5000/crafts/user/${params.email}`)
            },
            {
                path:`/updateCraft/:id`,
                element:<UpdateCraft></UpdateCraft>,
                loader:({params})=>fetch(`http://localhost:5000/crafts/${params.id}`)
            }
        ]
    }
]);
export default routes;