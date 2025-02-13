import Products from "@/components/products";
const { productList } = require("@/Data")

const Page = () =>{
    return(
        <div className="grid grid-cols-4 gap-4"> 
            {
                productList.products.map((element) =>(
                    <Products key = {element.id} image={element.thumbnail} title = {element.title} price = {element.price} /> 
                ))
            }
        </div>
    )
}
export default Page;