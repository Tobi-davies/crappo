import { media } from "../../../mocks/media.mock";

const quickLinks = [
  {
    path: "",
    title: "Home",
  },
  {
    path: "",
    title: "Products",
  },
  {
    path: "",
    title: "About",
  },
  {
    path: "",
    title: "Features",
  },
  {
    path: "",
    title: "Contact",
  },
];

const resources = [
  {
    path: "",
    title: "Download Whitepapper",
  },
  {
    path: "",
    title: "Smart Token",
  },
  {
    path: "",
    title: "Blockchain Explorer",
  },
  {
    path: "",
    title: "Crypto API",
  },
  {
    path: "",
    title: "Interest",
  },
];

export const Footer = () => {
  const { footer, hero } = media;

  return (
    <div className="max-w-128 mx-auto px-10 pt-7 sm:pt-14 pb-7 sm:pb-14">
      <div className="flex flex-col items-center sm:items-start text-center sm:text-start sm:flex-row mb-16 flex-wrap">
        <div className="sm:w-4/12 md:w-3/12 lg:w-3/12 mb-4 sm:mb-0">
          <img src={hero.logo} alt="logo" />
        </div>
        <div className="sm:w-4/12 md:w-2/12 lg:w-3/12 mb-5 sm:mb-0">
          <span className="text-white text-base ">Quick Link</span>
          <ul className="mt-2 sm:mt-4">
            {quickLinks.map((link, i) => (
              <li
                key={i}
                className="text-lightGrayText text-sm mb-2 sm:mb-3 cursor-pointer"
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:w-4/12 md:w-3/12 lg:w-3/12">
          <span className="text-white text-base ">Resources</span>
          <ul className="mt-2 sm:mt-4">
            {resources.map((link, i) => (
              <li
                key={i}
                className="text-lightGrayText text-sm mb-2 sm:mb-3 cursor-pointer"
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:w-7/12 md:w-4/12 lg:w-3/12">
          <p className="text-white text-2xl font-medium mb-4 md:mb-10 mt-3 md:mt-0 ">
            We accept following payment systems
          </p>
          <div className="flex gap-2 items-center  justify-center sm:justify-start">
            <div className="w-[80px]">
              <img src={footer.visa} alt="visa" width="80px" />
            </div>
            <div className="w-[80px]">
              <img src={footer.mastercard} alt="visa" width="80px" />
            </div>
            <div className="w-[80px]">
              <img src={footer.btc} alt="visa" width="80px" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center sm:flex-row sm:justify-between gap-2 sm:gap-0">
        <p className="text-white text-sm">©2021 CRAPPO. All rights reserved</p>
        <div className="flex gap-4">
          <img
            src={footer.facebook}
            alt="facebook"
            className="cursor-pointer"
          />
          <img
            src={footer.instagram}
            alt="instagram"
            className="cursor-pointer"
          />
          <img src={footer.youtube} alt="youtube" className="cursor-pointer" />
          <img src={footer.twitter} alt="twitter" className="cursor-pointer" />
          <img
            src={footer.linkedin}
            alt="linkedin"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
