import * as React from "react";

interface StockItemProps {
  imageUrl: string;
  name: string;
  price: string;
  quantity: string;
  change: string;
}

const StockItem: React.FC<StockItemProps> = ({
  imageUrl,
  name,
  price,
  quantity,
  change,
}) => (
  <div className="flex gap-5 self-center mt-2.5">
    <img src={imageUrl} alt={name} className="shrink-0 aspect-square w-[50px]" />
    <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
      <div className="flex gap-5 justify-between text-sm text-black">
        <div>{name}</div>
        <div className="font-bold">{price}</div>
      </div>
      <div className="flex gap-5 mt-2">
        <div className="flex-auto text-sm text-neutral-400">{quantity}</div>
        <div className={`flex-auto text-xs ${change.includes('-') ? 'text-red-600' : 'text-green-600'}`}>
          {change}
        </div>
      </div>
    </div>
  </div>
);

const stocks: StockItemProps[] = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c36282d51755834b5ca6127b5baf24f7ac9b656820e98c6e6167c2428870152?apiKey=a19014d136ea4220b2780e245b371243&",
    name: "Лукойл",
    price: "30,70 BYN",
    quantity: "1 шт. - 30,70 BYN",
    change: "+0,67 BYN (0,30%)",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/18e13bd4ba8a7162c514687d531f70555fc5346ef2a3e152866ccc6c169d7904?apiKey=a19014d136ea4220b2780e245b371243&",
    name: "Керамин",
    price: "18,20 BYN", 
    quantity: "12 шт. - 1,51 BYN",
    change: "+0,80 BYN (0,90%)",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/bbd7fd1f906631f995cd4f5c2c1bbe3b802623c1ff2e837cf2674a6c056725d2?apiKey=a19014d136ea4220b2780e245b371243&",
    name: "Сбер Банк",
    price: "48,70 BYN",
    quantity: "10 шт. - 4,87 BYN",
    change: "+4,87 BYN (1,00%)",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/de4a868a36a0fd440d0896db7b7d39f11decd38334272fb18663b40404de794e?apiKey=a19014d136ea4220b2780e245b371243&",
    name: "Беларуснефть",
    price: "60,86 BYN",
    quantity: "BLNF",
    change: "-7,96 BYN (1,26%)",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/13504030fda3ae01ee514f312572a2b80b8ca94d8781420db1c62f1b8b641981?apiKey=a19014d136ea4220b2780e245b371243&",
    name: "Коммунарка",
    price: "134,86 BYN",
    quantity: "1 шт. - 134,86 BYN",
    change: "+17,00 BYN (4,26%)",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f7230f7828c8024465776449ca9a7ada39ad9076dce0f0304c2b0182e441352?apiKey=a19014d136ea4220b2780e245b371243&",
    name: "Северсталь",
    price: "30,86 BYN",
    quantity: "8 шт. - 3,87 BYN",
    change: "+0,60 BYN (0,32%)",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c78eabbf7bf25a577bc1b98c8dc0093a2379a40e4131205dba50913e7d4ef7e?apiKey=a19014d136ea4220b2780e245b371243&",
    name: "Роснефть",
    price: "60,86 BYN",
    quantity: "ROSN",
    change: "-7,96 BYN (1,26%)",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c36282d51755834b5ca6127b5baf24f7ac9b656820e98c6e6167c2428870152?apiKey=a19014d136ea4220b2780e245b371243&",
    name: "Магнит",
    price: "30,70 BYN",
    quantity: "45 шт.",
    change: "+0,67 BYN (0,30%)",
  },
];

