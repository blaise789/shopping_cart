import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import Product   from "./components/Product"
import ProductLIst from "./components/ProductLIst"
import { useState } from "react"
function App(){
    const [viewCart,setViewCart]=useState<boolean>(false)
   const pageContent=viewCart? <Cart/>:<ProductLIst/>
   const content=(
    <>
    <Header  viewCart={viewCart} setViewCart={setViewCart}/>
    {pageContent}
    <Footer  viewCart={viewCart} />
    </>
   )
   return content
       


}
export default App