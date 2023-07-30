import RootLayout from "@/components/layout/RootLayout";
import PcBuilderCategory from "@/components/ui/pcbuildercategory";
import React from "react";

const PcBuilderPage = ({ categories }) => {
  console.log("pc builder", categories);

  let allCategory;

  if (categories.length === 0) {
    allCategory = <p>Loading....</p>;
  }

  if (categories.length > 0) {
    allCategory = categories.map((category) => (
      <PcBuilderCategory category={category} key={category._id} />
    ));
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-2 lg:gap-[20px] w-full lg:w-[1170px] lg:mx-auto lg:p-20 p-5">
        {allCategory}
      </div>
      <div>
        <button className="bg-sky-500 flex  text-white font-Poppins font-bold px-8 py-2 rounded-lg lg:-mt-[40px]">
          Complete Build{" "}
        </button>
      </div>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:7000/categories");
  const data = await res.json();

  return {
    props: {
      categories: data.data,
    },
  };
};
