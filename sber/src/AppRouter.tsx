import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationMenu from "./NavigationMenuItem";
import MainScreen from "./MainScreen";
import Invest from "./Invest";
import MarketAnalytics from "./MarketAnalytics";
import MyStocks from "./MyStocks";
import Profile from "./Profile";

const AppRouter = () => {
  return (
    <Router>
      <NavigationMenu menuItems={[]} />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/my-stocks" element={<MyStocks />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
