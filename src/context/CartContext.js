import {createContext, useState} from "react";

const CartContext = createContext();

const CartProvider =  ({children}) => {

    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (product , quantity) => {
        console.log ("id:", product.id);
        console.log ("cantidad:", quantity);

        let objeto = {qty: quantity , prod: product }
        let exist = cartProducts.find(cartProduct => cartProduct.prod.id === product.id)
        !exist && setCartProducts(cartProducts => [...cartProducts, objeto])
    }

    const totalPrice = () => {
        let total = 0

        console.log ("length:", cartProducts.length)

        cartProducts.map( (cartProduct) => {

            console.log ("id:", cartProduct.prod.id);
            console.log ("precio:", cartProduct.prod.price);
            console.log ("cantidad:", cartProduct.qty);

            total = total + ((cartProduct.prod.price) *  cartProduct.qty)
         })

        return total
    }

    const deleteProduct = (product) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.prod.id !== product.id))
    }

    const resetProducts = () => {
        setCartProducts([])
    }

    const data = {
        cartProducts,
        addProductToCart,
        totalPrice,
        deleteProduct, 
        resetProducts
    }

return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>        
)

}

export { CartProvider }
export default CartContext
