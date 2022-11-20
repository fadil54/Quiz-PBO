const sesuaikanUkuranDevice = function(page){
    page.style.height = `${window.innerHeight}px`;
    return sesuaikanUkuranDevice.bind(sesuaikanUkuranDevice,page);
}
const reset = function(cnDropDown,topLine,middleLine,bottomLine){
    topLine.classList.remove("nav__icn-menu-rotate-kiri");
    middleLine.classList.remove("nav__icn-menu-hidden-middle-line");
    bottomLine.classList.remove("nav__icn-menu-rotate-kanan");
    cnDropDown.classList.remove("tirai");
}
const switchMode = function(icnMoon,icnSun,cnDropDown){
    const body = document.body;
    icnMoon.classList.toggle("hidden");
    icnSun.classList.toggle("hidden");
    body.classList.toggle("dark-mode");
    cnDropDown.classList.toggle("dark-mode");
}
const switchIcon = function(cnDropDown,topLine,middleLine,bottomLine){
    topLine.classList.toggle("nav__icn-menu-rotate-kiri");
    middleLine.classList.toggle("nav__icn-menu-hidden-middle-line");
    bottomLine.classList.toggle("nav__icn-menu-rotate-kanan");
    cnDropDown.classList.toggle("tirai");
}
const scrollToView = function(e){
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}
const handleHover = function (e) {
    if (e.target.classList.contains('nav__cn-dr-down-item')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__cn-dr-down-item');
      const logo = link.closest('.nav').querySelector('img');
  
      siblings.forEach(el => {
        if (el !== link) el.style.opacity = this;
      });
      logo.style.opacity = this;
      console.log(e);
    }
};

document.addEventListener("DOMContentLoaded",function(){
    const icnMenu = document.querySelector(".nav__icn-menu");
    const cnDropDown = document.querySelector(".nav__cn-dr-down");
    const topLine = document.querySelector(".nav__icn-menu-top-line");
    const middleLine = document.querySelector(".nav__icn-menu-middle-line");
    const bottomLine = document.querySelector(".nav__icn-menu-bottom-line");
    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav__cn-dr-down-item");

    nav.addEventListener('mouseover', handleHover.bind(0.5));
    nav.addEventListener('mouseout', handleHover.bind(1));
    navLinks.forEach(navLink => navLink.addEventListener("click",scrollToView));
    window.addEventListener("resize",sesuaikanUkuranDevice(header));
    icnMenu.addEventListener("click",switchIcon.bind(switchIcon,cnDropDown,topLine,middleLine,bottomLine));
    window.addEventListener("scroll",reset.bind(reset,cnDropDown,topLine,middleLine,bottomLine));
})