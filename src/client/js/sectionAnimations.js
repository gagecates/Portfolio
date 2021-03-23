import { inViewPort } from "./navbar";

function showHidden(){
    const hiddenElements = document.querySelectorAll("div.magic-appear")
    for(let element of hiddenElements){
        if(inViewPort(element)){
            if(element.id === 'contact-jump') {
                element.style.opacity = "1";
                element.style.transitionDelay = "5s";
                element.style.transitionDuration = "6s";
            }else{
                //element.style.visibility = "visible";
                element.style.opacity = "1";
                element.style.transitionDelay = "0s";
                element.style.transitionDuration = "6s";
            }
        }else{
            element.style.opacity = "0";
            element.style.transitionDelay = "0s";
        }
    }
}

// animates header section h2 border line from 100% to 15% when section active
function sectionAnimations(section) {
    // home section doesnt have an h2. this avoids errors
    if(section.querySelector("h2")){
        const sectionHeader = section.querySelector("h2")
        sectionHeader.style.width = "25%";
        sectionHeader.style.transitionDuration = "3s";
    }else{
        return
    }
}

// returns border line to original size when no longer active. 
function disableAnimations(section) {
    // home section doesnt have an h2. this avoids errors
    if(section.querySelector("h2")) {
        const sectionHeader = section.querySelector("h2")
        sectionHeader.style.width = "100%";

    }else{
        return
    }
}

function projectSlide() {
    const projectSection = document.getElementById('work-section-viewbox')
    const projects = document.querySelectorAll('.project-pic-container')

    if(inViewPort(projectSection)){
        for(let project of projects){
            if(project.classList.contains('left')) {
                project.classList.add('slide-left')
                //project.style.position = 'relative';
                //project.style.right = '125px';
                //project.style.transitionDuration = '5s';
            }else{
                project.classList.add('slide-right')
                //project.style.position = 'relative';
                //project.style.left = '125px';
                //project.style.transitionDuration = '5s';
            }
        }
    }else{
        for(let project of projects){
            project.classList.remove('slide-left')
            project.classList.remove('slide-right')
        }
    }
};

export { showHidden, sectionAnimations, disableAnimations, projectSlide }