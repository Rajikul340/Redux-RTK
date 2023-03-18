import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../feature/api/apiSlice";


const Home = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  console.log(data);
  const products = data;

  if (isLoading) {
    return <p>Loading.....</p>;
  }
  if(error){
    return <p>something went wrong</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {products?.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default Home;
