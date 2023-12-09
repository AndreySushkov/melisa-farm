const swiper = new Swiper('.main__swiper', {
    loop: true,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    autoplay: {
        delay: 5000,
      },
})


const cartBtns = document.querySelectorAll('.cart-btn');
cartBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.add('cart-btn--active');
        btn.textContent = "Оформить";
        btn.addEventListener('click', () => {
            document.location = 'cart.html';
        })
    })
})


const productCount = document.querySelectorAll('.count-text');
const productBtnMinus = document.querySelectorAll('.count-btn--minus');
const productBtnPlus = document.querySelectorAll('.count-btn--plus');

const productPrice = document.querySelectorAll('.price')
const productSum = document.querySelector('.price-sum');

for(let i = 0; i < productCount.length; i++) {
    productBtnMinus[i].addEventListener('click', () => {
        if (Number(productCount[i].textContent) > 1) {
            productCount[i].textContent = Number(productCount[i].textContent) - 1;
            let sum = 0;
            for(let j = 0; j < productCount.length; j++) {
                sum += Number(productPrice[j].textContent) * Number(productCount[j].textContent);
            }
            productSum.textContent = sum;
        }
    })

    productBtnPlus[i].addEventListener('click', () => {
        productCount[i].textContent = Number(productCount[i].textContent) + 1;
        productSum.textContent = 0;
        let sum = 0;
        for(let j = 0; j < productCount.length; j++) {
            sum += Number(productPrice[j].textContent) * Number(productCount[j].textContent);
        }
        productSum.textContent = sum;
    })
}


const cartForm = document.querySelector('.order__form');

if (cartForm != null) {
    cartForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
    
        const adress = cartForm.querySelector('.order__adress-input').value;
        const phone = cartForm.querySelector('.order__phone-input').value;
        const email = cartForm.querySelector('.order__email-input').value;
        const payRadio = cartForm.querySelectorAll('.order__pay-input');
    
        let radioValid = false;
        for (let i = 0; i < payRadio.length; i++) {
            if (payRadio[i].checked) {
                radioValid = true;
            }
        }
    
        if (!adress) {
            alert("Строка адреса не должна быть пуста!");
        }
        else if (!phone) {
            alert("Строка телефона не должна быть пуста!");
        }
        else if (phone.length < 11 || isNaN(Number(phone))) {
            alert("Номер был неправильно введен!");
        } 
        else if (!email) {
            alert("Строка электронной почты не должна быть пуста!");
        }
        else if (!radioValid) {
            alert("Вы должны выбрать способ оплаты!");
        }
        else {
            cartForm.submit();
        }
    })
}


const feedbackForm = document.querySelector('.contacts__form');

if (feedbackForm != null) {
    feedbackForm.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const text = feedbackForm.querySelector('.contacts__form-textarea').value;
        const email = feedbackForm.querySelector('.contacts__form-input').value;

        if (!text) {
            alert("Сообщение не написано!");
        }
        else if (!email) {
            alert("Строка электронной почты не должна быть пуста!");
        }
        else {
            feedbackForm.submit();
        }
    })
}


const subscribeForm = document.querySelector('.footer__form');

subscribeForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const email = subscribeForm.querySelector('.footer__form-input').value;

    if (!email) {
        alert("Строка электронной почты не должна быть пуста!");
    }
    else {
        subscribeForm.submit();
    }
})

