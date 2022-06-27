import React, { ChangeEventHandler } from 'react'

interface SelectProps {
  _id:string
    itemKey:string,
    options:Array<any>,
    handleChange: ChangeEventHandler,
    label:string
  }

export const ProductCategorySelect = ({_id,itemKey,options,handleChange,label}:SelectProps) => {
  return (
    <div className="relative z-0 w-full mb-6 group">
    <label htmlFor={itemKey} className="block mb-2 text-sm font-medium text-gray-500">{label}</label>
<select id={_id} name={itemKey} required onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    <option value='' hidden>Options</option>
  {options.map((option,index)=><option key={index} value={option._id}>{option}</option>)}
</select>
    </div>
  )
}
