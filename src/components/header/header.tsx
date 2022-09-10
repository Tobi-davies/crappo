import { media } from "../../mocks/media.mock";
import { FaBars } from "react-icons/fa";

export const Header = () => {
  const { hero } = media;
  return (
    <div>
      <div className="max-w-128 mx-auto px-5 sm:px-10 flex justify-between items-center pt-6">
        <div>
          <img src={hero.logo} alt="logo" />
        </div>

        <div className="hidden lg:block">
          <nav className="flex items-center">
            <ul className="flex gap-x-10">
              <li className="text-white"> Products</li>
              <li className="text-white">Features </li>
              <li className="text-white">About </li>
              <li className="text-white">Contact </li>
              <li className="text-white"> Login </li>
            </ul>
            <div className="bg-[#F2F2F2] h-[14px] w-[1px] mx-7"></div>
            <button className="bg-blue text-white rounded-2xl py-1 px-3">
              Register
            </button>
          </nav>
        </div>

        <div className="block lg:hidden">
          {/* <img src={hero.harmburger} alt="harmburger" /> */}
          <FaBars className="text-white" />
        </div>
      </div>
    </div>
  );
};
