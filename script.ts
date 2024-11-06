// Define types for form inputs
interface ResumeData {
    name: string;
    address: string;
    phone: string;
    email: string;
    degree: string;
    skill: string;
    experience: string;
    languages: string;
}

// Get form element and output div
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

// Capture input values and return them in a structured format
function getFormData(): ResumeData {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const skill = (document.getElementById('skill') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const languages = (document.getElementById('languages') as HTMLInputElement).value;

    return { name, address, phone, email, degree, skill, experience, languages };
}

// Generate resume based on form data
function generateResume(): void {
    const data: ResumeData = getFormData();

    const resumeContent = `
        <h2>${data.name}</h2>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>

        <h3>Education</h3>
        <p>${data.degree}</p>

        <h3>Skills</h3>
        <p>${data.skill}</p>

        <h3>Experience</h3>
        <p>${data.experience}</p>

        <h3>Languages</h3>
        <p>${data.languages}</p>
    `;

    // Display generated resume
    resumeOutput.innerHTML = resumeContent;
}

// Add event listener to form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent page refresh
    generateResume();
});
