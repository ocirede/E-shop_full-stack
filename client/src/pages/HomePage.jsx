import ProductCard from "../components/ProductCard"
import SettingSideBar from "../components/SettingSideBar"
import {products} from "../data/ProductData.js"

const HomePage = () => {
    return(
        <div className=" w-full h-screen bg-slate-100"> 
       <SettingSideBar/>
       {products.map((product) => {
        <ProductCard  key={product._id} product={product}/>
       })}
      </div>
    )


}

export default HomePage