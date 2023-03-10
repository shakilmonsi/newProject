import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [data, setData] = useState(" ");
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(" ");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleLogin = (data) => {
    setLoginError(" ");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="e-96 p-6">
        <h1 className="text-4xl  text-center"> login</h1>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-1xl text-primary font-bold">
                Your Email
              </span>
            </label>
            <input
              name="email"
              type="email"
              {...register("email", { required: "Email Address is required" })}
              placeholder="email "
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-900 font-bold">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-1xl text-primary font-bold">
                Your Password
              </span>
            </label>
            <input
              name="password"
              type="text"
              {...register("password", {
                required: "Email Address is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 characters or longer",
                },
              })}
              placeholder="First name"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-900 font-bold">
                {errors.password?.message}
              </p>
            )}

            <label className="label">
              <span className="label-text text-rad font-bold">
                forgat Password
              </span>
            </label>
          </div>

          <input
            className="btn btn-accent w-full "
            value="login"
            type="submit"
          />
          <div>
            {loginError && (
              <p className="text-red-600 font-bold">{loginError}</p>
            )}
          </div>
          <p className="gap-1">
            create a new account
            <Link className="text-primary" to="/signup">
              SignUp new account
            </Link>
          </p>
          <div className="divider">OR</div>

          {/* <div className="flex flex-col w-full border-opacity-50">
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
  
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
</div> */}

          <button className="btn bnt-outline w-full">Google Login</button>
          <div>
            {loginError && <p className="text-red">{loginError}loginError</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
