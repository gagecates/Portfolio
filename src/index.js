//import { startUp } from './js/app'
import html from './client/views/index.html';
import { setActive, createNavLinks } from './client/js/navbar'
import { showHidden, sectionAnimations, disableAnimations, projectSlide } from './client/js/sectionAnimations'
import { skillAnimation } from './client/js/skills'
import './client/js/projects'

import './client/style/style.scss'
import './client/style/social.scss'
import './client/style/skills.scss'
import './client/style/sections.scss'
import './client/style/projects.scss'

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
    skillAnimation,
    html
 }