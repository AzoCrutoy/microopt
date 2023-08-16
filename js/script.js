
const headerBtn = document.querySelector('.header__btn')
const headerMenu = document.querySelector('.header__menu')

function close() {
    headerBtn.classList.toggle('header__btn--active')
    headerMenu.classList.toggle('header__menu--active')
}

headerBtn.addEventListener('click', close)

const center = [55.61218888063432,37.60694630160524]

function init() {
    let map = new ymaps.Map('footer__map', {
        center: center,
        zoom:17
    })
    let placemark = new ymaps.Placemark(center, {}, {

    })
    map.geoObjects.add(placemark)
}

ymaps.ready(init)


const popUp = document.querySelector('.pop-up')
const popUpImg = document.querySelector('.pop-up img')

document.querySelectorAll('.product__photos-img').forEach(img => {
    img.onclick = () => {
        popUp.style.display = 'flex'
        popUpImg.src = img.getAttribute('src')
    }
    
})

document.querySelectorAll('.price__img').forEach(img => {
    img.onclick = () => {
        popUp.style.display = 'flex'
        popUpImg.src = img.getAttribute('src')
    }
})

document.querySelectorAll('.descr__img').forEach(img => {
    img.onclick = () => {
        popUp.style.display = 'flex'
        popUpImg.src = img.getAttribute('src')
    }
})

document.querySelector('.pop-up__span').onclick = () =>  {
    popUp.style.display = 'none'
}

const TOKEN = "6368395618:AAHjdYQPz5V5q4AEj-IeLeLvD927hCakApE"
const CHAT_ID = "-861870634"
const  URI_IP  = `https://api.telegram.org/bot${TOKEN}/sendMessage`
const success = document.querySelector('.feedback__success')
const danger = document.querySelector('.feedback__success--danger')

document.querySelector('#form').addEventListener('submit', function(e) {
    e.preventDefault()

    let message = `<b>Заявка с сайта:</b>\n`
    message += `<b>Имя: </b> ${this.name.value}\n`
    message += `<b>Телефон: </b> ${this.phone.value}`

    axios
    .post(URI_IP, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = ""
        this.phone.value = ""
        success.style.display = "block"

        setTimeout(() => {
            success.style.display = "none"
        }, 3000)
    })
    .catch((err) => {
        danger.style.display = "block"
    })
})

function scrollTo (el) {
    window.scroll({
        left: 0,
        top: el.offsetTop,
        behavior: "smooth"
    })
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault()
        const blockId = anchor.getAttribute('href')
        document.querySelector(''+ blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
    
    anchor.addEventListener('click', close)
    
}


