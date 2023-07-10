function showCart () {
    const btnCart = document.querySelector('.btn--cart')
    const cart = document.querySelector('.cart')


    btnCart.addEventListener('click', function(){
        cart.classList.toggle('show__cart')
    })
    cart.addEventListener('click', function(element){
        if(element.target.closest('.btn--close')){
            cart.classList.remove('show__cart')
        }
    })
}

export default showCart