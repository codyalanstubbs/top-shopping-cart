import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Nav from "./Nav";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
                <Nav />

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/shop/" element={<Shop />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;