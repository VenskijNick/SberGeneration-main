import React from "react";

interface NavigationMenuItem {
  icon: string;
  label: string;
}

interface NavigationMenuProps {
  menuItems: NavigationMenuItem[];
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ menuItems }) => {
  return (
    <footer className="flex flex-col pt-3 pb-7 mt-2.5 w-full text-xs text-center whitespace-nowrap bg-white">
      <div className="flex gap-0 w-full">
        <div className="flex flex-1 gap-0">
          <div className="flex flex-col justify-center px-7 py-1.5 text-black text-opacity-60">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f98a630aac6b21a2f1739b88217ca9bc9fba947b1b29976e606c545465150b14?apiKey=a19014d136ea4220b2780e245b371243&"
              alt=""
              className="self-center w-6 aspect-square"
            />
            <div className="mt-1.5">Домой</div>
          </div>
        </div>
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-1 gap-0">
            <div className="flex flex-col justify-center px-7 py-1.5 text-black text-opacity-60">
              <img
                loading="lazy"
                src={item.icon}
                alt=""
                className="self-center w-6 aspect-square"
              />
              <div className="mt-1.5">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default NavigationMenu;
