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

import './pics/article-eval/project-home.png'
import './pics/article-eval/project-photo.jpg'
import './pics/certs/frontend.png'
import './pics/certs/fullstack.png'
import './pics/macros-yo/project-home.png'
import './pics/macros-yo/project-photo.jpg'
import './pics/sections/handshake.jpg'
import './pics/skills/bootstrap.png'
import './pics/skills/css.png'
import './pics/skills/flask.png'
import './pics/skills/front-end.png'
import './pics/skills/html.png'
import './pics/skills/javascript.png'
import './pics/skills/node.png'
import './pics/skills/postgres.png'
import './pics/skills/python.png'
import './pics/skills/react.png'
import './pics/skills/redux.png'
import './pics/skills/sass.png'
import './pics/skills/webpack.png'
import './pics/trivia/homepage.png'
import './pics/trivia/project-photo.jpg'
import './pics/where-to/destination.png'
import './pics/where-to/project-photo.jpg'


var ghpages = require('gh-pages');
 
ghpages.publish('dist', function(err) {});

ghpages.publish(dir, callback);


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