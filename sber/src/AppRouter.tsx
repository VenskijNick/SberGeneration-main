import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationMenu from "./NavigationMenuItem";
import Home from "./MainScreen";
import Invest from "./Invest";
import History from "./History";
import Profile from "./Profile";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <NavigationMenu
        menuItems={[
          {
            icon: "your-icon-url",
            label: "Главная",
            path: "/",
          },
          {
            icon: "your-icon-url",
            label: "Инвестиции",
            path: "/invest",
          },
          {
            icon: "your-logo-url",
            label: "Лого",
            path: "/",
          },
          {
            icon: "your-icon-url",
            label: "История",
            path: "/history",
          },
          {
            icon: "your-icon-url",
            label: "Профиль",
            path: "/profile",
          },
        ]}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
