function modal(){
    const productsDOM = document.querySelector('.products__container')
    const modal = document.querySelector('.modal')
    const closeModal = document.querySelector('.modal__close')

    
    productsDOM.addEventListener('click', function (event) {
        if (event.target.closest('.info__btn')) {
            modal.classList.add('modal--show')
        }
    })

    closeModal.addEventListener('click', function () {
        modal.classList.remove('modal--show')
    })
}

export default modal