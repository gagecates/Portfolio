//import { startUp } from './js/app'
import { setActive, createNavLinks } from './js/navbar'

import './style/style.scss'
import './style/social.scss'

// every scroll checks what section is in viewport
document.addEventListener('scroll', function(){
    setActive();
});

createNavLinks();

export { setActive, createNavLinks }