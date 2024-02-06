import { Link } from "react-router-dom";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

const SignUp = () => {
  return (
    <div>
      <form className="mt-12 card-body">
        <div className="my-4 form-control">
          <img src={img1} alt="" />
          <input
            type="email"
            placeholder="User ID"
            className="ps-12 input-bordered"
            required
          />
        </div>
        <div className="mt-[2rem] form-control">
          <img src={img2} alt="" />
          <input
            type="email"
            placeholder="Email"
            className="ps-12 input-bordered"
            required
          />
        </div>
        <div className="mt-[2.5rem] form-control">
          <img src={img3} alt="" />
          <input
            type="password"
            placeholder="Password"
            className="ps-12 bg-none input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <Link to="/welcome">
            <button className="rounded-full">Sign In</button>
          </Link>
        </div>

        <p className="text-center">
          Already have an account ? or <Link to="/login">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
