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
    <div className="flex flex-col items-center gap-[20px] w-[1170px] mx-auto p-20">
      {allCategory}
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
