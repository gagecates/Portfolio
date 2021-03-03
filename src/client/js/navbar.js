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
function inViewPort(sectionBox){
    const bounding = sectionBox.getBoundingClientRect();
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
        const navLink = document.getElementById(className[0] + "-" + className[1] + "-nav");
        if(inViewPort(box)){
            navLink.classList.add('nav-active');
        }else {
            navLink.classList.remove('nav-active');
        
        }
    }

};


export { setActive, inViewPort, createNavLinks }
    

