//Вызов функции
const btnCart = document.getElementById('cart')
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.btn-close')
const rows = modal.querySelectorAll('.row')
const total = modal.querySelector('.modal-sum')

const mainIndex = document.getElementById('index')                          //Вызываем mainIndex в документе 1
const mainRest = document.getElementById('restaurant')                      //Вызываем mainRest в документе 2
const cardsIndexBlock = mainIndex.querySelector('.cards')                   //Вызыывем блок с картами в mainIndex 3
const cardsIndex = cardsIndexBlock.querySelectorAll('.card')                //Вызываем сами карты (ALL) 4
const logos = document.querySelectorAll('.logo-link')                       //Вызываем логотип, чтоб задать переключательную функцию 
const cardsRestBlock = mainRest.querySelector('.cards')
const cardsRest = cardsRestBlock.querySelectorAll('.card')



//объявление функции
const getProductModal = (nameProduct, priceProduct, index = 0) => {
    // rows[index]
        let nameProductBlock = rows[index].querySelector('.product-name')
        let priceProductBlock = rows[index].querySelector('.price')
            nameProductBlock.textContent = nameProduct
            priceProductBlock.textContent = priceProduct

}
const modalOpen = () => {
   modal.classList.toggle('modal-close')
} 
                                            
const getFullPrice = () => { //(Функция по получению полной стоимости)
    let fullPrice = 0;
   rows.forEach(row => {
   
    let priceBlock = row.querySelector('.price')
    let price = +priceBlock.textContent
    fullPrice += price;
   })
   total.textContent = fullPrice;
}




const getToMain = () => {                                                    //Вызываем функцию 7
    mainRest.classList.toggle('not-active')                                     //Удаляем из mainRest not-active, чтоб он стал активным 8
    mainIndex.classList.toggle('not-active')                                      //Добавляем в mainIndex not-active, чтоб скрыть его 9
}

//Вызов функции


btnCart.addEventListener('click', modalOpen);
btnClose.addEventListener('click', modalOpen); 



modal.addEventListener ('click', (event) => {
    if (event.target == modal) {
        modalOpen()
    }
})

rows.forEach(row => {

    let newPrice =0
    let priceBlock = row.querySelector('.price')
    let price = +priceBlock.textContent
    let countBlock = row.querySelector('.count')
    let count = countBlock.textContent
    const btnMinus = row.querySelector('.minus')
    const btnPlus = row.querySelector('.plus')

    const getNewPrice = (count) => {
        newPrice = count * price
        priceBlock.textContent= newPrice
        getFullPrice()
    }

   

    btnMinus.addEventListener ('click', () => {
        if (count > 0) {
            count--
            countBlock.textContent= count
            getNewPrice(count, price)
            
        }
    })

    btnPlus.addEventListener ('click', () => {
        count++
        countBlock.textContent= count
        getNewPrice(count, price)
    })

})
cardsRest.forEach((card, index) => {
    let nameProductBlock = card.querySelector('.card-title')
    let priceProductBlock = card.querySelector('.product-price')
    let nameProduct = nameProductBlock.textContent
    let priceProduct = +priceProductBlock.textContent.slice(0, 3)
   
    getProductModal(nameProduct, priceProduct, index)
})
cardsIndex.forEach(card => {                                            //Перебираем карты циклом forEach 5
        card.addEventListener ('click', () => {
            getToMain()                                                          //Функция getToMain перехода на заглавную страницу 6
            
        })
    })
logos.forEach(logo => {
    logo.addEventListener ('click', (event) => {                    //Задаем событие для логотипа
            event.preventDefault()                                      //Скидываем фукцию до стандартных настроек
            getToMain()                                                 //Функция перехода на заглавную страницу
            if(mainIndex.classList.contains('not-active'))              //Функция отрабатывает, если mainIndex not-active
            getToMain()                                                  //Функция перехода на заглавную страницу
    
        } )
    })

getFullPrice()








