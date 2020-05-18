const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('ul');

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