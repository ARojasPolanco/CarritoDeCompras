import showMenu from "./showMenu.js"
import showCart from "./showCart.js"
import products from "./products.js"
import getProducts from "./helpers/getProducts.js"
import cart from "./Cart.js"
import darkMode from "./darkMode.js"
import modal from "./modal.js"
import loader from "./loader.js"

// Mostrar menu

document.addEventListener('DOMContentLoaded', async function () {
    showMenu()
    
    // Mostrar cart
    
    showCart()
    
    // Products
    
    const {db, printProducts } = products(await getProducts())
    
    // Cart
    
    cart(db, printProducts)
    
    // darkmode
    
    darkMode()
    
    // modal
    
    modal()

})

// loader
window.addEventListener('load', function () {
    loader()
})

