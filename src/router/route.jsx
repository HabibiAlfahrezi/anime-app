import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TvSeries from "../pages/TvSeries";
import More from "../pages/More";
import Animation from "../pages/Animation";
import HomePages from "../pages/HomePages";
import Movies from "../pages/Movies";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <HomePages/>
            },
            {
                path: "movies",
                element: <Movies/>
            },
            {
                path: "tvseries",
                element: <TvSeries/>,
            },
            {
                path: "animation",
                element: <Animation/>,
            },
            {
                path: "more",
                element: <More/>,
            }
        ]
    }
])

export default router;