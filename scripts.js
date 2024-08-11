

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-bar nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});

//header


document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to My Portfolio" ;
    const speed = 50; // Speed of typing in milliseconds
    const pauseDuration = 3000; // Pause duration after typing effect, in milliseconds
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("header-message").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(clearText, pauseDuration); // Wait before clearing text
        }
    }

    function clearText() {
        document.getElementById("header-message").innerHTML = ""; // Clear the text
        i = 0; // Reset the index
        setTimeout(typeWriter, 500); // Wait before starting typing again
    }

    // Start the typing effect when the document is loaded
    typeWriter();
});

//About

// Parallax effect for background
window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('#about');
    const scrollPosition = window.scrollY;

    aboutSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

//About section
document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi, I'm Akash Pradhan, a passionate Data Scientist and Java Developer. With a strong foundation in data analysis, machine learning, and software development, I specialize in transforming data into actionable insights. My expertise spans a variety of technologies, including Python, Pandas, NumPy, Tableau, Power BI, and SQL. I'm always eager to learn and take on new challenges, constantly striving to push the boundaries of what's possible with data.";
    const speed = 50; // Speed of typing in milliseconds
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("about-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(resetAndType, 5000); // Wait for 3 seconds before restarting
        }
    }

    function resetAndType() {
        document.getElementById("about-text").innerHTML = ""; // Clear the text
        i = 0; // Reset the index
        typeWriter(); // Start typing again
    }

    typeWriter();
});





// Toggle menu for responsive view
function toggleMenu() {
    const nav = document.querySelector('.nav-bar nav');
    const menuToggleIcon = document.querySelector('.menu-toggle i');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
        menuToggleIcon.classList.replace('fa-times', 'fa-bars');
    } else {
        nav.style.display = 'flex';
        menuToggleIcon.classList.replace('fa-bars', 'fa-times');
    }
}

// Toggle project details
function toggleProjectDetails(id) {
    const element = document.getElementById(id);
    const isOpen = element.style.display === 'block';
    const projectCard = element.closest('.project-card');
    
    document.querySelectorAll('.project-details').forEach(detail => {
        detail.style.display = 'none';
        detail.closest('.project-card').classList.remove('open');
    });

    if (!isOpen) {
        element.style.display = 'block';
        projectCard.classList.add('open');
    }
}

//education section

document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const checkTimelineItems = () => {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', checkTimelineItems);
    checkTimelineItems(); // Initial check
});


// Form validation (optional)
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        event.preventDefault(); // Prevent form submission
    }
});



//Resume
document.addEventListener('DOMContentLoaded', function () {
    const resumeSummary = document.querySelector('.resume-summary');
    const resumeViewer = document.querySelector('.resume-viewer');
    const downloadBtn = document.querySelector('.download-btn');

    downloadBtn.addEventListener('click', function () {
        resumeViewer.classList.toggle('hidden');
    });
});


document.querySelectorAll('.education-point').forEach((point, index) => {
    point.addEventListener('mouseenter', () => {
        document.querySelectorAll('.education-info')[index].style.opacity = '1';
        document.querySelectorAll('.education-info')[index].style.transform = 'translateY(0)';
    });
    point.addEventListener('mouseleave', () => {
        document.querySelectorAll('.education-info')[index].style.opacity = '0';
        document.querySelectorAll('.education-info')[index].style.transform = 'translateY(10px)';
    });
});


