import { JsonObjectExpression } from "typescript"
import { PRODUCT, PRODUCT_ID } from "../endpoints/endpoints"
import { ProductType } from "../types/types"

const headers:HeadersInit = {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": '*',
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  }

export const getProductList = async():Promise<Array<ProductType>>=>{
    try{
        const response:Response = await fetch(PRODUCT)
        const json:Array<ProductType> = await response.json()
        return json
    }catch(error: any){
        return error
    }
}

export const getProduct = async(id:any):Promise<ProductType>=>{
    try{
        const response:Response = await fetch(PRODUCT_ID(id,{
            headers:headers,
            mode:'no-cors'
        }))
        const json:ProductType = await response.json()
        return json
    }catch(error: any){
        return error
    }
}

export const postProduct = async(product:ProductType):Promise<number>=>{
 
    try{
        const response:Response = await fetch(PRODUCT,{
            method: "POST",
            headers:headers,
            body:JSON.stringify(product)
          })
          const json:any = await response.json()
          console.log(json)
          console.log(response.status)
          return response.status

    }catch(error:any){
        return error
    }
}

export const patchProduct = async(product:ProductType):Promise<Array<any>>=>{
    const headers:HeadersInit = {
        "Content-type": "application/json",
      }
 
    try{
        const response:Response = await fetch(PRODUCT_ID(product._id),{
            method: "PATCH",
            headers:headers,
            body:JSON.stringify(product)
          })
          const json:Array<any> = await response.json()
          return json

    }catch(error:any){
        return error
    }
}

export const deleteProduct = async(id:string):Promise<ProductType>=>{
    try{
        const response:Response = await fetch(PRODUCT_ID(id),{
            method: "DELETE",
            headers:headers,
          })
        const json:ProductType = await response.json()
        return json
    }catch(error: any){
        return error
    }
}