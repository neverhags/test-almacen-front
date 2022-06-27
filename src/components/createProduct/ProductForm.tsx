import React, {ChangeEvent, useState, useEffect, EventHandler, FormEvent} from 'react'
import { getCategoryList, getCategory } from '../../helpers/categoryHelpers';
import { postProduct } from '../../helpers/productHelpers';
import { CategoryType, PropertyType } from '../../types/types';
import { Spinner } from '../Spinner';
import { ProductCategoryInput } from './ProductCategoryInput';
import { ProductCategorySelect } from './ProductCategorySelect';
import { ProductInput } from './ProductInput'
import { ProductSelect } from './ProductSelect';

interface formValuesInterface {
  name:string,
  brand:string,
  description:string,
  price: string,
  category:CategoryType|any,
  properties:Array<any>
}
const initialState:formValuesInterface = { name: "", brand: "", description:'', price: "", category:'',properties:[] };
const initialCategory:CategoryType = {
  _id:'',
  name: '',
  description: '',
  margin: 0,
  properties:[],
  __v:0
}
export const ProductForm = () => {
  const [formValues, setFormValues] = useState<formValuesInterface>(initialState)
  const [categories, setCategories] = useState<Array<CategoryType>>([])
  const [category, setCategory] = useState<CategoryType>(initialCategory)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  
    const fetchCategories = async()=>{
      const categoriesList = await getCategoryList()
      if(categoriesList[0]!==undefined){
        setCategories(categoriesList)
      }
      setLoading(false)
    }

    fetchCategories()
    
  }, [])

  useEffect(() => {
    const fetchCategory = async()=>{
      const categoryData = await getCategory(formValues.category)
        setCategory(categoryData)
      }
     fetchCategory()
    setFormValues({...formValues,properties:[]})
  
  }, [formValues.category])
  
  
const formSubmit = async(event:any) => {
  event.preventDefault()
  const productData={
      name: formValues.name,
      description: formValues.description,
      properties:formValues.properties,
      sku: Math.random().toString(36).substring(0,7),
      brand: formValues.brand,
      price: Number.parseInt(formValues.price)
    }
  await postProduct(productData)
}
  

  const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
    setFormValues({...formValues,[event.target.name]:event.target.value,})
  }

  const handleSetProperties=(event: ChangeEvent<HTMLInputElement>)=>{
    const property = {
      _id:event.target.id,
      key:event.target.name,
      value:event.target.value
    }
    if(formValues.properties.length===0){
      const propertiesArray:Array<any>=[property]
      setFormValues({...formValues,properties:propertiesArray})
    }else{
      if(!formValues.properties.some((e)=>e.key===property.key)){
        const propertiesArray:Array<any>=[...formValues.properties,property]
        setFormValues({...formValues,properties:propertiesArray})
      }else{
        if(property.value===''){
          const newPropertiesArray:Array<any> =[...formValues.properties].filter(e=>e.key!==property.key)
        setFormValues({...formValues,properties:newPropertiesArray})
        }else{
          const newPropertiesArray:Array<any> =[...formValues.properties].map(e=>{
            if(e.key===property.key){
              return property
            }else{
              return e
            }
          })
          setFormValues({...formValues,properties:newPropertiesArray})
        }
      }
    }
  }

  const onSubmit=()=>{

  }

  return (
  <div className='boxShadow'>
    <div className='boxShadow'>
      <div className='bg-blue-700 p-5'>
      <h4 className='text-2xl text-white'>Create Product</h4>
    </div>
  <form className='flex flex-row justify-center items-center min-w-[70%] flex-wrap p-4' onSubmit={formSubmit}>
    <ProductInput type='text' name={'name'} label='Name' value={formValues.name} handleChange={handleChange} />
    <ProductInput type='text' name={'brand'} label='Brand' value={formValues.brand} handleChange={handleChange}/>
    <ProductInput type='number' name={'price'} label='Price' value={formValues.price} handleChange={handleChange}/>
    <ProductInput type='text' name={'description'} label='Description' value={formValues.description} handleChange={handleChange}/>
    {loading===true&&<div className='w-full flex justify-center'>
      <Spinner/>
      </div>
      }
    {categories.length>0&&<ProductSelect name={'category'} label='Category' value={formValues.category} handleChange={handleChange} options={categories}/>}
    {(formValues.category!==''&&category.properties)&&category.properties.map((e:any)=>{
      if(e.value.length>0){
        return <ProductCategorySelect key={e.key} _id={e._id} itemKey={e.key} options={e.value} label={e.key} handleChange={handleSetProperties}/>
      }else{
        return <ProductCategoryInput key={e.key} name={e.key} label={e.key} handleChange={handleSetProperties}/>
      }
    })}
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
  </form>
  </div>
    </div>
  )
}
