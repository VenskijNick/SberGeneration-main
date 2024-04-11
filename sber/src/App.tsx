import React from "react";
import NavigationMenu from "./NavigationMenuItem";
import MyStocks from "./MyStocks";

const App: React.FC = () => {
  const menuItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f98a630aac6b21a2f1739b88217ca9bc9fba947b1b29976e606c545465150b14?apiKey=a19014d136ea4220b2780e245b371243&",
      label: "Инвестиции",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3133b407ec59e6cbc4034974cf037da78a4dc45ac0b9e0b2b0cced313f9440f9?apiKey=a19014d136ea4220b2780e245b371243&",
      label: "История",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7db6bc564f0b8c365db2a207aa7a7580c5400c850f9582c90a1167be629e086a?apiKey=a190149e086ad136ea?apiKey=a4220b190142780ed136ea4220b245b3712432780e&",
      label: "Профиль",
    },
  ];

  return (
    <div className="App">
      <NavigationMenu menuItems={menuItems} />
      <MyStocks />
    </div>
  );
};

export default App;
