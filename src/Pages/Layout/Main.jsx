import { Outlet } from "react-router-dom";
import "./Main.css";
import img1 from "../../assets/Mr.ai-Starting.gif";
import img2 from "../../assets/Frame.png";

import { LayoutGroup } from "framer-motion";

const Main = () => {
  return (
    <div className="pt-32">
      <div className="relative box card shrink-0 w-full max-w-sm bg-base-100 min-h-[424.698px] w-[637.726px] mx-auto p-2 pb-[1rem]">
        <div className="absolute -top-[40px] -right-[40px] circle border rounded-full pt-8 p-6 bg-[#ECEEF7]">
          <img className="mt-[0.25rem]" src={img2} alt="" />
        </div>
        <div>
          <img className="ms-[-6rem] mt-[-4rem] mb-[-6rem]" src={img1} alt="" />
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
