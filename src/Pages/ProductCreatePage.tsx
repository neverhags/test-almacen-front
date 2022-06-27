import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { ProductForm } from '../components/createProduct/ProductForm';

export const ProductCreatePage = () => {
  const { sku } = useParams();
  return (
    <div className='flex justify-center items-center min-h-[100vh]'>
        <ProductForm/>
    </div>
  )
}
