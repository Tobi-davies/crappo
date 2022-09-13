import { media } from "../../../mocks/media.mock";
import styles from "./trade.module.css";

export const Trade = () => {
  const { trade, hero } = media;

  return (
    <>
      <div className="bg-darkNavyBlue">
        <div className="pt-14 py-24 text-center mb-20 sm:mb-16 px-5">
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
        <div className="px-5 md:px-0 absolute top-[-3px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full sm:w-full md:w-8/12">
          <div className="px-7 md:px-10 bg-white rounded-2xl shadow-lg">
            <div className="flex flex-col sm:flex-row items-end pt-6 pb-1 md:py-6  gap-3 md:gap-6">
              <div className="w-full sm:w-3/5 md:w-2/4 lg:w-3/6">
                <input
                  type="text"
                  placeholder="Enter your hash rate"
                  className="border-b-2 border-lightGrayText-300 w-full text-darkNavyBlue focus:outline-none placeholder:text-darkNavyBlue px-1"
                />
              </div>
              <div className="w-full sm:w-1/5 md:w-1/4 lg:w-2/6">
                <input
                  type="text"
                  placeholder="TH/s"
                  className="border-b-2 border-lightGrayText-300 w-full text-darkNavyBlue focus:outline-none placeholder:text-darkNavyBlue px-1"
                />
              </div>
              <button className="bg-blue px-3 py-2 w-full md:w-1/4 sm:w-1/5 lg:w-1/6 rounded-3xl text-white">
                Calculate
              </button>
            </div>

            <div className="flex flex-col py-8">
              <p className="text-blue text-uppercase text-sm mb-1 md:mb-2">
                ESTIMATED 24 HOUR REVENUE:
              </p>
              <span className="text-2xl text-darkNavyBlue font-bold md:mb-1">
                0.055 130 59 ETH <span className="text-blue">($1275)</span>
              </span>
              <span className="text-darkGrayText text-sm md:text-base">
                Revenue will change based on mining difficulty and Ethereum
                price.
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-128 mx-auto px-10 pb-16">
          <h3 className="mb-5 md:mb-7 text-[25px] md:text-3xl font-bold text-darkNavyBlue max-w-[550px] mx-auto text-center pt-[200px] md:pt-[160px]">
            Trade securely and market the high growth cryptocurrencies.
          </h3>
          <div className="flex flex-wrap lg:flex-nowrap  justify-center lg:justify-between  gap-6">
            {/* <div className="max-w-[330px] bg-royalBlue rounded-xl flex flex-col items-center text-center px-8 py-12">
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
            </div> */}

            <div className={styles.card}>
              <div className="mb-8">
                <img
                  src={trade.bitcoin}
                  alt="btc-icon"
                  width="80%"
                  className="mx-auto"
                />
              </div>
              <p className="mb-5">
                <span className={styles.name}>Bitcoin</span>
                <span className={styles.symbol}>BTC</span>
              </p>
              <p className={styles.desc}>
                Digital currency in which a record of transactions is
                maintained.
              </p>
              <img
                src={hero.big_arrow}
                alt="arrow icon"
                width="20%"
                className={styles.big_arrow}
              />
              <button className={styles.button}>
                <span className="text-white text-sm">Start mining</span>
                <img src={hero.arrow_right} alt="arrow icon" width="20%" />
              </button>
            </div>
            {/* second */}
            <div className={styles.card}>
              <div className="mb-8">
                <img
                  src={trade.ethereum}
                  alt="eth-icon"
                  width="80%"
                  className="mx-auto"
                />
              </div>
              <p className="mb-5">
                <span className={styles.name}>Ethereum</span>
                <span className={styles.symbol}>ETH</span>
              </p>
              <p className={styles.desc}>
                Blockchain technology to create and run decentralized digital
                applications.
              </p>
              <img
                src={hero.big_arrow}
                alt="arrow icon"
                width="20%"
                className={styles.big_arrow}
              />
              <button className={styles.button}>
                <span className="text-white text-sm">Start mining</span>
                <img src={hero.arrow_right} alt="arrow icon" width="20%" />
              </button>
            </div>

            {/* third */}

            <div className={`${styles.card} `}>
              <div className="mb-4 md:mb-8">
                <img
                  src={trade.litecoin}
                  alt="ltc-icon"
                  width="80%"
                  className="mx-auto"
                />
              </div>
              <p className="mb-3 md:mb-5">
                <span className={styles.name}>Litecoin</span>{" "}
                <span className={styles.symbol}>LTC</span>
              </p>
              <p className={styles.desc}>
                Cryptocurrency that enables instant payments to anyone in the
                world.
              </p>

              <img
                src={hero.big_arrow}
                alt="arrow icon"
                width="20%"
                className={styles.big_arrow}
              />
              <button className={styles.button}>
                <span className="text-white text-sm">Start mining</span>
                <img src={hero.arrow_right} alt="arrow icon" width="20%" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
