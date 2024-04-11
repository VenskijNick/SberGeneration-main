import * as React from "react"

interface StockItemProps {
  imageSrc: string;
  name: string;
  price: string;
  symbol: string;
  change: string;
}

const StockItem: React.FC<StockItemProps> = ({ imageSrc, name, price, symbol, change }) => (
  <div className="flex gap-5">
    <img src={imageSrc} alt={`${name} stock`} className="shrink-0 aspect-square w-[50px]" />
    <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
      <div className="flex gap-5 justify-between pr-5 text-sm text-black">
        <div>{name}</div>
        <div className="font-bold">{price}</div>
      </div>
      <div className="flex gap-5 justify-end py-1 pr-5 mt-1.5">
        <div className="text-sm text-neutral-400">{symbol}</div>
        <div className="flex-auto text-xs text-green-600">{change}</div>
      </div>
    </div>
  </div>
);

interface CollectionItemProps {
  imageSrc: string;
  numStocks: number;
  title: string;
  description: string;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ imageSrc, numStocks, title, description }) => (
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    <div className="flex overflow-hidden relative flex-col grow justify-center items-start rounded-xl shadow-sm aspect-[1.35]">
      <img src={imageSrc} alt={title} className="object-cover absolute inset-0 size-full" />
      <div className="flex relative z-10 flex-col items-start py-5 pr-12 pl-2.5 -mt-2 bg-sky-600 bg-opacity-70">
        <div className="justify-center px-2 py-0.5 ml-3.5 text-xs font-bold leading-loose text-white bg-white bg-opacity-50 rounded-[57.471px]">
          {numStocks} акций
        </div>
        <div className="flex flex-col py-5 pr-7 pl-3.5 mt-20 bg-white">
          <div className="text-sm font-bold text-black">{title}</div>
          <div className="mt-2.5 text-xs text-neutral-400">{description}</div>
        </div>
      </div>
    </div>
  </div>
);

const stockData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fc3b358e34906e6dc472a5318497b27de3222a1fa29d0c451b3cce1a40a38b4?apiKey=fd642a16861a44e2af16d4d39d541648&",
    name: "Лукойл",
    price: "30,70 BYN",
    symbol: "LKOH",
    change: "+0,67 BYN (0,30%)",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d9822062dde69c929edd4d4e5ad45ca07a8c8a8e033e47e3ed09da9fdfd1d860?apiKey=fd642a16861a44e2af16d4d39d541648&",
    name: "Сбер Банк",
    price: "48,70 BYN", 
    symbol: "SBER",
    change: "+4,87 BYN (1,00%)",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f913177f700e9ec339a52562cd61bbb1082a4ced71b4d0e8dc802ecc887f7e45?apiKey=fd642a16861a44e2af16d4d39d541648&",
    name: "Северсталь",
    price: "30,86 BYN",
    symbol: "CHMF",
    change: "+0,60 BYN (0,32%)",
  },
];

const collectionData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/304032dd7ba9a2bfc036c596504d3499291a77ee35b0cef1cc7e148e9026cb1f?apiKey=fd642a16861a44e2af16d4d39d541648&",
    numStocks: 12,
    title: "Топ белорусских акций",
    description: "Подборка отечественных компаний с особым потенциалом роста",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3ce98ccfeeba646654e83ddacaa9f6417add2edbf22f3d0a94b1f67a2f9aebb?apiKey=fd642a16861a44e2af16d4d39d541648&",
    numStocks: 6,
    title: "Российские акции",
    description: "Акции российских компаний доступные для покупки",
  },
];

function MarketAnalytics() {
  return (
    <div className="flex flex-col pt-1.5 pb-20 mx-auto w-full bg-white max-w-[480px]">
      <header className="flex flex-col px-5 w-full">
        <div className="flex gap-5 justify-between px-7 py-4 w-full">
          <div className="text-base font-semibold leading-5 text-center text-black">18:41</div>
          <div className="flex gap-1.5 items-start">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d32b1d1d95989bf7e9aed49a7461824ef4e064ba8ccbd44f78a38b77ebe27c40?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Battery icon" className="shrink-0 aspect-[1.69] fill-black w-[17px]" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4655ee84a7c83071aaa9b8d57b140ce4596617d12ac1627799dfc4016c9e62c7?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Cellular signal icon" className="shrink-0 aspect-[1.37] fill-black w-[15px]" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6baf7ea0baa9e1576e6fae248475ccb2c20130dd7a57089122a5ac4d6e801e7b?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Wifi icon" className="shrink-0 self-stretch w-6 aspect-[2]" />
          </div>
        </div>
        <div className="flex gap-5 justify-between items-center pr-2.5 mt-1.5 text-sm whitespace-nowrap text-zinc-400">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c25ed698ec06dc79f43c4d896f5624a1edd93654a161452e8bb042962799e3d4?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Menu icon" className="shrink-0 self-stretch w-10 aspect-square" />
          <div className="flex flex-col justify-center self-stretch my-auto">
            <div className="flex gap-1.5 justify-between px-4 py-1.5 bg-neutral-400 bg-opacity-20 rounded-[100px]">
              <div>Поиск</div>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/662d525f8bbcf9d0e1ae12e80ed00dc4ef53b8abea39cd148eaca549a7a29984?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Search icon" className="shrink-0 w-3 aspect-square fill-zinc-400" />
            </div>
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d7eb9db7890a23454295861237c61a2257ca3c6cdebdafb5e3c237b7ef9bf4?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Profile icon" className="shrink-0 self-stretch my-auto aspect-square w-[30px]" />
        </div>
        <div className="flex gap-2.5 self-start mt-8 text-sm font-bold leading-4 whitespace-nowrap">
          <div className="justify-center px-3 py-1 text-green-600 border border-green-600 border-solid rounded-[100px]">
            Взлеты
          </div>
          <div className="justify-center px-3 py-1 border border-solid border-neutral-400 rounded-[100px] text-neutral-400">
            Падения
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col gap-2.5 mt-8">
          {stockData.map((stock, index) => (
            <React.Fragment key={stock.symbol}>
              <StockItem {...stock} />
              {index < stockData.length - 1 && (
                <img
                  src={`{{ext_${7 + index * 2}}}`}
                  alt="Separator"
                  className="self-start mt-2 w-full border-2 border-solid aspect-[100] border-neutral-100 stroke-[2px] stroke-neutral-100"
                />
              )}
            </React.Fragment>
          ))}
        </section>
        <section className="flex flex-col px-5 w-full">
          <div className="flex gap-5 justify-between mt-5">
            <h2 className="text-xl font-bold text-black border-0 border-black border-solid">Топ подборок</h2>
            <div className="my-auto text-base text-neutral-400">все</div>
          </div>
          <div className="self-start mt-8">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {collectionData.map((collection) => (
                <CollectionItem key={collection.title} {...collection} />
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col px-5 w-full">
          <h2 className="self-start mt-9 ml-1 text-xl font-bold text-black border-0 border-black border-solid">
            Важные статьи
          </h2>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/890bc03e203ce42afc72d8de1956960353f81388ac14eee036640f0f4a4df5ae?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Important articles" className="mt-7 w-full aspect-[2.04]" />
        </section>
      </main>
    </div>
  );
}

export default MarketAnalytics;