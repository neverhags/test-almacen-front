import { JsonObjectExpression } from "typescript"
import { CATEGORY, CATEGORY_ID, PRODUCT, PRODUCT_ID } from "../endpoints/endpoints"
import { CategoryType, ProductType } from "../types/types"

const headers:HeadersInit = {
    "Content-type": "application/json",
  }

export const getCategoryList = async():Promise<Array<CategoryType>>=>{
    try{
        const response:Response = await fetch(CATEGORY)
        const json:Array<CategoryType> = await response.json()
        return json
    }catch(error: any){
        return error
    }
}

export const getCategory = async(id:string):Promise<CategoryType>=>{
    try{
        const response:Response = await fetch(CATEGORY_ID(id))
        const json:CategoryType = await response.json()
        return json
    }catch(error: any){
        return error
    }
}

export const postCategory = async(category:CategoryType):Promise<Array<any>>=>{
 
    try{
        const response:Response = await fetch(CATEGORY,{
            method: "POST",
            headers:headers,
            body:JSON.stringify(category)
          })
          const json:Array<any> = await response.json()
          return json

    }catch(error:any){
        return error
    }
}

export const patchCategory = async(category:CategoryType):Promise<Array<any>>=>{
    const headers:HeadersInit = {
        "Content-type": "application/json",
      }
 
    try{
        const response:Response = await fetch(CATEGORY_ID(category._id),{
            method: "PATCH",
            headers:headers,
            body:JSON.stringify(category)
          })
          const json:Array<any> = await response.json()
          return json

    }catch(error:any){
        return error
    }
}

export const deleteCategory = async(id:string):Promise<CategoryType>=>{
    try{
        const response:Response = await fetch(CATEGORY_ID(id),{
            method: "DELETE",
            headers:headers,
          })
        const json:CategoryType = await response.json()
        return json
    }catch(error: any){
        return error
    }
}