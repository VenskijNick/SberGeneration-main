import * as React from "react";

interface RecommendationProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  chartSrc: string;
  price: string;
  change: string;
}

const Recommendation: React.FC<RecommendationProps> = ({
  imageSrc,
  title,
  subtitle,
  chartSrc,
  price,
  change,
}) => (
  <div className="flex flex-col flex-1 pt-4 pr-6 pb-2 pl-2.5 bg-white rounded-3xl">
    <div className="flex gap-2.5 self-start ml-3">
      <img src={imageSrc} alt={title} className="shrink-0 my-auto aspect-square w-[30px]" />
      <div className="flex flex-col">
        <div className="text-xs text-black">{title}</div>
        <div className="text-xs text-neutral-400">{subtitle}</div>
      </div>
    </div>
    <div className="flex gap-5 mt-3.5 text-xs text-black">
      <img src={chartSrc} alt={`${title} chart`} className="shrink-0 border-2 border-green-600 border-solid aspect-[1.43] stroke-[1.5px] stroke-green-600 w-[70px]" />
      <div className="flex flex-col flex-1 my-auto">
        <div className="text-xs font-bold text-center">{price}</div>
        <div className="flex gap-0.5 mt-2 whitespace-nowrap">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2ba987dec74576d8c115a8b96daf1e9ef928975ac67f72f73a88654d46e1595?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="shrink-0 self-start aspect-[1.41] fill-green-600 w-[7px]" />
          <div>207</div>
        </div>
        <div className="mt-2 text-green-600">{change}</div>
      </div>
    </div>
  </div>
);

interface EventProps {
  imageSrc: string;
  title: string;
  price: string;
  account: string;
}

const Event: React.FC<EventProps> = ({ imageSrc, title, price, account }) => (
  <div className="flex gap-5 justify-center mt-3.5 mr-3 ml-2.5 text-sm">
    <img src={imageSrc} alt={title} className="shrink-0 aspect-square w-[50px]" />
    <div className="flex flex-col py-px pr-3 my-auto">
      <div className="flex gap-5 justify-between">
        <div className="text-black">{title}</div>
        <div className="font-bold text-red-600">{price}</div>
      </div>
      <div className="mt-2 text-neutral-400">{account}</div>
    </div>
  </div>
);

