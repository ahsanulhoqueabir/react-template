import Lottie from "lottie-react";
import err from "../assets/error.json";
import { Link } from "react-router-dom";
import { FaArrowTurnUp } from "react-icons/fa6";
const ErrorPage = () => {
  return (
    <div className=" flex justify-center flex-col items-center h-screen py-10">
      <Lottie className="w-[60%] h-96 flex-1" animationData={err}></Lottie>
      <Link className="btn text-black bg-white rounded hover:bg-green-600" to="/">
        <FaArrowTurnUp className="h-4 -rotate-90"> </FaArrowTurnUp> Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
