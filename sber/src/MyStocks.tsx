import * as React from "react";

interface StockItemProps {
  imageUrl: string;
  name: string;
  price: string;
  id: string;
  change: string;
}

const StockItem: React.FC<StockItemProps> = ({ imageUrl, name, price, id, change }) => (
  <div className="flex gap-5 self-center">
    <img src={imageUrl} alt={name} className="shrink-0 aspect-square w-[50px]" />
    <div className="flex flex-col justify-end my-auto">
      <div className="flex gap-5 justify-between text-sm text-black">
        <div>{name}</div>
        <div className="font-bold">{price}</div>
      </div>
      <div className="flex gap-5 justify-between py-1 mt-1.5">
        <div className="text-sm text-neutral-400">{id}</div>
        <div className="text-xs text-red-600">{change}</div>
      </div>
    </div>
  </div>
);

const stocks = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3449012768fa3bed2b4d4b4794049be11bbd455c66317c2b62fb672e31b1928?apiKey=fd642a16861a44e2af16d4d39d541648&",
    name: "БЕЛАРУСНЕФТЬ-804",
    price: "60,86 BYN",
    id: "JL0000011256",
    change: "-7,96 BYN (1,26%)",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3449012768fa3bed2b4d4b4794049be11bbd455c66317c2b62fb672e31b1928?apiKey=fd642a16861a44e2af16d4d39d541648&",
    name: "БЕЛАРУСНЕФТЬ-803", 
    price: "60,86 BYN",
    id: "JL0000011257",
    change: "-7,96 BYN (1,26%)",
  },
];

function MyStocks() {
  return (
    <div className="flex flex-col pt-1.5 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-6 w-full">
        <header className="flex gap-5 justify-between px-6 py-4 w-full">
          <div className="text-base font-semibold leading-5 text-center text-black">18:41</div>
          <div className="flex gap-1.5 items-start">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d32b1d1d95989bf7e9aed49a7461824ef4e064ba8ccbd44f78a38b77ebe27c40?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="" className="shrink-0 aspect-[1.69] fill-black w-[17px]" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4655ee84a7c83071aaa9b8d57b140ce4596617d12ac1627799dfc4016c9e62c7?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="" className="shrink-0 aspect-[1.37] fill-black w-[15px]" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6baf7ea0baa9e1576e6fae248475ccb2c20130dd7a57089122a5ac4d6e801e7b?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="" className="shrink-0 self-stretch w-6 aspect-[2]" />
          </div>
        </header>
        <div className="flex gap-5 justify-between items-center px-px mt-1.5 text-sm whitespace-nowrap text-zinc-400">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c25ed698ec06dc79f43c4d896f5624a1edd93654a161452e8bb042962799e3d4?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="" className="shrink-0 self-stretch w-10 aspect-square" />
          <div className="flex flex-col justify-center self-stretch my-auto">
            <div className="flex gap-1.5 justify-between px-4 py-1.5 bg-neutral-400 bg-opacity-20 rounded-[100px]">
              <div>Поиск</div>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/662d525f8bbcf9d0e1ae12e80ed00dc4ef53b8abea39cd148eaca549a7a29984?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="" className="shrink-0 w-3 aspect-square fill-zinc-400" />
            </div>
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d7eb9db7890a23454295861237c61a2257ca3c6cdebdafb5e3c237b7ef9bf4?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="" className="shrink-0 self-stretch my-auto aspect-square w-[30px]" />
        </div>
        <h1 className="mt-8 text-xl font-bold text-black border-0 border-black border-solid">Витрина</h1>
        <div className="flex gap-2.5 mt-5 text-sm font-bold leading-4 whitespace-nowrap">
          <div className="justify-center px-3 py-1 border border-solid border-neutral-400 rounded-[100px] text-neutral-400">
            Акции
          </div>
          <div className="justify-center px-3 py-1 text-green-600 border border-green-600 border-solid rounded-[100px]">
            Облигации
          </div>
        </div>
        {stocks.map((stock, index) => (
          <React.Fragment key={stock.id}>
            <StockItem {...stock} />
            {index !== stocks.length - 1 && (
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e2c7c022a59758835de6b4e3cfa58cf7d16a8c577984833247555e31dd350b9?apiKey=fd642a16861a44e2af16d4d39d541648&"
                alt=""
                className="mt-2 w-full border-2 border-solid aspect-[100] border-neutral-100 stroke-[2px] stroke-neutral-100"
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <footer className="flex flex-col pb-7 w-full text-xs text-center whitespace-nowrap bg-white mt-[507px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d5bffb219377c8a2eb7016f9248dd61ef92eb4f90ff23a263281994c9ce1b8b?apiKey=fd642a16861a44e2af16d4d39d541648&"
          alt=""
          className="w-full border border-solid border-neutral-100 stroke-[1px] stroke-neutral-100"
        />
        <nav className="flex gap-0 mt-2.5 w-full">
          <div className="flex flex-1 gap-0 text-black text-opacity-60">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed5e4fe72075d255e9576dba58af544d15ee9b3daf14f3fb74c34e7fa650f4c1?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="" className="shrink-0 max-w-full aspect-[2.08] w-[100px]" />
            <div className="flex flex-col justify-center px-5 py-1.5">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ac263cfc5386d757699e971f2bfd00cc377d37f11352ffbacf8fe3285653fc2?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="" className="self-center w-6 aspect-square" />
              <div className="mt-1.5">Инвестиции</div>
            </div>
          </div>
          <div className="flex flex-1 gap-0">
            <div className="flex flex-col justify-center px-8 py-1.5 text-black text-opacity-60">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b38e480444b1b59eb049398a66e213791f0236cb00eb8bb2904d22cd3232ee2a?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="" className="self-center w-6 aspect-square" />
              <div className="mt-1.5">История</div>
            </div>
            <div className="flex flex-col justify-center items-center px-7 py-1.5 text-gray-500">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/72375e2b5a1c5b2c1175540931a9bf94b35de945fb9163513a6eb2cc4c14481b?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="" className="self-center w-6 aspect-square" />
              <div className="self-start mt-1.5">Профиль</div>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default MyStocks;