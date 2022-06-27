import React,{useState, useEffect} from 'react'
import { ProductType } from '../types/types'
import { ProductCarousel } from '../components/productList/ProductCarousel'
import { ProductCard } from '../components/productList/ProductCard'
import { getProductList } from '../helpers/productHelpers'
import { Spinner } from '../components/Spinner'

export const ProductListPage = () => {
    const [products, setProducts] = useState<Array<ProductType>>([])
    useEffect(() => {
      const fetchData = async ()=>{
          const productsList = await getProductList()
          if(productsList[0]!==undefined){
            setProducts(productsList)
          }
        }
        fetchData()
    
      return () => {
        setProducts([])
      }
    }, [])
    
  return (
    <section className='min-h-[100vh] flex justify-center-center items-center'>
          {products.length===0&&<div className='flex justify-center items-center w-full'><Spinner/></div>}
        {products.length>0&&<ProductCarousel>
            {products.map((product:ProductType)=><ProductCard key={product._id} product={product}/>)}
        </ProductCarousel>}
    </section>
  )
}
