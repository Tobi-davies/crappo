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
        <div className="max-w-128 mx-auto px-5 sm:px-10 pt-6 pb-20 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 pt-6 sm:pt-16">
            <div className="bg-[#ffffff0d] max-w-[270px] ml-0 sm:mx-auto lg:mx-0 py-px rounded-xl flex items-center justify-center gap-3 mb-3 sm:mb-8">
              <span className="text-darkNavyBlue bg-white rounded-xl text-[13px] px-1.5 py-px flex items-center justify-center lg:justify-start">
                75% SAVE
              </span>
              <span className="text-white text-[13px]">
                For the Black Friday weekend
              </span>
            </div>
            <h1 className="max-w-[700px] lg:max-w-[470px] md:mx-auto lg:mx-0 text-start sm:text-center lg:text-start text-white text-3xl sm:text-5xl font-bold mb-3 sm:mb-6 sm:leading-[55px]">
              Fastest & secure platform to invest in crypto
            </h1>
            <p className="text-lightGrayText text-sm max-w-[350px] sm:mx-auto lg:mx-0 mb-3 sm:mb-7 text-start sm:text-center lg:text-start">
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </p>
            <button className="bg-blue text-white rounded-3xl py-2 px-4 flex gap-2 items-center sm:mx-auto lg:mx-0">
              <span className="text-white text-sm">Try for FREE</span>
              <img src={hero.arrow_right} alt="arrow icon" />
            </button>
          </div>
          <div className="lg:w-1/2 mx-auto lg:mx-0">
            <img
              src={hero.illustration_1}
              alt="illustration"
              // width="100%"
              // height="70%"
              className=""
            />
          </div>
        </div>
      </div>

      <div className="max-w-128 mx-auto px-10 pt-3 md:pt-12 flex flex-wrap ">
        <div className="w-full md:w-6/12 lg:w-4/12 flex flex-col md:flex-row items-center md:justify-start justify-center md:pr-10  mb-6 lg:mb-0 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={hero.icon_bars}
              width="70%"
              alt="bars"
              data-aos="fade-up"
            />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <span className="text-white text-[30px]" data-aos="fade-up">
              $30B
            </span>
            <span className="text-lightGrayText text-sm" data-aos="fade-up">
              Digital Currency Exchanged
            </span>
          </div>
        </div>

        <div
          className="w-full md:w-6/12 lg:w-4/12 flex flex-col md:flex-row items-center justify-center  md:pr-10 mb-6 lg:mb-0 items-center "
          // className="w-full md:w-6/12 lg:w-4/12 mb-4 lg:mb-0 flex flex-col md:flex-row text-center md:text-left gap-3 p-3 items-center md:items-start"
        >
          <div className="flex justify-center md:justify-start">
            <img
              src={hero.icon_contact}
              width="70%"
              alt="bars"
              data-aos="fade-up"
            />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <span className="text-white text-[30px]" data-aos="fade-up">
              10M+
            </span>
            <span className="text-lightGrayText text-sm" data-aos="fade-up">
              Trusted Wallets Investor
            </span>
          </div>
        </div>

        <div className="w-full md:w-6/12 lg:w-4/12 flex flex-col md:flex-row md:mx-auto items-center justify-center  md:pr-10 items-center ">
          <div className="flex justify-center md:justify-start">
            <img
              src={hero.icon_web}
              width="70%"
              alt="bars"
              data-aos="fade-up"
            />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <span className="text-white text-[30px]" data-aos="fade-up">
              195
            </span>
            <span className="text-lightGrayText text-sm" data-aos="fade-up">
              Countries Supported
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
