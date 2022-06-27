import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { Product } from '../components/product/Product';
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

export const ProductPage = () => {
  const [product, setProduct] = useState<ProductType>(initialState)
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/edit/${id}`);
  };

  const handleNoProduct = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchProduct = async() =>{
      const productData = await getProduct(id)
      if(productData._id){
        setProduct(productData)
        setLoading(false)
      }else{
        navigate('/')
      }
    }

    fetchProduct()
  
    
  }, [])
  
  return (
    <div className='flex justify-center items-start min-w-[100%] h-[100vh] min-h-[100vh]'>
      {loading?
      <Spinner/>
      :<Product product={product}/>
      }
    </div>
  )
}
