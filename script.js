function toggleExperience() {
    var experienceContent = document.getElementById('experience-content');
    var button = document.querySelector('.experience-container .toggle-button');
    if (experienceContent.style.display === 'none' || experienceContent.style.display === '') {
        experienceContent.style.display = 'block';
        button.textContent = 'Hide Experience';
    }
    else {
        experienceContent.style.display = 'none';
        button.textContent = 'Show Experience';
    }
}
function toggleSkills() {
    var skillsContent = document.getElementById('skills-content');
    var button = document.querySelector('.skills-container .toggle-button');
    if (skillsContent.style.display === 'none' || skillsContent.style.display === '') {
        skillsContent.style.display = 'block';
        button.textContent = 'Hide Skills';
    }
    else {
        skillsContent.style.display = 'none';
        button.textContent = 'Show Skills';
    }
}
function toggleEducation() {
    var educationContent = document.getElementById('education-content');
    var button = document.querySelector('.education-container .toggle-button');
    if (educationContent.style.display === 'none' || educationContent.style.display === '') {
        educationContent.style.display = 'block';
        button.textContent = 'Hide Education';
    }
    else {
        educationContent.style.display = 'none';
        button.textContent = 'Show Education';
    }
}
