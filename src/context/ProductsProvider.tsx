import { Children, ReactElement, createContext, useState,useEffect } from "react"

export type ProductType={
    sku:string,
    name:string,
    price:number

}  
// const initState:ProductType[]=[]
 const initState:ProductType[]=[


        
            {
                "sku": "item0001",
                "name": "Widget",
                "price": 9.99
            },
            {
                "sku": "item0002",
                "name": "Premium Widget",
                "price": 19.99
            },
            {
                "sku": "item0003",
                "name": "Deluxe Widget",
                "price": 29.99
            }
        
    
]
// // initial state of the aoo
export type UseProductsContextType ={
    products: ProductType[]
}
// the context available
// context type for managing products
// const initContextState:UseProductsContextType=
// {
//     products:[]
// }
const initContextState:UseProductsContextType={
   products:[] 
}   
const ProductsContext=createContext<UseProductsContextType>(initContextState)
type ChildrenType={
    children?:ReactElement | ReactElement[]
}
export const ProductsProvider=({children}:ChildrenType):ReactElement =>{
const [products,setProducts]=useState<ProductType[]>(initState)
// useEffect(()=>{
//     const fetchProducts= async ():Promise<ProductType[]>=>{
//         const data=await fetch('http://localbost:3500/products').then(res =>{
//             return res.json()
//         }).catch(err => {
//             if (err instanceof Error) console.log(err.message)
//         })
//         return data 
//     }
//     fetchProducts().then(products=>setProducts(products))
// },[])
return (
    <ProductsContext.Provider value={{products}}>
    {children}
    </ProductsContext.Provider>
)
}

export default ProductsContext;
// By setting the initial state with an empty array, it allows the application to start with no products in the context. Later on, the ProductsProvider component, which wraps the application, can fetch actual product data from an external source (like an API) and update the context state with the fetched data.
// react element are child components that can be wrapped by productsContext Provider
