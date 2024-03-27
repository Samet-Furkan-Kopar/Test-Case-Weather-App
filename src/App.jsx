import { Box } from "@mui/material";
import Layout from "./layouts";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WeatherContent from "./pages/WeatherContent";

const App = () => {
    return (
        <Box>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route exact index element={<Home />} />
                    <Route path=":name" element={<WeatherContent />} />
                </Route>
            </Routes>
        </Box>
    );
};

export default App;
