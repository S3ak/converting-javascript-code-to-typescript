var password = document.querySelector("[name='password'");
var button = document.querySelector("button");
var errorContainer = document.querySelector(".errors");
// let errors: string[] = [];
var errors = [];
function validate() {
    var value = this.value;
    errors = [];
    clearContainer();
    if (value.trim().length < 5) {
        errors.push("Too few characters");
    }
    if (value.includes(" ")) {
        errors.push("No spaces allowed");
    }
    errors.forEach(function (error) {
        var errorDiv = document.createElement("div");
        var errorContent = document.createTextNode(error);
        errorDiv.appendChild(errorContent);
        errorDiv.classList.add("error");
        errorContainer.appendChild(errorDiv);
    });
    button.disabled = !buttonEnabled();
}
password.addEventListener("keyup", validate);
function clearContainer() {
    while (errorContainer.hasChildNodes()) {
        errorContainer.removeChild(errorContainer.lastChild);
    }
}
function buttonEnabled() {
    if (errors.length === 0) {
        return true;
    }
    return false;
}
