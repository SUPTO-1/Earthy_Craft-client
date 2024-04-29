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
import Error from "../Error/Error";
import SingleArtCategory from "../ArtCategory/SingleArtCategory";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement:<Error></Error>,
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
                element:<PrivateRoute><AddCraft></AddCraft></PrivateRoute>
            },
            {
                path:'/all',
                element:<AllCrafts></AllCrafts>
            },
            {
                path:'/craftDetails/:id',
                element:<PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/crafts/${params.id}`)
            },
            {
                path:'/myCraft/:email',
                element:<PrivateRoute><MyCraft></MyCraft></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/crafts/user/${params.email}`)
            },
            {
                path:`/updateCraft/:id`,
                element:<PrivateRoute><UpdateCraft></UpdateCraft></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/crafts/${params.id}`)
            },
            {
                path:'/singleartcategory/:subcategoryName',
                element:<SingleArtCategory></SingleArtCategory>,
                loader:({params})=>fetch(`http://localhost:5000/subcategory/${params.subcategoryName}`)
            }
        ]
    }
]);
export default routes;