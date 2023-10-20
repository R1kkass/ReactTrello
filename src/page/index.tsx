import { Route, Routes, HashRouter } from "react-router-dom";
import Main from "./Main/Main";

const Routing = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </HashRouter>
    );
};

export default Routing;
