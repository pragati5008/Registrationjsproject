 function validateForm() {
    let isValid = true;

    // Clear errors
    document.querySelectorAll(".error").forEach(e => {
        e.style.visibility = "hidden";
        e.innerText = "";
    });

    function setError(input, message) {
        let parent = input.parentElement;
        let error = parent.querySelector(".error");
        error.innerText = message;
        error.style.visibility = "visible";
        isValid = false;
    }

    // Name
    let name = document.getElementById("name");
    if (name.value.trim() === "") setError(name, "Full name required");

    // Email
    let email = document.getElementById("email");
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) setError(email, "Invalid email");

    // Phone
    let phone = document.getElementById("phone");
    if (!phone.value.match(/^[0-9]{10}$/)) setError(phone, "Phone must be 10 digits");

    // DOB
    let dob = document.getElementById("dob");
    if (dob.value === "") setError(dob, "Select your birth date");

    // Gender
    let gender = document.getElementsByName("gender");
    let selected = false;
    for (let g of gender) if (g.checked) selected = true;
    if (!selected) {
        let error = gender[0].parentElement.parentElement.querySelector(".error");
        error.innerText = "Select gender";
        error.style.visibility = "visible";
        isValid = false;
    }

    // Address
    let address = document.getElementById("address");
    if (address.value.trim().length < 10) setError(address, "Enter full address");

    // City
    let city = document.getElementById("city");
    if (city.value.trim() === "") setError(city, "City required");

    // Country
    let country = document.getElementById("country");
    if (country.value === "") setError(country, "Select country");

    // High school %
    let hs = document.getElementById("highschool");
    if (hs.value === "" || hs.value < 0 || hs.value > 100)
        setError(hs, "Enter valid percentage");

    // 12th %
    let tw = document.getElementById("twelve");
    if (tw.value === "" || tw.value < 0 || tw.value > 100)
        setError(tw, "Enter valid percentage");

    // Interest
    let interest = document.getElementById("interest");
    if (interest.value.trim() === "") setError(interest, "Enter area of interest");

    // Education
    let edu = document.getElementById("education");
    if (edu.value.trim() === "") setError(edu, "Enter your education");
    
     // Years of Experience
let experience = document.getElementById("experience");

if (experience.value.trim() === "") {
    setError(experience, "Experience is required");
} 
else if (isNaN(experience.value)) {
    setError(experience, "Enter a valid number");
}
else if (experience.value < 0 || experience.value > 50) {
    setError(experience, "Enter between 0 to 50 years");
}
// Why do you want to attend this conference
let conferenceReason = document.getElementById("conferenceReason");

if (conferenceReason.value.trim() === "") {
    setError(conferenceReason, "This field is required");
} 
else if (conferenceReason.value.trim().length < 10) {
    setError(conferenceReason, "Please write at least 10 characters");
}





    return isValid;
}  