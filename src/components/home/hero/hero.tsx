import { media } from "../../../mocks/media.mock";

export const Hero = () => {
  const { hero } = media;

  return (
    <div
      style={{
        backgroundImage: `url(
                ${hero.block1}
              )`,
        backgroundPosition: "50% 90%",
        backgroundRepeat: "no-repeat",
        // backgroundSize: "30% 60%",
        backgroundSize: "63%",
      }}
    >
      <div
        className=""
        style={{
          backgroundImage: `url(
                    ${hero.block2}
                  )`,
          backgroundPosition: "100% 90%",
          backgroundRepeat: "no-repeat",
          // backgroundSize: "30% 60%",
          backgroundSize: "48%",
        }}
      >
        <div className="max-w-128 mx-auto px-10 pt-6 pb-20 flex">
          <div className="w-1/2 pt-16 border border-slate-300">
            <div className="bg-[#ffffff0d] flex items-center gap-2 mb-8">
              <span className="text-darkNavyBlue bg-white rounded-xl text-sm px-1.5 py-px flex items-center justify-center">
                75% SAVE
              </span>
              <span className="text-white text-sm">
                For the Black Friday weekend
              </span>
            </div>
            <h1 className="text-white text-5xl font-bold mb-6 leading-[55px]">
              Fastest & secure platform to invest in crypto
            </h1>
            <p className="text-lightGrayText text-sm max-w-[350px] mb-7">
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </p>
            <button className="bg-blue text-white rounded-3xl py-2 px-4 flex gap-2 items-center">
              <span className="text-white text-sm">Try for FREE</span>
              <img src={hero.arrow_right} alt="arrow icon" />
            </button>
          </div>
          <div className="w-1/2 border border-slate-300">
            <img
              src={hero.illustration_1}
              alt="illustration"
              // width="100%"
              // height="70%"
              className="border border-slate-300"
            />
          </div>
        </div>
      </div>

      <div className="max-w-128 mx-auto px-10 pt-12 flex justify-between border border-slate-300">
        <div className="flex items-center justify-center pr-10 border border-slate-300">
          <div>
            <img src={hero.icon_bars} width="70%" alt="bars" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[30px]">$30B</span>
            <span className="text-lightGrayText text-sm">
              Digital Currency Exchanged
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center pr-10 border border-slate-300">
          <div>
            <img src={hero.icon_contact} width="70%" alt="bars" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[30px]">10M+</span>
            <span className="text-lightGrayText text-sm">
              Trusted Wallets Investor
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center pr-10 border border-slate-300">
          <div>
            <img src={hero.icon_web} width="70%" alt="bars" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[30px]">195</span>
            <span className="text-lightGrayText text-sm">
              Countries Supported
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
