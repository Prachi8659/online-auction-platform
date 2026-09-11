import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordSendMail, reset } from "../../store/auth/authSlice";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSuccess, isError, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
      dispatch(reset());
      navigate("/login")
    }
    if (isError) {
      toast.error(message);
      dispatch(reset());
    }

    return () => {
      dispatch(reset());
    };
  }, [isSuccess, isError]);

  const handlePasswordReset = (e) => {
    e.preventDefault();
    //console.log(email);
    if (email === "") {
      toast.error("Email is required");
      return false;
    }
    dispatch(forgotPasswordSendMail({ email }));
  
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-body-bg text-body-text-color">
      <div className="flex w-[90%] flex-col items-center rounded-xl bg-theme-bg py-8 sm:w-2/5 sm:px-6">
        <h1 className="text-3xl font-bold text-white">
          <span className="uppercase text-theme-color">D</span>-
          <span className="uppercase text-theme-color">A</span>uction
        </h1>
        <p className="m-2 text-xl">Reset your account password</p>
        <p className="my-3 h-[1px] w-[80%] bg-[#747d9340]"></p>
        <form
          className="flex w-[90%] flex-col sm:w-[90%]"
          onSubmit={handlePasswordReset}
        >
          <label className="my-1 text-lg">Email Address</label>
          <input
            type="email"
            placeholder="Your Email"
            className="rounded text-white border-[1px] focus:border-theme-color bg-theme-bg2 px-5 py-3 outline-none mb-2 placeholder-body-text-color border-border-info-color"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="my-4 font-Roboto outline-none border-none w-full rounded bg-theme-color px-4 py-3 font-bold hover:bg-hover text-[#ffffff] transition-all"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
