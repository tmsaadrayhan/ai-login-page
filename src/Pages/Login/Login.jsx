import { Link } from "react-router-dom";
import img1 from "../../assets/1.png";
import img3 from "../../assets/3.png";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 1 },
};

const Login = () => {
  return (
    <div>
      <form className="mt-16 card-body">
        <div className="my-4 form-control">
          <img src={img1} alt="" />
          <input
            type="email"
            placeholder="User ID"
            className="ps-12 input-bordered"
            required
          />
        </div>
        <div className="mt-8 form-control">
          <img src={img3} alt="" />
          <input
            type="password"
            placeholder="Password"
            className="ps-12 bg-none input-bordered"
            required
          />
        </div>
        <div className="form-control mt-8">
          <Link to="/welcome">
            <button className="rounded-full">Sign In</button>
          </Link>
        </div>

        <p className="text-center">
          Forgotten password ? or <Link to="/sign-up">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
