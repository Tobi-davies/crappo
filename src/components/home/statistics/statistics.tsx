import { media } from "../../../mocks/media.mock";
import { statsData } from "../../../mocks/stats.mock";
import styles from "./statistics.module.css";

export const Statistics = () => {
  const { stats } = media;

  return (
    <div
      className="bg-royalBlue pt-12 pb-16"
      style={{
        backgroundImage: `url(
              ${stats.quarter_circle}
            )`,
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        // backgroundSize: "30% 60%",
        // backgroundSize: "63%",
      }}
    >
      <div className="max-w-128 mx-auto px-5 sm:px-10 ">
        <h3 className="text-white text-[25px] md:text-3xl font-bold max-w-[600px] text-center mx-auto mb-7 sm:mb-11 md:mb-16">
          Market sentiments, portfolio, and run the infrastructure of your
          choice
        </h3>
      </div>

      <div>
        {statsData.map((item, i) => (
          <div key={i} className={styles.feature_container}>
            <div className={styles.text_container}>
              <h3
                className={styles.title}
                data-aos="fade-up"
                data-aos-delay="550"
              >
                {item.title}
              </h3>
              <p
                className={styles.desc}
                data-aos="fade-up"
                data-aos-delay="750"
              >
                {item.description}
              </p>
              <button
                className={styles.cta}
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                {item.cta}
              </button>
            </div>

            <div className={styles.illustration_container}>
              <img
                src={item.image}
                alt="statistics illustration"
                data-aos="slide-right"
                data-aos-duration="1000"

                // width="150%"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
