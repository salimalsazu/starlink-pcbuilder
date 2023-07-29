import RootLayout from "@/components/layout/RootLayout";
import FeaturedCategory from "@/components/ui/featuredcategory";
import Marque from "@/components/ui/marquee";
import ProductCard from "@/components/ui/productcard";
import React from "react";

const HomePage = ({ products, categories }) => {
  // Featured Product

  let allRandomProduct = [];

  if (products.length === 0) {
    allRandomProduct = <p>Loading....</p>;
  }

  if (products.length > 0) {
    allRandomProduct = products.map((product) => (
      <ProductCard product={product} key={product._id} />
    ));
  }

  // Featured Category

  let allCategory;

  if (categories.length === 0) {
    allCategory = <p>Loading....</p>;
  }

  if (categories.length > 0) {
    allCategory = categories.map((category) => (
      <FeaturedCategory category={category} key={category._id} />
    ));
  }

  return (
    <div className="">
      {/* Marquee Slider Notice */}
      <div>
        <Marque />
      </div>

      {/* Featured Products */}
      <div>
        <div className="flex flex-col justify-center items-center gap-[5px] my-[50px]">
          <h1 className="text-6xl font-Poppins font-bold">Featured Products</h1>
          <p className="text=md">Check & Get Your Desired Product!</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center w-[1170px] mx-auto my-[100px] gap-[25px]">
          {allRandomProduct}
        </div>
      </div>

      <hr className="border border-gray-200" />

      {/* Featured Category */}
      <div className="flex flex-col justify-center items-center gap-[5px] my-[50px]">
        <h1 className="text-6xl font-Poppins font-bold">Featured Category</h1>
        <p className="text=md">
          Get Your Desired Product from Featured Categor
        </p>
        <div className="flex flex-col items-center lg:flex-row gap-[30px] my-[40px]">
          {allCategory}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:7000/random-product");
  const response = await fetch("http://localhost:7000/categories");

  const data = await res.json();
  const category = await response.json();

  return {
    props: {
      products: data.data,
      categories: category.data,
    },
    // revalidate: 5,
  };
};
