//import { startUp } from './js/app'
import { setActive, createNavLinks } from './js/navbar'
import { showHidden, sectionAnimations, disableAnimations, projectSlide } from './js/sectionAnimations'
import { skillAnimation } from './js/skills'
import './js/projects'

import './style/style.scss'
import './style/social.scss'
import './style/skills.scss'
import './style/sections.scss'
import './style/projects.scss'

// every scroll checks what section is in viewport
document.addEventListener('scroll', function(){
    setActive();
    showHidden();
    projectSlide();
});

createNavLinks();



export { 
    setActive,
    createNavLinks,
    showHidden,
    sectionAnimations,
    disableAnimations,
    skillAnimation
 }