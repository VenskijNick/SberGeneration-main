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
      <div className="flex gap-0 w-full h-85">
        <div className="flex flex-1 gap-0">
          <div className="flex flex-col justify-center px-7 py-1.5 text-black text-opacity-60">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2Fceae5af53fc24edfa59b52d38a0f6686%2Fc2cd393580654ac5b473e44a33b63cca?apiKey=a19014d136ea4220b2780e245b371243&"
              alt=""
              className="self-center w-6 aspect-square"
            />
            <div className="mt-1.5">Главная</div>
          </div>
        </div>
        <div className="flex flex-1 gap-0">
          <div className="flex flex-col justify-center items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2Fceae5af53fc24edfa59b52d38a0f6686%2F76e5492c98344fac97fa71a275317bf5?apiKey=ceae5af53fc24edfa59b52d38a0f6686"
              alt="Logo"
              className="w-12 h-12"
            />
          </div>
        </div>
        <div className="flex flex-1 gap-0">
          <div className="flex flex-col justify-center px-7 py-1.5 text-black text-opacity-60">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2Fceae5af53fc24edfa59b52d38a0f6686%2Fc2cd393580654ac5b473e44a33b63cca?apiKey=a19014d136ea4220b2780e245b371243&"
              alt=""
              className="self-center w-6 aspect-square"
            />
            <div className="mt-1.5">Инвестиции</div>
          </div>
        </div>
        <div className="flex flex-1 gap-0">
          <div className="flex flex-col justify-center px-7 py-1.5 text-black text-opacity-60">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3133b407ec59e6cbc4034974cf037da78a4dc45ac0b9e0b2b0cced313f9440f9?apiKey=a19014d136ea4220b2780e245b371243&"
              alt=""
              className="self-center w-6 aspect-square"
            />
            <div className="mt-1.5">История</div>
          </div>
          <div className="flex flex-col justify-center px-7 py-1.5 text-neutral-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7db6bc564f0b8c365db2a207aa7a7580c5400c850f9582c90a1167be629e086a?apiKey=a19014d136ea4220b2780e245b371243&"
              alt=""
              className="self-center w-6 aspect-square"
            />
            <div className="mt-1.5">Профиль</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NavigationMenu;