function Stocks() {
  return (
    <div className="flex flex-col self-stretch px-6 w-full">
      <header className="flex gap-5 justify-between px-6 py-4 w-full">
        <div className="text-base font-semibold leading-5 text-center text-black">
          18:41
        </div>
        <div className="flex gap-1.5 items-start">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d32b1d1d95989bf7e9aed49a7461824ef4e064ba8ccbd44f78a38b77ebe27c40?apiKey=a19014d136ea4220b2780e245b371243&"
            alt=""
            className="shrink-0 aspect-[1.69] fill-black w-[17px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4655ee84a7c83071aaa9b8d57b140ce4596617d12ac1627799dfc4016c9e62c7?apiKey=a19014d136ea4220b2780e245b371243&"
            alt=""
            className="shrink-0 aspect-[1.37] fill-black w-[15px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/006f3d2d5ed9600714250e714bf6c9514987a72d07ef6ef760c40bafa2d2a9a0?apiKey=a19014d136ea4220b2780e245b371243&"
            alt=""
            className="shrink-0 self-stretch w-6 aspect-[2]"
          />
        </div>
      </header>
      <nav className="flex gap-5 justify-between items-center px-px mt-1.5 text-sm whitespace-nowrap text-zinc-400">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff29e5e45ce2a31fcf1c5a57e1e47659c38c811785191cd6eab107ba5a206116?apiKey=a19014d136ea4220b2780e245b371243&"
          alt=""
          className="shrink-0 self-stretch w-10 aspect-square"
        />
        <div className="flex flex-col justify-center self-stretch my-auto">
          <div className="flex gap-1.5 justify-between px-4 py-1.5 bg-neutral-400 bg-opacity-20 rounded-[100px]">
            <div>Поиск</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/662d525f8bbcf9d0e1ae12e80ed00dc4ef53b8abea39cd148eaca549a7a29984?apiKey=a19014d136ea4220b2780e245b371243&"
              alt=""
              className="shrink-0 w-3 aspect-square fill-zinc-400"
            />
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d7eb9db7890a23454295861237c61a2257ca3c6cdebdafb5e3c237b7ef9bf4?apiKey=a19014d136ea4220b2780e245b371243&"
          alt=""
          className="shrink-0 self-stretch my-auto aspect-square w-[30px]"
        />
      </nav>
      <main>
        <section>
          <h1 className="mt-9 text-2xl font-bold text-black border-0 border-black border-solid">
            10 345,33 BYN
          </h1>
          <p className="mt-3 text-xs text-green-600">
            +10 000 BYN за все время
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/605bdb18e3ad43a4be393aac5c40967cc494275ac3202252981c1552d3a296a1?apiKey=a19014d136ea4220b2780e245b371243&"
            alt=""
            className="mt-5 w-full border-2 border-solid aspect-[100] border-neutral-100 stroke-[2px] stroke-neutral-100"
          />
          <div className="flex gap-5 mt-5 text-sm font-bold leading-4 text-right text-zinc-950">
            <button className="justify-center px-4 py-3 rounded-xl bg-zinc-950 bg-opacity-10">
              Пополнить и вывести
            </button>
            <button className="justify-center px-5 py-3 rounded-xl bg-zinc-950 bg-opacity-10">
              История и заявки
            </button>
          </div>
        </section>
        <section>
          <div className="flex gap-2.5 self-start mt-8 text-xl font-bold text-black whitespace-nowrap">
            <h2 className="border-0 border-black border-solid">Акции</h2>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c93d058973553b954c1534b1c7f3528e5c2c0ffe663f05b0575c6d3760c3294e?apiKey=a19014d136ea4220b2780e245b371243&"
              alt=""
              className="shrink-0 my-auto w-2.5 aspect-[2.5] fill-neutral-400"
            />
          </div>
          {stocks.map((stock, index) => (
            <React.Fragment key={stock.name}>
              <StockItem {...stock} />
              {index !== stocks.length - 1 && (
                <img
                  src={`{{ext_${9 + index * 2}}}`}
                  alt=""
                  className="mt-2 w-full border-2 border-solid aspect-[100] border-neutral-100 stroke-[2px] stroke-neutral-100"
                />
              )}
            </React.Fragment>
          ))}
        </section>
      </main>
    </div>
  );
}
export default Stocks;