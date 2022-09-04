import { media } from "../../../mocks/media.mock";
import styles from "./cta.module.css";

export const Cta = () => {
  const { stats } = media;

  return (
    <div
      className="py-10 px-13"
      style={{
        backgroundImage: `url(
          ${stats.dark_block1}
        ), url(
          ${stats.dark_block2}
        ), linear-gradient(#2B076E, #0D0D2B)`,
        backgroundPosition: "1% 100% ,  100% 30%",
        backgroundRepeat: "no-repeat",
        // backgroundSize: "30% 60%",
        // backgroundSize: "63%",
      }}
    >
      <div
        className="max-w-[1100px] mx-auto px-8 py-12 bg-blue rounded-lg grid grid-cols-2"
        style={{
          backgroundImage: `url(
              ${stats.litecoin_bg}
            ), url(
              ${stats.btc_bg}
            )`,
          backgroundPosition: "top left , bottom right",
          backgroundRepeat: "no-repeat",
          // backgroundSize: "30% 60%",
          // backgroundSize: "63%",
        }}
      >
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2">Start mining now</h3>
          <p className="max-w-[310px] text-sm">
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>

        <div className="flex items-center">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter your email"
              className={styles.input}
            />
            <button className="bg-white text-darkNavyBlue px-4 py-2 font-medium rounded-3xl text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
