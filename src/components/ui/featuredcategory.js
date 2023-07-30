import Image from "next/image";
import React from "react";
import pc from "../../Assets/category/Laptop.png";
import other from "../../Assets/category/camera.png";
import monitor from "../../Assets/category/Monitor.png";
import motherborad from "../../Assets/category/GPU.png";
import powersupply from "../../Assets/category/software.png";
import ram from "../../Assets/category/all-in-one.png";
import Link from "next/link";

const FeaturedCategory = ({ category }) => {
  return (
    <Link href={`/category/${category?.category}`}>
      <div className="flex flex-col justify-center items-center bg-gray-50 shadow-lg p-10 rounded-lg hover:bg-blue-200">
        <Image width={100} height={100} src={category?.Image} alt="" />
        <h1>{category?.category}</h1>
      </div>
    </Link>
  );
};

export default FeaturedCategory;
