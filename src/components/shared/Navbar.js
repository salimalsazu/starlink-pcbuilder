import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { data: seassion } = useSession();

  const { products } = useSelector((state) => state.products);

  return (
    <div className="bg-lime-100 rounded-sm sticky top-0 z-50">
      <div className="navbar  w-[1170px] mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Categories</a>
                <ul className="p-2">
                  {products?.map((category) => (
                    <li key={Math.random()}>
                      <Link href={`/category/${category.category}`}>
                        {category.category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {!seassion && (
                <li>
                  <Link href={"/auth/login"}>Login</Link>
                </li>
              )}
              {!seassion && (
                <li>
                  <Link href={"/auth/registration"}>Registration</Link>
                </li>
              )}

              <div className="mt-5 mb-5">
                <Link
                  href={"/pcbuilder"}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md "
                >
                  PC Builder
                </Link>
              </div>

              <div>{seassion && <h1>{seassion?.user.name}</h1>}</div>

              <div>
                {seassion && (
                  <button
                    onClick={() => signOut()}
                    type="primary"
                    danger
                    className="bg-red-500 text-white rounded-full px-3 py-1 w-[100px] my-5"
                  >
                    Logout
                  </button>
                )}
              </div>
            </ul>
          </div>

          <Link href={"/"} className="text-4xl  font-extrabold font-Tektur ">
            StarLink.
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul className="p-2">
                  {products?.map((category) => (
                    <li key={Math.random()}>
                      <Link href={`/category/${category.category}`}>
                        {category.category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>

            {!seassion && (
              <li>
                <Link href={"/auth/login"}>Login</Link>
              </li>
            )}
            {!seassion && (
              <li className="ml-5">
                <Link href={"/auth/registration"}>Registration</Link>
              </li>
            )}
          </ul>
        </div>

        <div className="navbar-end">
          <Link
            href={"/pcbuilder"}
            className="px-8 py-3 bg-blue-500 text-white rounded-md shadow-md "
          >
            PC Builder
          </Link>
        </div>

        {seassion && (
          <div className="dropdown dropdown-bottom dropdown-end ml-5">
            <label tabIndex={0} className="btn">
              Profile
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>{seassion && <h1>{seassion?.user.name}</h1>}</a>
              </li>
              <li>
                <a>
                  {" "}
                  {seassion && (
                    <button onClick={() => signOut()} type="primary" danger>
                      Logout
                    </button>
                  )}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
