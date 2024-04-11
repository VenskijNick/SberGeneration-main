import React from "react";
import NavigationMenu from "./NavigationMenuItem";
import AppRouter from "./AppRouter";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavigationMenu menuItems={[]} />
      <AppRouter />
    </div>
  );
};

export default App;
