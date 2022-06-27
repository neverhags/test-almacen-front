import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCamera} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

interface IProductCardProps {
    product?: any;
  }

export const ProductCard = (props: IProductCardProps) => {
    const { _id, name, brand, price, sku }= props.product;
    const navigation = useNavigate()

    const handleClick=()=>{
      navigation(`/product/${_id}`)
    }

  return (

<div className="rounded-lg boxShadow mx-2 cursor-pointer" onClick={handleClick}>

<div className="min-w-[300px] boxShadow">
<div className="p-2 rounded-t-lg bg-[#a6a6a6] flex items-center justify-center min-h-[200px]">
<FontAwesomeIcon className='text-white' icon={faCamera} style={{height:'20px'}} />
</div>
    <div className="px-5 py-5 h-[124px] bg-white flex justify-between align-center">
        <div>
        <h5 className="text-xl tracking-tight font-medium text-black ">{name}</h5>
        <span className="text-sm tracking-tight font-medium text-black">{brand}</span>
        </div>
        <div className="flex justify-between items-end">
            <span className="text-2xl md:text-2xl font-light text-black">${price}</span>
        </div>
    </div>
</div>
</div>

  )
}
