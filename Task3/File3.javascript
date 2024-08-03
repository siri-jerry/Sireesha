// script.js

document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { id: 1, name: 'Introduction to JavaScript', description: 'Learn the basics of JavaScript.' },
        { id: 2, name: 'HTML & CSS Basics', description: 'Understand the basics of HTML and CSS.' },
        { id: 3, name: 'Advanced CSS', description: 'Learn advanced CSS techniques.' },
        { id: 4, name: 'Web Development with Python', description: 'Build web applications using Python.' }
    ];

    const courseList = document.getElementById('courseList');
    const profileName = document.getElementById('profileName');
    const enrolledCourses = document.getElementById('enrolledCourses');

    let userProfile = {
        name: 'John Doe',
        courses: []
    };

    // Render courses
    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.innerHTML = `
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <button onclick="enroll(${course.id})">Enroll</button>
        `;
        courseList.appendChild(courseItem);
    });

    // Render profile
    function renderProfile() {
        profileName.textContent = userProfile.name;
        enrolledCourses.innerHTML = userProfile.courses.length > 0 
            ? userProfile.courses.map(c => `<li>${courses.find(course => course.id === c).name}</li>`).join('')
            : '<li>No courses enrolled.</li>';
    }

    window.enroll = function(courseId) {
        if (!userProfile.courses.includes(courseId)) {
            userProfile.courses.push(courseId);
            renderProfile();
            alert('Successfully enrolled in course!');
        } else {
            alert('Already enrolled in this course.');
        }
    };

    renderProfile();
});
