import React, { ChangeEventHandler } from 'react'
import { CategoryType } from '../../types/types'

interface SelectProps {
    name:string,
    label:string,
    value:string,
    handleChange: ChangeEventHandler,
    options:Array<CategoryType>
  }

export const ProductSelect = ({name,label,value,handleChange,options}:SelectProps) => {
  return (
    <div className="relative z-0 w-full mb-6 group">
    <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-500">{label}</label>
<select id={name} name={name} value={value} required onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    <option value='' hidden>Categories</option>
  {options.map((option:CategoryType)=><option key={option._id} value={option._id}>{option.name}</option>)}
</select>
    </div>
  )
}
