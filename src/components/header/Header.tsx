import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const navigation = useNavigate()

    const handleClick=()=>{
        navigation('/')
    }

    const handleCreate=()=>{
        navigation('/create')
    }
  return (
    <header className="flex items-center justify-between bg-blue-500 p-6 boxShadow">
  <div onClick={handleClick} className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="font-semibold text-xl tracking-tight">Warehouse</span>
  </div>
  <div className="flex items-center justify-center">
    <span onClick={handleCreate} className='border-2 border-white text-white p-2 rounded cursor-pointer'>Create</span>
  </div>
</header>
  )
}
