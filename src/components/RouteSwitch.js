import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/shop/" element={<Shop />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;