import React from "react";
import { Route, Routes } from "react-router-dom";
import { CategoryCreatePage } from "../Pages/CategoryCreatePage";
import { ProductCreatePage } from "../Pages/ProductCreatePage";
import { ProductListPage } from "../Pages/ProductListPage";
import {ProductPage} from "../Pages/ProductPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<ProductPage />} path="/product/:id" />
      <Route element={<CategoryCreatePage />} path="/category/create" />
      <Route element={<CategoryCreatePage />} path="/category/create/:id" />
      <Route element={<ProductCreatePage />} path="/create" />
      <Route element={<ProductCreatePage />} path="/edit/:id" />
      <Route element={<ProductListPage />} path="/" />
    </Routes>
  );
};
