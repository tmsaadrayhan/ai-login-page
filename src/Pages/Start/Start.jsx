import { Link } from "react-router-dom";
import img1 from "../../assets/MR.AI-GIF/1.gif";
import img2 from "../../assets/MR.AI-GIF/2.gif";
import img3 from "../../assets/MR.AI-GIF/3.gif";
import { useEffect, useState } from "react";

const Start = () => {
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible2(true);
      setIsVisible1(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible3(true);
      setIsVisible2(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="h-[481.3px]">
        {isVisible1 && (
          <img className="w-[22rem] ms-[1.5rem] my-[-3rem]" src={img1} alt="" />
        )}
        {isVisible2 && (
          <img className="w-[22rem] ms-[1.5rem] my-[-3rem]" src={img2} alt="" />
        )}
        {isVisible3 && (
          <img className="w-[22rem] ms-[1.5rem] my-[-3rem]" src={img3} alt="" />
        )}
      </div>
      <div className="form-control mt-6">
        <Link to="/login">
          <button className=" txt-white ms-[2rem] rounded-full mb-[4rem] w-[19rem]">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Start;
