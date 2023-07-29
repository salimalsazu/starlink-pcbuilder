import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: seassion } = useSession();

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
                  <li>
                    <a>CPU / Processor</a>
                  </li>
                  <li>
                    <a>Motherboard</a>
                  </li>
                  <li>
                    <a>RAM</a>
                  </li>
                  <li>
                    <a>Power Supply Unit</a>
                  </li>
                  <li>
                    <a>Storage Device</a>
                  </li>
                  <li>
                    <a>Monitor</a>
                  </li>
                  <li>
                    <a>Others</a>
                  </li>
                </ul>
              </li>
              <Link href={"/auth/login"}>Login</Link>
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
                  <li>
                    <a>CPU / Processor</a>
                  </li>
                  <li>
                    <a>Motherboard</a>
                  </li>
                  <li>
                    <a>RAM</a>
                  </li>
                  <li>
                    <a>Power Supply Unit</a>
                  </li>
                  <li>
                    <a>Storage Device</a>
                  </li>
                  <li>
                    <a>Monitor</a>
                  </li>
                  <li>
                    <a>Others</a>
                  </li>
                </ul>
              </details>
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
        <div>{seassion && <h1>{seassion?.user.name}</h1>}</div>

        <div>
          {seassion && (
            <button onClick={() => signOut()} type="primary" danger>
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
