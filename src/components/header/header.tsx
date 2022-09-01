import { media } from "../../mocks/media.mock";

export const Header = () => {
  const { hero } = media;
  return (
    <div>
      <div className="max-w-128 mx-auto flex justify-between items-center pt-6">
        <div>
          <img src={hero.logo} alt="logo" />
        </div>

        <div className="">
          <nav className="flex items-center">
            <ul className="flex gap-x-10">
              <li className="text-white"> Products</li>
              <li className="text-white">Features </li>
              <li className="text-white">About </li>
              <li className="text-white">Contact </li>
              <li className="text-white"> Login </li>
            </ul>
            <div className="bg-[#F2F2F2] h-[10px] w-[1px] mx-7"></div>
            <button className="bg-blue text-white rounded-xl py-1 px-3">
              Register
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
