import RootLayout from "@/components/layout/RootLayout";
import PcBuilderProduct from "@/components/ui/pcbuilderproduct";
import React from "react";

const Category = ({ products }) => {
  let allRandomProduct = [];

  if (products.length === 0) {
    allRandomProduct = <p>Loading....</p>;
  }

  if (products.length > 0) {
    allRandomProduct = products.map((product) => (
      <PcBuilderProduct product={product} key={product._id} />
    ));
  }

  return (
    <div className="grid grid-cols-1  justify-center items-center w-[1170px] mx-auto my-[100px] gap-[25px]">
      {allRandomProduct}
    </div>
  );
};

export default Category;

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const category = params.category;

  const res = await fetch(`http://localhost:7000/category?search=${category}`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};
