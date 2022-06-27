import React, {  } from 'react'
import { Header } from '../components/header/Header'

export const MainLayout = (props:React.PropsWithChildren) => {
  return (
    <>
    <Header/>
    <div className="min-h-[100vh]">
    {props.children}    
    </div>
    </>
  )
}
