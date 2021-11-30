const btnCart = document.getElementById('cart')
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.btn-close')

const modalOpen = () => {
   modal.classList.toggle('modal-close')
  
}

btnCart.addEventListener('click', modalOpen);
btnClose.addEventListener('click', modalOpen); 

modal.addEventListener ('click', (event) => {
    if (event.target == modal) {
        modalOpen()
    }
})