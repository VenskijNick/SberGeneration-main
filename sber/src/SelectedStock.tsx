import * as React from "react";

interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => (
  <div className={`justify-center px-5 py-3 rounded-xl border-2 border-solid ${className}`}>
    {children}
  </div>
);

interface StockInfoProps {
  label: string;
  value: string;
  change: string;
}

const StockInfo: React.FC<StockInfoProps> = ({ label, value, change }) => (
  <div className="flex flex-col text-sm text-black">
    <Text className="text-neutral-400">{label}</Text>
    <Text className="mt-1.5">{value}</Text>
    <Text className="mt-2 text-xs">
      Средняя цена <span className="text-black">{change}</span>
    </Text>
  </div>
);

function SelectedStock() {
  return (
    <div className="flex flex-col pt-1.5 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-6 w-full">
        <div className="flex gap-5 justify-between px-6 py-4 w-full">
          <Text className="text-base font-semibold leading-5 text-center text-black">18:41</Text>
          <div className="flex gap-1.5 items-start">
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/d32b1d1d95989bf7e9aed49a7461824ef4e064ba8ccbd44f78a38b77ebe27c40?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Icon 1" className="shrink-0 aspect-[1.69] fill-black w-[17px]" />
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/4655ee84a7c83071aaa9b8d57b140ce4596617d12ac1627799dfc4016c9e62c7?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Icon 2" className="shrink-0 aspect-[1.37] fill-black w-[15px]" />
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/6baf7ea0baa9e1576e6fae248475ccb2c20130dd7a57089122a5ac4d6e801e7b?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Icon 3" className="shrink-0 self-stretch w-6 aspect-[2]" />
          </div>
        </div>
        <div className="flex gap-5 justify-between items-center px-px mt-1.5 text-sm whitespace-nowrap text-zinc-400">
          <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/c25ed698ec06dc79f43c4d896f5624a1edd93654a161452e8bb042962799e3d4?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Icon 4" className="shrink-0 self-stretch w-10 aspect-square" />
          <div className="flex flex-col justify-center self-stretch my-auto">
            <div className="flex gap-1.5 justify-between px-4 py-1.5 bg-neutral-400 bg-opacity-20 rounded-[100px]">
              <Text>Поиск</Text>
              <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/662d525f8bbcf9d0e1ae12e80ed00dc4ef53b8abea39cd148eaca549a7a29984?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Search icon" className="shrink-0 w-3 aspect-square fill-zinc-400" />
            </div>
          </div>
          <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d7eb9db7890a23454295861237c61a2257ca3c6cdebdafb5e3c237b7ef9bf4?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Icon 5" className="shrink-0 self-stretch my-auto aspect-square w-[30px]" />
        </div>
        <div className="flex gap-5 self-center mt-8 w-full text-sm whitespace-nowrap max-w-[359px]">
          <div className="flex flex-auto gap-5 justify-between items-center">
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/9799e0ced1c40617c8d1b4fa492a3beb22217cda7ea79eeea8f6795798e7e2e8?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Icon 6" className="shrink-0 self-stretch my-auto w-2.5 aspect-[0.43] fill-neutral-400" />
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fc3b358e34906e6dc472a5318497b27de3222a1fa29d0c451b3cce1a40a38b4?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Company logo" className="shrink-0 self-stretch aspect-square w-[50px]" />
            <div className="flex flex-col self-stretch py-1 my-auto">
              <Text className="text-black">Лукойл</Text>
              <Text className="mt-2.5 text-neutral-400">LKOH</Text>
            </div>
          </div>
          <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bfb52a1eb0d0bf058ec2648b3d64c790e39d734baf73abee60015c1ea1c948e?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Icon 7" className="shrink-0 my-auto w-5 border-2 border-solid aspect-[1.11] border-neutral-400 stroke-[1.5px] stroke-neutral-400" />
        </div>
        <div className="flex gap-5 justify-between self-center mt-5 text-sm whitespace-nowrap text-neutral-400">
          <Text className="text-black">Детали</Text>
          <Text>Обзор</Text>
          <Text>Стакан</Text>
          <Text>Пульс</Text>
        </div>
        <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/38e819ea4fc40c8f535c206b5b6a039396a7f50ff7fa02ec2b4961b44c7e9966?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Divider" className="ml-7 border-2 border-gray-500 border-solid aspect-[25] stroke-[2px] stroke-gray-500 w-[55px]" />
        <div className="flex gap-5 justify-between self-center mt-5 w-full text-2xl font-bold text-black max-w-[340px]">
          <Text>30,70 BYN</Text>
          <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f42c04b1024d07e50bbcdf36c31e06016f7c53480f25ef02b6a1fc91750def2?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Icon 8" className="shrink-0 my-auto aspect-[1.06] fill-neutral-400 w-[17px]" />
        </div>
        <Text className="self-start mt-2 ml-5 text-xs text-green-600">0,67 BYN (0,30%)</Text>
      </div>
      <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc882ad3d954c7c50287c84229e95d5f81b6f9b373e6429185354bac0bf63822?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Chart" className="mt-5 w-full aspect-[1.67]" />
      <div className="flex flex-col px-6 mt-5 w-full">
        <div className="flex gap-5 justify-between text-sm font-bold leading-4 text-right whitespace-nowrap text-zinc-950">
          <Button className="border-red-600">Продать</Button>
          <Button className="border-green-600">Купить</Button>
        </div>
        <div className="flex gap-5 justify-center px-px mt-5">
          <StockInfo label="На брокерском счету" value="1 шт." change="36,95 BYN" />
          <div className="flex flex-col my-auto">
            <Text className="text-sm font-bold text-black">30,70 BYN</Text>
            <Text className="mt-1.5 text-xs text-green-600">+0,67 BYN (0,30%)</Text>
          </div>
        </div>
        <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/deab238ba97751b0439e3ded1b597af5d5a862f4befee9a89f72b0154cb03f71?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Divider" className="mt-2.5 w-full border-2 border-solid aspect-[100] border-neutral-100 stroke-[2px] stroke-neutral-100" />
        <div className="flex gap-5 justify-center px-px mt-2">
          <StockInfo label="Общий объём торгов" value="1000 шт." change="39,95 BYN" />
          <div className="flex flex-col my-auto">
            <Text className="self-start ml-4 text-sm font-bold text-black">39 950 BYN</Text>
            <Text className="mt-1.5 text-xs text-green-600">+8,67 BYN (0,03%)</Text>
          </div>
        </div>
        <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6a1d70d8d233ba61ddd47655eb87678cc7827bc2eb95dd0771745f99ded713b?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Divider" className="mt-2.5 w-full border-2 border-solid aspect-[100] border-neutral-100 stroke-[2px] stroke-neutral-100" />
        <Text className="mt-3 text-sm text-neutral-400">Данные обновляются с 9:50 до 23:50</Text>
      </div>
      <div className="flex flex-col pb-7 mt-5 w-full text-xs text-center whitespace-nowrap bg-white">
        <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d5bffb219377c8a2eb7016f9248dd61ef92eb4f90ff23a263281994c9ce1b8b?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Divider" className="w-full border border-solid border-neutral-100 stroke-[1px] stroke-neutral-100" />
        <div className="flex gap-0 mt-2.5 w-full">
          <div className="flex flex-1 gap-0 text-black text-opacity-60">
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/ace4cfe56d5cd082028be60e09aad8b06ddae6b47ef40f25619ea5e058b2e080?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Logo" className="shrink-0 max-w-full aspect-[2.08] w-[100px]" />
            <div className="flex flex-col justify-center px-5 py-1.5">
              <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/937bc935cdf8615053cfd0623cdb622f0c791e318aced7cc880f4a1ae5dacfc5?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Investments icon" className="self-center w-6 aspect-square" />
              <Text className="mt-1.5">Инвестиции</Text>
            </div>
          </div>
          <div className="flex flex-1 gap-0">
            <div className="flex flex-col justify-center px-8 py-1.5 text-black text-opacity-60">
              <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ab3173bd76e6650ffc9a88893582e1829d50f0e0baff69829d8ad37f796e7a8?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="History icon" className="self-center w-6 aspect-square" />
              <Text className="mt-1.5">История</Text>
            </div>
            <div className="flex flex-col justify-center items-center px-7 py-1.5 text-neutral-500">
              <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b1ba4dfd8a44b42df475d08bbcaaea21913abf8f694a86a463155967620ef7f?apiKey=fd642a16861a44e2af16d4d39d541648&" alt="Profile icon" className="self-center w-6 aspect-square" />
              <Text className="self-start mt-1.5">Профиль</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedStock;