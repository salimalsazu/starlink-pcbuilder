import RootLayout from "@/components/layout/RootLayout";
import React from "react";
import Lottie from "lottie-react";
import reader from "../../Assets/login/login.json";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => console.log(data);

  return (
    <div className="flex items-center flex-col lg:flex-row-reverse lg:w-[1170px] lg:mx-auto">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 justify-center items-center lg:w-[1170px] lg:mx-auto ">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          novalidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label for="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                placeholder="salim@gmail.com"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label for="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
              >
                Sign in
              </button>

              <button
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 mt-5"
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "https://starlink-mu.vercel.app",
                  })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Login with Google</p>
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Dont have an account yet?
              <Link
                rel="noopener noreferrer"
                href="/auth/registration"
                className="hover:underline dark:text-violet-400 ml-3 text-blue-500"
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
      <div>
        <Lottie animationData={reader} loop={true} />
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
