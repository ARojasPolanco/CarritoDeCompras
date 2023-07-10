function modal(){
    const openModal = document.querySelector('.info__btn')
    const modal = document.querySelector('.modal')
    const closeModal = document.querySelector('.modal__close')

    openModal.addEventListener('click', (e) =>{
        e.preventDefault();
        modal.classList.add('modal--show')
    })

    closeModal.addEventListener('click', (e) =>{
        e.preventDefault();
        modal.classList.remove('modal--show')
    })


}

export default modal