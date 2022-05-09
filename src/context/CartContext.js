import {createContext, useState} from "react";

//Componente creado para guardar lo cargado en el carrito de compras y asi poder ser
//accedido por todos sus componentes hijos
const CartContext = createContext();

const CartProvider =  ({children}) => {

    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("productos")) || [] )
   
    //Agrega un producto al carrito con sus cantidad pedida
    const addProductToCart = (product , quantity) => {
   
        let objeto = {qty: quantity , prod: product }

        let exist = cartProducts.find(cartProduct => cartProduct.prod.id === product.id)
        if (!exist) {
         setCartProducts(cartProducts => [...cartProducts, objeto])
      
        localStorage.setItem("productos", JSON.stringify([...cartProducts, objeto]))
        }
    }

    // Devuelve el precio total del carrito
    const totalPrice = () => {
        let total = 0

        cartProducts.map( (cartProduct) => {
            total = total + ((cartProduct.prod.price) *  cartProduct.qty)
         })

        return total
    }

    //Devuelve cantidad total de productos agregados al carrito
    const quantityProducts = () => {
        let cant = 0

        cartProducts.map( (cartProduct) => {

            cant = cant + cartProduct.qty
         })

        return cant
    }

    // Borra un producto del carrito (accediendo por id)
    const deleteProduct = (id) => {
        const updatedCartProducts = cartProducts.filter((cartProduct) => { return cartProduct.prod.id !== id })
        setCartProducts(updatedCartProducts)
        localStorage.setItem("productos", JSON.stringify(updatedCartProducts))        
    }

    // vacia el carrito    
    const resetProducts = () => {
        setCartProducts([])
        localStorage.removeItem("productos")
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
