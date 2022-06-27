import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { ProductForm } from '../components/createProduct/ProductForm';
import { Spinner } from '../components/Spinner';
import { getProduct } from '../helpers/productHelpers';
import { ProductType } from '../types/types';

const initialState = {
  _id:'',
  name: '',
  description: '',
  properties:[],
  sku: '',
  brand: '',
  price: 0,
  margin:[],
  __v:0
}

export const ProductCreatePage = () => {
  const [product, setProduct] = useState<ProductType>(initialState)
  const [loading, setLoading] = useState(true)
  const { id } = useParams();

  useEffect(() => {
    const getProductData = async() =>{
      const productData = await getProduct(id)
      if(productData._id){
        setProduct(productData)
      }
      setLoading(false)
    }

    getProductData()
  
  }, [])
  

  return (
    <div className='flex justify-center items-center min-h-[100vh]'>
      {loading&&<Spinner/>}
      {
        <ProductForm product={product}/>
      }
    </div>
  )
}
