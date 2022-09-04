import { media } from "../../../mocks/media.mock";

export const WhyCrappo = () => {
  const { hero } = media;

  return (
    <div className="max-w-128 mx-auto px-10 pt-14 pb-20 flex ">
      <div className="w-1/2 border border-slate-300">
        <img src={hero.illustration_3} alt="illustration" width="90%" />
      </div>
      <div className="w-1/2  border border-slate-300 pt-20">
        <div className="flex flex-col items-start max-w-[400px] ml-auto border border-slate-300">
          <h2 className="text-white text-3xl font-bold mb-6">
            Why you should choose CRAPPO
          </h2>
          <p className="text-lightGrayText text-sm  mb-7">
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
          <button className="bg-blue text-white rounded-3xl py-2 px-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
