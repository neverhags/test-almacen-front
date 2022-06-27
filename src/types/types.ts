export type PropertyType ={
    categoryPropertyId?: string,
    key:string,
    value:Array<string>
}

export type ProductType = {
    _id?:string,
    name: string,
    description: string,
    properties:Array<PropertyType>
    sku?: string,
    brand: string,
    price: any,
    margin?: Array<any>,
    __v?:number
  }

  export type CategoryType = {
    _id:string,
    name: string,
    description: string,
    margin: number,
    properties:Array<PropertyType>,
    __v:number
  }