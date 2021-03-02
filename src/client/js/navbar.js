const navBar = document.getElementById('navbar');
const sections = document.querySelectorAll("section");


for ()
navLink.addEventListener('click',function(){
    section.scrollIntoView({behavior: "smooth"})


// checks if section is in viewport
function inViewPort(section){
    const bounding = section.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


// sets section and corisponding nav bar link to active when in viewport
function setActive(){
    for (let section of sections){
        const navLink = document.getElementById(section.id + "-nav");
        if(inViewPort(section)){
            section.classList.add('this-section-active');
            navLink.classList.add('nav-active');
        }else {
            section.classList.remove('this-section-active');
            navLink.classList.remove('nav-active');
        
        }
    }

}
    

// every scroll checks what section is in viewport
document.addEventListener('scroll', function(){
    setActive();
});