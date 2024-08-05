//  Implement form validation to ensure that all required fields are filled before submission.


function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all required fields.");
        return false;
    }
    alert("Hello, " + name + "! Your email is: " + email + ". Form submitted successfully!");
    document.getElementById("myForm").reset();
    return true;
}


