function toggleExperience(): void {
    const experienceContent = document.getElementById('experience-content') as HTMLElement;
    const button = document.querySelector('.experience-container .toggle-button') as HTMLButtonElement;

    if (experienceContent.style.display === 'none' || experienceContent.style.display === '') {
        experienceContent.style.display = 'block';
        button.textContent = 'Hide Experience';
    } else {
        experienceContent.style.display = 'none';
        button.textContent = 'Show Experience';
    }
}

function toggleSkills(): void {
    const skillsContent = document.getElementById('skills-content') as HTMLElement;
    const button = document.querySelector('.skills-container .toggle-button') as HTMLButtonElement;

    if (skillsContent.style.display === 'none' || skillsContent.style.display === '') {
        skillsContent.style.display = 'block';
        button.textContent = 'Hide Skills';
    } else {
        skillsContent.style.display = 'none';
        button.textContent = 'Show Skills';
    }
}

function toggleEducation(): void {
    const educationContent = document.getElementById('education-content') as HTMLElement;
    const button = document.querySelector('.education-container .toggle-button') as HTMLButtonElement;

    if (educationContent.style.display === 'none' || educationContent.style.display === '') {
        educationContent.style.display = 'block';
        button.textContent = 'Hide Education';
    } else {
        educationContent.style.display = 'none';
        button.textContent = 'Show Education';
    }
}
