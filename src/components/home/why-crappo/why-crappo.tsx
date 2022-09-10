import { media } from "../../../mocks/media.mock";

export const WhyCrappo = () => {
  const { hero } = media;

  return (
    <div className="max-w-128 mx-auto px-5 sm:px-10 pt-14 pb-20 flex flex-col-reverse lg:flex-row">
      <div className="lg:w-1/2">
        <img
          src={hero.illustration_3}
          alt="illustration"
          // width="90%"
          className="w-[500px] lg:w-[90%] mx-auto lg:mx-0"
          data-aos="zoom-in"
          data-aos-delay="800"
          data-aos-duration="1000"
        />
      </div>
      <div className="lg:w-1/2 pt-0 sm:pt-20">
        <div className="flex flex-col items-start max-w-[500px] lg:max-w-[400px] mx-auto lg:mr-0">
          <h2
            className="text-white text-[27px] sm:text-3xl font-bold mb-2 sm:mb-6 text-start sm:text-center lg:text-start"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Why you should choose CRAPPO
          </h2>
          <p
            className="text-lightGrayText text-sm mb-3 sm:mb-7 text-start sm:text-center lg:text-start"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
          <button
            className="bg-blue text-white rounded-3xl py-2 px-4 sm:mx-auto lg:mx-0"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