function Invest() {
  const recommendations = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffa1db049d7a87c38aef530081d49edecb8528fb2d05b73f98cb639a8fd54e3b?apiKey=a19014d136ea4220b2780e245b371243&",
      title: "БЕЛАРУСНЕФТЬ-804",
      subtitle: "JL0000011256 \n Платеж по займу",
      chartSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb06063f25a9037c9325656087c61ff417ffcba726556818c8d0438af0024aa7?apiKey=a19014d136ea4220b2780e245b371243&",
      price: "1 200 BYN",
      change: "+3,67 BYN",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffa1db049d7a87c38aef530081d49edecb8528fb2d05b73f98cb639a8fd54e3b?apiKey=a19014d136ea4220b2780e245b371243&",
      title: "БЕЛАРУСНЕФТЬ-804",
      subtitle: "JL0000011256 \n Платеж по займу",
      chartSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb06063f25a9037c9325656087c61ff417ffcba726556818c8d0438af0024aa7?apiKey=a19014d136ea4220b2780e245b371243&",
      price: "1 200 BYN",
      change: "+3,67 BYN",
    },
  ];

  const events = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fc3b358e34906e6dc472a5318497b27de3222a1fa29d0c451b3cce1a40a38b4?apiKey=a19014d136ea4220b2780e245b371243&",
      title: "Покупка 1 акции Лукойл",
      price: "-30,70 BYN",
      account: "Брокерский счет Сбер Банк, BYN",
    },
  ];

  return (
    <div className="flex flex-col pt-1.5 pb-20 mx-auto w-full bg-white max-w-[480px]">
      <header className="flex flex-col items-center px-4 w-full">
        <div className="flex gap-5 justify-between self-stretch px-7 py-4 w-full">
          <div className="text-base font-semibold leading-5 text-center text-black">18:41</div>
          <div className="flex gap-1.5 items-start">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d32b1d1d95989bf7e9aed49a7461824ef4e064ba8ccbd44f78a38b77ebe27c40?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="shrink-0 aspect-[1.69] fill-black w-[17px]" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4655ee84a7c83071aaa9b8d57b140ce4596617d12ac1627799dfc4016c9e62c7?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="shrink-0 aspect-[1.37] fill-black w-[15px]" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/59d515c57203bbcfb99da0f392ea74c0106bac20fa78791730ac4b8b90e236f2?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="shrink-0 self-stretch w-6 aspect-[2]" />
          </div>
        </div>
        <div className="flex gap-5 justify-between items-center self-stretch pr-2.5 mt-1.5 text-sm whitespace-nowrap text-zinc-400">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c25ed698ec06dc79f43c4d896f5624a1edd93654a161452e8bb042962799e3d4?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="shrink-0 self-stretch w-10 aspect-square" />
          <div className="flex flex-col justify-center self-stretch my-auto">
            <div className="flex gap-1.5 justify-between px-4 py-1.5 bg-neutral-400 bg-opacity-20 rounded-[100px]">
              <div>Поиск</div>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/662d525f8bbcf9d0e1ae12e80ed00dc4ef53b8abea39cd148eaca549a7a29984?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="shrink-0 w-3 aspect-square fill-zinc-400" />
            </div>
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d7eb9db7890a23454295861237c61a2257ca3c6cdebdafb5e3c237b7ef9bf4?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="shrink-0 self-stretch my-auto aspect-square w-[30px]" />
        </div>
        <div className="mt-8 text-xs text-center text-black">Счет в белорусских рублях</div>
        <div className="mt-3.5 text-3xl font-bold text-center text-black border-0 border-black border-solid">
          10 345,33 BYN
        </div>
        <div className="mt-3.5 text-xs text-center text-green-600">+10 000 BYN за все время</div>
      </header>
      <div className="flex flex-col px-4 mt-8 w-full">
        <div className="flex flex-col justify-center px-5 py-4 w-full text-xs text-black whitespace-nowrap bg-white rounded-3xl shadow-sm">
          <div className="flex gap-5 justify-center pr-2.5">
            <div className="flex flex-col justify-center px-6">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/626c74ac7449d7f3ba9e6c4a583f8b91ae9998b4e58a7f36ee745dc08a4333bc?apiKey=a19014d136ea4220b2780e245b371243&" alt="Купить" className="self-center aspect-[0.98] w-[50px]" />
              <div>Купить</div>
            </div>
            <div className="flex flex-col justify-center px-4">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/60b8cf5692ac4961236dc962289c781100735cac47e8a1fd8c9cce8d96bc83a1?apiKey=a19014d136ea4220b2780e245b371243&" alt="Автоинвест" className="self-center aspect-square w-[50px]" />
              <div>Автоинвест</div>
            </div>
            <div className="flex flex-col justify-center px-3">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/336eed7ca3cad7119c1abd6edfbe8f657200bec3d472b4f1213503e1991d56d4?apiKey=a19014d136ea4220b2780e245b371243&" alt="Вывести" className="self-center aspect-[1.02] w-[51px]" />
              <div>Вывести</div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-8 text-black">
          <div className="flex flex-col flex-1 py-6 bg-white rounded-3xl">
            <div className="flex flex-col px-7">
              <div className="text-sm font-bold text-center">Аналитика рынка</div>
              <div className="self-end mt-5 text-xs">+9 340 BYN</div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e0a3a4e8512c1d14b60047418b72169b18021232520a78061f8f49ce0db63f2?apiKey=a19014d136ea4220b2780e245b371243&"
              alt="Аналитика рынка chart"
              className="self-center mt-1.5 border-2 border-green-600 border-solid aspect-[5.88] fill-green-600 stroke-[1.5px] stroke-green-600 w-[185px]"
            />
          </div>
          <div className="flex flex-col flex-1 px-5 pt-3.5 pb-6 font-bold whitespace-nowrap bg-white rounded-3xl">
            <div className="flex gap-5 justify-between px-0.5">
              <div className="text-sm">Акции</div>
              <div className="justify-center px-1 py-0.5 text-xs leading-loose bg-green-600 bg-opacity-50 rounded-[57.471px]">
                +4
              </div>
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/18f9c069f8caf08136c25c8acf8b721aed84e9f2040b3bb0072fe4a2386f0899?apiKey=a19014d136ea4220b2780e245b371243&" alt="Акции chart" className="self-center mt-6 max-w-full aspect-[2.5] w-[100px]" />
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-10">
          <div className="text-xl font-bold text-black border-0 border-black border-solid">Рекомендации от нас</div>
          <div className="my-auto text-base text-neutral-400">все</div>
        </div>
        <div className="flex gap-5 mt-5">
          {recommendations.map((recommendation, index) => (
            <Recommendation key={index} {...recommendation} />
          ))}
        </div>
        <section className="flex flex-col pt-5 pb-1 mt-5 w-full bg-white rounded-3xl">
          <div className="flex gap-5 justify-between mr-6 ml-6">
            <div className="flex flex-col">
              <h2 className="text-sm font-bold text-center text-black">Последние события</h2>
              <div className="mt-7 text-base text-neutral-400">СЕГОДНЯ, 11 апреля 2024</div>
            </div>
            <div className="self-start text-base text-neutral-400">все</div>
          </div>
          {events.map((event, index) => (
            <Event key={index} {...event} />
          ))}
          <div className="flex flex-col px-px pt-3 pb-7 w-full bg-white">
            <div className="flex gap-0 justify-between pr-1.5">
              <div className="flex flex-col justify-center items-start px-7 pt-1.5" />
            </div>
          </div>
        </section>
      </div>
      <footer className="flex flex-row">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9002524ba5e07f4df2fa7e52c7958c1290807ebd9c1bfb35d70f0161bcdf172a?apiKey=a19014d136ea4220b2780e245b371243&"
          alt=""
          className="object-contain z-10 aspect-[1.55] w-[69px] max-sm:mr-auto max-sm:ml-5 max-sm:w-full max-sm:max-w-[61px]"
        />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8ba2a66ef723a28834e635fe067d2904406d7a77043c3ce1cbbcee8950328bf?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="self-start aspect-[6.67] w-[350px]" />
      </footer>
    </div>
  );
}

export default Invest;