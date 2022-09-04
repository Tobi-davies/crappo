import { media } from "../../../mocks/media.mock";

export const Trade = () => {
  const { trade, hero } = media;

  return (
    <>
      <div className="bg-darkNavyBlue">
        <div className="pt-14 py-24 text-center">
          <h3 className="text-white mb-5 text-3xl font-bold">
            Check how much you can earn
          </h3>
          <p className="text-lightGrayText mb-6 max-w-[450px] mx-auto text-sm">
            Let’s check your hash rate to see how much you will earn today,
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className="bg-white relative">
        <div className="px-10 absolute top-[-3px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="bg-white p-12 rounded-2xl w-[800px] shadow-lg shadow-slate-300">
            kojihjubvj
          </div>
        </div>

        <div className="max-w-128 mx-auto px-10 pb-16">
          <h3 className="mb-5 text-3xl font-bold text-darkNavyBlue max-w-[550px] mx-auto text-center pt-[200px]">
            Trade securely and market the high growth cryptocurrencies.
          </h3>
          <div className="flex justify-between gap-6">
            <div className="max-w-[330px] bg-royalBlue rounded-xl flex flex-col items-center text-center px-8 py-12">
              <div className="mb-8">
                <img
                  src={trade.bitcoin}
                  alt="btc-icon"
                  width="80%"
                  className="mx-auto"
                />
              </div>
              <p className="mb-5">
                <span className="text-white text-xl font-bold">Bitcoin</span>{" "}
                <span className="text-white text-[13px] font-[400]">BTC</span>
              </p>
              <p className="text-white text-sm mb-5">
                Digital currency in which a record of transactions is
                maintained.
              </p>
              <button className="bg-blue text-white rounded-3xl py-2 px-4 flex gap-2 items-center justify-between">
                <span className="text-white text-sm">Start mining</span>
                <img src={hero.arrow_right} alt="arrow icon" width="20%" />
              </button>
            </div>
            {/* second */}
            <div className="max-w-[330px] bg-royalBlue rounded-xl flex flex-col items-center text-center p-8">
              <div className="mb-6">
                <img
                  src={trade.bitcoin}
                  alt="btc-icon"
                  width="50%"
                  className="mx-auto"
                />
              </div>
              <p className="mb-3">
                <span className="text-white text-xl font-bold">Bitcoin</span>{" "}
                <span className="text-white text-[13px] font-[400]">BTC</span>
              </p>
              <p className="text-white text-sm mb-4">
                Digital currency in which a record of transactions is
                maintained.
              </p>
              <button className="bg-blue text-white rounded-3xl py-2 px-4 flex gap-2 items-center justify-between">
                <span className="text-white text-sm">Start mining</span>
                <img src={hero.arrow_right} alt="arrow icon" width="20%" />
              </button>
            </div>

            {/* third */}

            <div className="max-w-[330px] bg-royalBlue rounded-xl flex flex-col items-center text-center p-8">
              <div className="mb-6">
                <img
                  src={trade.bitcoin}
                  alt="btc-icon"
                  width="50%"
                  className="mx-auto"
                />
              </div>
              <p className="mb-3">
                <span className="text-white text-xl font-bold">Bitcoin</span>{" "}
                <span className="text-white text-[13px] font-[400]">BTC</span>
              </p>
              <p className="text-white text-sm mb-4">
                Digital currency in which a record of transactions is
                maintained.
              </p>

              <img src={hero.arrow_right} alt="arrow icon" width="20%" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
