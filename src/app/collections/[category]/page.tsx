"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const { category } = useParams();

  useEffect(() => {
    //fetch data
  }, []);
  return <div>{category}</div>;
};

export default Page;
