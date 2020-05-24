const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('ul');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const topic = document.querySelector('#topic');
const text = document.querySelector('#text');
const submitBtn = document.querySelector('input:nth-child(1)');
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

hamburger.addEventListener('click', () => {
    nav.style.display = nav.style.display !== "none" ? "none" : "flex";
    setHamburger()
});
window.addEventListener('resize', () => setHamburger());

function setHamburger() {
    if (nav.style.display !== "none") {
        const file = window.innerWidth > 650 ? "hamgurgerOpen" : "hamburgerOpenMobile";
        hamburger.style.backgroundImage = `url(../style/images/${file}.svg)`
    } else {
        hamburger.style.backgroundImage = "url(../style/images/hamburgerClosed.svg)"
    }
}

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    let error = validateInput(name, name.value.length < 3);
    error = validateInput(email, !email.value.match(mailformat)) || error;
    error = validateInput(topic, topic.value.length < 3) || error;
    error = validateInput(text, text.value.length < 15) || error;
    if (!error){
        console.log(error)
    }
})

name.addEventListener('input', () => validateInput(name, name.value.length < 3));
email.addEventListener('input', () => validateInput(email, !email.value.match(mailformat)));
topic.addEventListener('input', () => validateInput(topic, topic.value.length < 3));
text.addEventListener('input', () => validateInput(text, text.value.length < 15));

function validateInput(element, condition) {
    element.nextElementSibling.style.display = condition ? "block" : "none";
    return condition;
}

