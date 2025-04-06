document.getElementById('students-btn').addEventListener('click', function () {
    showSection('students-section');
    setActiveButton(this);
});

document.getElementById('activities-btn').addEventListener('click', function () {
    showSection('activities-section');
    setActiveButton(this);
});

document.getElementById('reports-btn').addEventListener('click', function () {
    
});

document.getElementById('freeze-btn').addEventListener('click', function () {
    showSection('freeze-section');
    setActiveButton(this);
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(function (section) {
        section.classList.remove('active-section');
    });
    document.getElementById(sectionId).classList.add('active-section');
}

function setActiveButton(buttonElement) {
    const buttons = document.querySelectorAll('.sidebar ul li');
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });
    buttonElement.classList.add('active');
}