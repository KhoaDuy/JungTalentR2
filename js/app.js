// build the nav
let listSection = document.getElementsByTagName("section");
let navBar = document.getElementById("navbar__list");
for(let i = 1; i <= listSection.length; i++){
    // Build menu 
    const menuNode1 = document.createElement("li");
    const menuNode2 = document.createElement("a");
    menuNode1.appendChild(menuNode2);
    // Scroll to section on click
    menuNode2.addEventListener('click', function (event) {
        event.preventDefault();
        listSection[i - 1].scrollIntoView({ behavior: 'smooth' });
      });
    menuNode2.classList.add('menu__link');
    menuNode2.textContent = "Section " + i;
    navBar.appendChild(menuNode1);
}

// Show / Hide menu bar
let navbarMenu = document.getElementById("navbar__list");
let toScroll;
window.onscroll = () => {
    navbarMenu.classList.remove("dis-none");
    window.clearTimeout(toScroll);
    toScroll = setTimeout(() => {
        navbarMenu.classList.add("dis-none");
    }, 3000);
}
// Button return to top
let btnReturnTop = document.querySelector(".btn-Returntop");
window.onscroll = () => {
    if(window.scrollY >=  window.screen.availHeight){
        btnReturnTop.classList.remove("dis-none");
    }
    else{
        btnReturnTop.classList.add("dis-none");
    }
}
btnReturnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
})
// Set sections as active
let linkSec = document.querySelectorAll("a");
let check = [0,0,0];
window.addEventListener("scroll",() => {
    for(let i = 0; i < 3; i++){
        let distanceTop = listSection[i].getBoundingClientRect().top.toFixed();
        let elementHeight = listSection[i].offsetHeight*0.88;
        if(distanceTop >= (-1)*elementHeight &&  distanceTop <= 100){
            linkSec[i].classList.add("menuLink-dis");
            check[i] = 1;
            for(let j = 0; j < 3;j++){
                if(j!=i && check[j] == 1){
                    linkSec[j].classList.remove("menuLink-dis");
                    check[j] = 0;
                }
            }
        }
        else{
            linkSec[i].classList.remove("menuLink-dis");
        }
    }
})

/**
 * End Main Functions
 * Begin Events
 * 
*/







