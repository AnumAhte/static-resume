// Get form element and output div
var form = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
// Capture input values and return them in a structured format
function getFormData() {
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var degree = document.getElementById('degree').value;
    var skill = document.getElementById('skill').value;
    var experience = document.getElementById('experience').value;
    var languages = document.getElementById('languages').value;
    return { name: name, address: address, phone: phone, email: email, degree: degree, skill: skill, experience: experience, languages: languages };
}
// Generate resume based on form data
function generateResume() {
    var data = getFormData();
    var resumeContent = "\n        <h2>".concat(data.name, "</h2>\n        <p><strong>Address:</strong> ").concat(data.address, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(data.degree, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(data.skill, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(data.experience, "</p>\n\n        <h3>Languages</h3>\n        <p>").concat(data.languages, "</p>\n    ");
    // Display generated resume
    resumeOutput.innerHTML = resumeContent;
}
// Add event listener to form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh
    generateResume();
});
