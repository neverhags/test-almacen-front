import React from 'react'
import {useNavigate} from 'react-router-dom'

interface ProductProps {
  product?: any;
}

export const Product = (props:ProductProps) => {

  const navigate=useNavigate()

  const {_id,
    name,
    description,
    properties,
    sku,
    brand,
    price,
    margin,
    __v}=props.product

    const handleClick = ()=>{
      navigate(`/edit/${_id}`)
    }

  return (
    <div className='mt-4 boxShado w-[80%] min-h-[80%] boxShadow bg-gray-100'>
      <div className='boxShadow flex flex-col items-center justify-center bg-gray-200'>
        <div>
        <h1 className='text-3xl text-black'>{name}</h1>
        </div>
        <span className='text-xl text-black' >{brand}</span>
      </div>
      <div className='flex flex-col justify-center items-center mt-2'>
        <span className='text-md text-black'>{description}</span>
        <section className='mt-4 w-full'>
        <h3 className='text-center text-xl text-black'>Properties</h3>
        <div className='flex justify-evenly items-center w-full flex-wrap m-2'>
          {properties.map((e:any)=><div className='w-[50%] text-center' key={e._id}><span><b>{e.key}: </b>{e.value}</span></div>)}
        </div>
        </section>
        <section>
          <span className='text-xl'>Price: ${price}{margin}</span>
          <button onClick={handleClick} className='p-4 rounded text-white bg-blue-500'>Edit</button>
        </section>
      </div>
    </div>
  )
}
