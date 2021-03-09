import { sectionAnimations, disableAnimations } from './sectionAnimations'

const navItemsUL = document.getElementById('nav-items');
const sections = document.querySelectorAll("section");
const sectionsViewBox = document.querySelectorAll('div.section-in-viewport')


function createNavLinks(){
    for (let section of sections){
        let navLink = document.createElement("li");
        navLink.id = section.id + "-nav";
        navLink.innerText = section.getAttribute('data-nav');
        navLink.addEventListener('click',function(){
            section.scrollIntoView({behavior: "smooth"})

        });

        navItemsUL.appendChild(navLink);
    }
};


// checks if section is in viewport
function inViewPort(element){
    const bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
};


// sets navlink to active when centered section box element is in viewport
function setActive(){
    for (let box of sectionsViewBox){
        const className = box.id.split('-');
        const section = document.getElementById(className[0] + "-" + className[1])
        const navLink = document.getElementById(section.id + "-nav");
        
        if(inViewPort(box)){
            navLink.classList.add('nav-active');
            sectionAnimations(section);
        }else {
            navLink.classList.remove('nav-active');
            disableAnimations(section);
        
        }
    }

};


export { 
    setActive, 
    inViewPort, 
    createNavLinks,
}
    

