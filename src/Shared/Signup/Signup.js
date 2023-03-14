import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Signup = () => {
  const [signupError, setSignUpError] = useState(" ");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);
  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError(" ");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast("signUp successfully ok");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUse(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
    console.log(data);
  };
  const saveUse = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(" saveUser and ok", data);
        navigate("/");
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="e-96 p-6">
        <h1 className="text-4xl  text-center"> Sign Up </h1>

        <form onSubmit={handleSubmit(handleSignUp)}>
          {/* <form onSubmit={handleSubmit(handleLogin)}> */}

          {/* //,,,,,,,,,,,,,,,,,name.........,,,,,,,,,,,, */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-1xl text-primary font-bold">
                Your Name
              </span>
            </label>
            <input
              name="name"
              type="text"
              {...register("name", { required: "Name  is required" })}
              placeholder="Your name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* //,,,,,,,,,,,,,,,,,Email,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
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
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
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
          </div>
          {signupError && <p className="text-red-600">{signupError}</p>}

          <input
            className="btn btn-accent w-full  mt-4 "
            value="Sign Up"
            type="submit"
          />
          <p className="gap-1">
            Already have a account
            <Link className="text-primary" to="/login">
              please Login
            </Link>
          </p>
          <div className="divider">OR</div>

          {/* <div className="flex flex-col w-full border-opacity-50">
<div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>

<div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
</div> */}
          <button className="btn bnt-outline w-full">Google Login</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
