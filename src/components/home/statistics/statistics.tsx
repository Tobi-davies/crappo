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
      <div className="max-w-128 mx-auto px-10 ">
        <h3 className="text-white text-3xl font-bold max-w-[600px] text-center mx-auto mb-16">
          Market sentiments, portfolio, and run the infrastructure of your
          choice
        </h3>
      </div>

      <div>
        {statsData.map((item, i) => (
          <div key={i} className={styles.feature_container}>
            <div className={styles.text_container}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
              <button className={styles.cta}>{item.cta}</button>
            </div>

            <div className={styles.illustration_container}>
              <img
                src={item.image}
                alt="statistics illustration"
                // width="150%"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
