"use client";
import React, { useMemo, useState } from "react";
import { IProduct, ProductCard } from "../product/ProductCard";
import { Grid, Pagination } from "@mui/material";
import "./productList.scss";

export const ProductList = ({ products }: { products: IProduct[] }) => {
  const [currPage, setCurrPage] = useState<number>(1);
  const renderProducts = useMemo(() => {
    return products.slice((currPage - 1) * 8, currPage * 8);
  }, [currPage, products]);
  return (
    <>
      <Grid container spacing="1rem">
        {renderProducts.map((data) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={data.id}>
            <ProductCard data={data} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(products.length / 8)}
        page={currPage}
        color="primary"
        onChange={(_, page) => {
          setCurrPage(page);
        }}
        shape="rounded"
        className="pagination"
      />
    </>
  );
};
