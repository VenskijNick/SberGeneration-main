import * as React from "react";

interface MyComponentProps {
  // Add prop types here if needed
}

function MainScreen(props: MyComponentProps) {
  return (
    <div className="flex flex-col pt-14 pb-3.5 mx-auto w-full bg-white max-w-[480px]">
      <header className="flex flex-col px-6 w-full">
        <div className="flex gap-5 justify-between items-center px-px text-sm whitespace-nowrap text-zinc-400">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff29e5e45ce2a31fcf1c5a57e1e47659c38c811785191cd6eab107ba5a206116?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="shrink-0 self-stretch w-10 aspect-square" />
          <div className="flex flex-col justify-center self-stretch my-auto">
            <div className="flex gap-1.5 justify-between px-4 py-1.5 bg-neutral-400 bg-opacity-20 rounded-[100px]">
              <div>Поиск</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/662d525f8bbcf9d0e1ae12e80ed00dc4ef53b8abea39cd148eaca549a7a29984?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="shrink-0 w-3 aspect-square fill-zinc-400" />
            </div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d7eb9db7890a23454295861237c61a2257ca3c6cdebdafb5e3c237b7ef9bf4?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="shrink-0 self-stretch my-auto aspect-square w-[30px]" />
        </div>
        <div className="flex gap-5 justify-center px-px mt-7 w-full">
          <h1 className="text-xl font-bold text-black border-0 border-black border-solid">Мои деньги</h1>
          <div className="flex gap-4 my-auto">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/597e427fd3061c29f8c7f03bc10678851574c6c146492d46ea9756e4967fdb5a?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="shrink-0 aspect-[1.25] fill-black w-[25px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fe891798bb37c734d6f5ce93f034dc018268bdad6dcf71cb278efb9af92d978?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="shrink-0 my-auto w-4 border-2 border-black border-solid aspect-[1.33] stroke-[2px] stroke-black" />
          </div>
        </div>
      </header>
      <div className="self-start mt-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start pt-4 pr-14 pb-7 pl-5 mx-auto w-full font-bold text-black bg-white rounded-3xl">
              <div className="text-base">Всего средств:</div>
              <div className="mt-4 text-2xl border-0 border-black border-solid">10 345,33 BYN</div>
              <div className="mt-1.5 text-sm text-neutral-400">на всех счетах</div>
              <div className="flex gap-5 justify-between mt-16 text-xs whitespace-nowrap">
                <div className="flex gap-1.5">
                  <div className="shrink-0 my-auto w-2.5 h-2.5 bg-green-600 rounded-full" />
                  <div>Карты</div>
                </div>
                <div className="flex gap-1.5">
                  <div className="shrink-0 my-auto w-2.5 h-2.5 bg-lime-500 rounded-full" />
                  <div>Вклады</div>
                </div>
                <div className="flex gap-1.5">
                  <div className="shrink-0 my-auto w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                  <div>Инвестиции</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full" />
        </div>
      </div>
      <section className="flex flex-col items-start pl-6 mt-9 w-full">
        <div className="flex gap-5 whitespace-nowrap">
          <h2 className="text-xl font-bold text-black border-0 border-black border-solid">Виджеты</h2>
          <div className="flex-auto my-auto text-base text-neutral-400">все</div>
        </div>
        <div className="justify-center mt-6">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <Widget
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/57ce64f0a62fa257b3d463c440374dd3ebfba15a087cc3e36cc5849a33a61f49?apiKey=a19014d136ea4220b2780e245b371243&"
              amount="-2 345,33 BYN"
              description="Расходы в марте"
            />
            <Widget
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d3b4e450e2a4e31eb616962e8fc3a5ec45623aa343760cd192b65ea7f5df8528?apiKey=a19014d136ea4220b2780e245b371243&"
              amount="+5 846,89 BYN"
              description="Расходы в марте"
            />
            <Widget
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d9bd3bdd6cdece3d1a8c5140aeb1405b29e49b3cf46dbad86704ac492268d6df?apiKey=a19014d136ea4220b2780e245b371243&"
              amount="10 345,33 BYN"
              description="Сейчас в наличии"
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between pr-20 mt-8 w-full text-xl font-bold text-black whitespace-nowrap">
          <div className="flex gap-2.5">
            <div className="border-0 border-black border-solid">Цели</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad0a7e6d07cd24f54156b280080ce5d9c98d43c0ab47849ffee488eb437522aa?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="shrink-0 my-auto w-2.5 aspect-[2.5] fill-neutral-400" />
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f79a6d163b188630d32a9d556a66d817763403869ee76afd9ee0864d899a8d2?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="shrink-0 my-auto w-3.5 border border-green-600 border-solid aspect-square fill-green-600 stroke-[0.5px] stroke-green-600" />
        </div>
        <div className="flex gap-5 mt-6">
          <div className="flex flex-col justify-center items-center self-start">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8efb821998d5e632c1a9b4ad709f106ae09641362ff6c99e97cf7f2bfd86c479?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="aspect-[1.61] fill-green-600 w-[34px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9bf36c9e2f7f27f08d7206805f3ec4ace8e1fe3fbeeaf71b9d5732804c2c87f?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="mt-12 aspect-[1.27] fill-green-600 w-[34px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b448bc3f886b93bbad1da1604cbce2f8089933091c460aa37a4ea4cc439ff20?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="mt-12 aspect-[1.35] fill-green-600 w-[34px]" />
          </div>
          <div className="flex flex-col grow shrink-0 basis-0 w-fit">
            <Goal
              amount="0 BYN"
              description="Новый компьютер"
              total="из 12 000 BYN"
              date="до 30.06.2024"
              progressImage="https://cdn.builder.io/api/v1/image/assets/TEMP/e9d64e9c121ce1765b38789806259d4a1e43c6ce0d1e4f3a839ba83cba788f39?apiKey=a19014d136ea4220b2780e245b371243&"
              progressWidth="w-[5px]"
            />
            <Goal
              amount="10 000 BYN"
              description="Путешествие"
              total="из 25 000 BYN"
              date="до 30.05.2024"
              progressImage="https://cdn.builder.io/api/v1/image/assets/TEMP/e9d64e9c121ce1765b38789806259d4a1e43c6ce0d1e4f3a839ba83cba788f39?apiKey=a19014d136ea4220b2780e245b371243&"
              progressWidth="w-[154px]"
            />
            <div className="flex gap-5 mt-9">
              <div className="flex flex-col flex-1">
                <div className="text-base font-bold text-black">90 000 BYN</div>
                <div className="mt-2.5 text-xs text-gray-500">Новый дом</div>
              </div>
              <div className="flex flex-col flex-1 self-start text-xs text-gray-500">
                <div>из 100 000 BYN</div>
                <div className="mt-2.5">до 31.12.2024</div>
              </div>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bfa9b39af8fe62684924f16e55245b4accd8e38ee3b5be2d3ead1da6ff0b206?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="mt-1 w-full border-2 border-solid border-zinc-300 stroke-[2px] stroke-zinc-300" />
          </div>
        </div>
        <div className="mt-20 w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center items-center pt-4 pl-3 w-full text-base font-bold text-black rounded-xl bg-sky-500 bg-opacity-70">
                <div className="self-start">
                  Как правильно <br /> экономить?
                </div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c411e99395525a6beb6128c7e0be44a852a0a2be2d16046afd6ae9df4878a4ce?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="z-10 self-end max-w-full aspect-square w-[107px]" />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-0 items-start pt-4 pl-3 w-full text-base font-bold text-black rounded-xl bg-green-400 bg-opacity-70">
                <div className="self-start">
                  Советы <br /> от Сбера
                </div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d2b621ea9d50112a2a185a2bf40559b61258d8bbaa4a8c7b5a728f6b10c0cc2?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="z-10 shrink-0 self-end mt-2.5 max-w-full aspect-square w-[120px]" />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd8d38a5e59dfdfba64464504535bb31cbb86d7854060bd88e505116059ac7d0?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="grow shrink-0 aspect-[0.63] w-[75px]" />
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col pt-3 pb-7 mt-2.5 w-full text-xs text-center whitespace-nowrap bg-white">
        <div className="flex gap-0 w-full">
          <div className="flex flex-1 gap-0 text-black text-opacity-60">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f98a630aac6b21a2f1739b88217ca9bc9fba947b1b29976e606c545465150b14?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="shrink-0 aspect-[1.96] w-[95px]" />
            <div className="flex flex-col justify-center px-4 py-1.5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d729bce919b2bd7e216adc6db1379c3a11fbafe029115461add78d719c2bc2d?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="self-center w-6 aspect-square" />
              <div className="mt-1.5">Инвестиции</div>
            </div>
          </div>
          <div className="flex flex-1 gap-0">
            <div className="flex flex-col justify-center px-7 py-1.5 text-black text-opacity-60">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3133b407ec59e6cbc4034974cf037da78a4dc45ac0b9e0b2b0cced313f9440f9?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="self-center w-6 aspect-square" />
              <div className="mt-1.5">История</div>
            </div>
            <div className="flex flex-col justify-center px-7 py-1.5 text-neutral-500">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7db6bc564f0b8c365db2a207aa7a7580c5400c850f9582c90a1167be629e086a?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className="self-center w-6 aspect-square" />
              <div className="mt-1.5">Профиль</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface WidgetProps {
  icon: string;
  amount: string;
  amount1?: string;
  amount2?: string;
  description: string;
}

function Widget({ icon, amount, amount1, amount2, description }: WidgetProps) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center text-black shadow-sm">
        <div className="flex flex-col px-6 py-5 bg-white rounded-3xl">
          <img loading="lazy" src={icon} alt="" className="self-center aspect-[1.41] fill-[linear-gradient(90deg,#20A237_0%,#06DB02_104.81%)] w-[52px]" />
          <div className="mt-1.5 text-base font-bold">{amount}</div>
          {amount1 && amount2 && (
            <>
              <div className="self-start mt-1.5 text-sm">{amount1}</div>
              <div className="self-center mt-1.5">{amount2}</div>
            </>
          )}
          <div className="mt-1.5 text-xs">{description}</div>
        </div>
      </div>
    </div>
  );
}

interface GoalProps {
  amount: string;
  description: string;
  total: string;
  date: string;
  progressImage: string;
  progressWidth: string;
}

function Goal({ amount, description, total, date, progressImage, progressWidth }: GoalProps) {
  return (
    <>
      <div className="flex gap-5">
        <div className="flex flex-col flex-1">
          <div className="text-base font-bold text-black">{amount}</div>
          <div className="mt-2.5 text-xs text-gray-500">{description}</div>
        </div>
        <div className="flex flex-col flex-1 self-start text-xs text-gray-500">
          <div>{total}</div>
          <div className="mt-2.5">{date}</div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center items-start mt-1 border-2 border-solid border-zinc-300 min-h-[2px] stroke-[2px] stroke-zinc-300">
        <img loading="lazy" src={progressImage} alt="" className="object-cover absolute inset-0 size-full" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/071291fd93f29488d581eae3c71743dd310f767b6be1db46eb1776654c86aec8?apiKey=a19014d136ea4220b2780e245b371243&" alt="" className={`border-2 border-green-600 border-solid aspect-[2.5] stroke-[2px] stroke-green-600 ${progressWidth}`} />
      </div>
    </>
  );
}

export default MainScreen;