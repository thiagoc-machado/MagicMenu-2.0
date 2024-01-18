import{useState} from "react"
import { getProductsApi } from "../api/product"

export function useProduct(){
    const [loading, setLoading] = useState(true)
    const [error, SetError] = useState(false)
    const [products, SetProducts] = useState(null)

    const getProducts = async () => {
        try{
            setLoading(true)
            const response = await getProductsApi()
            setLoading(false)
            SetProducts(response)
        }catch(error){
            throw(error)
        }
    }

    return{
        loading,
        error,
        products,
        getProducts,
    }
}