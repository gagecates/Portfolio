//import { startUp } from './js/app'
import { setActive, createNavLinks } from './js/navbar'
import { showHidden, sectionAnimations, disableAnimations } from './js/sectionAnimations'
import { skillAnimation } from './js/skills'

import './style/style.scss'
import './style/social.scss'
import './style/skills.scss'
import './style/sections.scss'

// every scroll checks what section is in viewport
document.addEventListener('scroll', function(){
    setActive();
    showHidden();
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