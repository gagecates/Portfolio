const skills = document.querySelectorAll('.skills-icon')
const skillsContainer = document.getElementById('skills-icons-container')
const skillDisplay = document.getElementById('skill-explain')

for (let skill of skills){
    skill.addEventListener('mouseover', function() {
        skillDisplay.innerHTML = skill.id;
    })
}

skillsContainer.addEventListener('mouseout', function() {
    skillDisplay.innerHTML = '';
})