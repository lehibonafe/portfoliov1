//Scrollspy
document.addEventListener('DOMContentLoaded', function(){
    const sections = document.querySelectorAll(".section");
    const menu_links = document.querySelectorAll("nav li a");

    const makeActive = (link) => menu_links[link].classList.add("active");
    const removeActive = (link) => menu_links[link].classList.remove("active");
    const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

    const sectionMargin = 200;
    let currentActive = 0;

    window.addEventListener("scroll", () => {
        const current = sections.length - [...sections].reverse().findIndex((section) => 
        window.scrollY >= section.offsetTop - sectionMargin ) - 1;

        
        if (current !== currentActive) {
            removeAllActive();
            currentActive = current;
            makeActive(current);
        }
    });
}, false);

var menubar = document.querySelector('.menubar');
var nav = document.querySelector('nav');
menubar.onclick = function(){
    menubar.classList.toggle('open');
    nav.classList.toggle('openNav');

}

document.onclick = function(e){
    if(e.target.id !== 'navbar' && e.target.id !== 'menubar' && e.target.id !== 'nav' && e.target.id !== 'nav-links' && e.target.id !== 'link'){
        nav.classList.remove('openNav');
        menubar.classList.remove('open');
    }
} 
