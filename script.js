// Show/hide Contact section when Contact is clicked
document.addEventListener('DOMContentLoaded', function() {
	const contactSection = document.getElementById('contact-section');
	const contactLink = Array.from(document.querySelectorAll('.nav-links a')).find(a => a.textContent.trim().toLowerCase() === 'contact');
	const homeLink = document.getElementById('home-link');
	if (contactLink && contactSection) {
		contactLink.addEventListener('click', function(e) {
			e.preventDefault();
			// Hide other sections if needed
			const aboutSection = document.getElementById('about-section');
			const skillsSection = document.getElementById('skills');
			const projectsSection = document.getElementById('projects');
			if (aboutSection) aboutSection.style.display = 'none';
			if (skillsSection) skillsSection.style.display = 'none';
			if (projectsSection) projectsSection.style.display = 'none';
			contactSection.style.display = 'flex';
			contactSection.scrollIntoView({ behavior: 'smooth' });
		});
	}
	if (homeLink && contactSection) {
		homeLink.addEventListener('click', function(e) {
			if (contactSection) contactSection.style.display = 'none';
		});
	}
});
// Show/hide Projects section when Project is clicked
document.addEventListener('DOMContentLoaded', function() {
	const projectsSection = document.getElementById('projects');
	const projectLink = Array.from(document.querySelectorAll('.nav-links a')).find(a => a.textContent.trim().toLowerCase() === 'project');
	const homeLink = document.getElementById('home-link');
	if (projectLink && projectsSection) {
		projectLink.addEventListener('click', function(e) {
			e.preventDefault();
			// Hide other sections if needed
			const aboutSection = document.getElementById('about-section');
			const skillsSection = document.getElementById('skills');
			if (aboutSection) aboutSection.style.display = 'none';
			if (skillsSection) skillsSection.style.display = 'none';
			projectsSection.style.display = 'flex';
			projectsSection.scrollIntoView({ behavior: 'smooth' });
		});
	}
	if (homeLink && projectsSection) {
		homeLink.addEventListener('click', function(e) {
			if (projectsSection) projectsSection.style.display = 'none';
		});
	}
});
// Show/hide About and Skills sections when navbar links are clicked
document.addEventListener('DOMContentLoaded', function() {
	const skillsSection = document.getElementById('skills');
	const skillsLink = document.getElementById('skills-link');
	const aboutSection = document.getElementById('about-section');
	const aboutLink = document.getElementById('about-link');
	const homeLink = document.getElementById('home-link');

	if (skillsLink && skillsSection) {
		skillsLink.addEventListener('click', function(e) {
			e.preventDefault();
			if (aboutSection) aboutSection.style.display = 'none';
			skillsSection.style.display = 'block';
			skillsSection.scrollIntoView({ behavior: 'smooth' });
		});
	}
	if (aboutLink && aboutSection) {
		aboutLink.addEventListener('click', function(e) {
			e.preventDefault();
			if (skillsSection) skillsSection.style.display = 'none';
			aboutSection.style.display = 'flex';
			aboutSection.scrollIntoView({ behavior: 'smooth' });
		});
	}
	if (homeLink) {
		homeLink.addEventListener('click', function(e) {
			e.preventDefault();
			if (skillsSection) skillsSection.style.display = 'none';
			if (aboutSection) aboutSection.style.display = 'none';
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}
});
