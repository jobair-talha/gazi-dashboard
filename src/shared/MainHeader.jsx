import { BsBell } from "react-icons/bs";
import "../assets/sass/_mainHeader.scss";

const MainHeader = () => {
  return (
    <>
      <div className="main-header  px-4 py-2 fixed w-[100%]">
        <div className="flex justify-between items-center">
          <div>
            <img
              src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1634218044logoforsite.png"
              alt="Logo"
            />
          </div>
          <div className=" flex items-center">
            <div className=" relative mr-6">
              <BsBell className=" text-2xl" />
              <div className=" absolute top-0 right-0 translate-x-full -translate-y-full bg-slate-400 rounded-full p-2 text-white w-[15px] h-[15px] flex justify-center items-center text-sm">
                1
              </div>
            </div>
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1631023655pexels-moose-photos-1036627.jpg"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
