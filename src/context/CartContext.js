import {createContext, useState} from "react";

const CartContext = createContext();

const CartProvider =  ({children}) => {

    const [cartProducts, setCartProducts] = useState([])
    // const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product , quantity) => {
   
        let objeto = {qty: quantity , prod: product }

        let exist = cartProducts.find(cartProduct => cartProduct.prod.id === product.id)
        if (!exist) {
         setCartProducts(cartProducts => [...cartProducts, objeto])
        //  setTotalPrice (totalPrice + (product.quantity * product.price))
        }
    }

    const totalPrice = () => {
        let total = 0

        cartProducts.map( (cartProduct) => {
            total = total + ((cartProduct.prod.price) *  cartProduct.qty)
         })

        return total
    }

    const quantityProducts = () => {
        let cant = 0

        cartProducts.map( (cartProduct) => {

            cant = cant + cartProduct.qty
         })

        return cant
    }

    const deleteProduct = (id) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.prod.id !== id))
    }

    const resetProducts = () => {
        setCartProducts([])
    }

    const data = {
        cartProducts,
        addProductToCart,
        totalPrice,
        deleteProduct, 
        resetProducts,
        quantityProducts
    }

return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>        
)

}

export { CartProvider }
export default CartContext
