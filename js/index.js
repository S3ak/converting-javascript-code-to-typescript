const password = document.querySelector("[name='password'");
const button = document.querySelector("button");
const errorContainer = document.querySelector(".errors");
let errors = [];
function validate() {
    const value = this.value;
    errors = [];
    clearContainer();
    if (value.trim().length < 5) {
        errors.push("Too few characters");
    }
    if (value.includes(" ")) {
        errors.push("No spaces allowed");
    }
    errors.forEach(function (error) {
        const errorDiv = document.createElement("div");
        const errorContent = document.createTextNode(error);
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
//
var MessageType;
(function (MessageType) {
    MessageType["Error"] = "ERROR";
    MessageType["Warning"] = "WARNING";
})(MessageType || (MessageType = {}));
function generateMessage(message) {
    switch (message.severity) {
        case MessageType.Error:
            return `This is SERIOUS: ${message.content}`;
        case MessageType.Warning:
            return `This is KIND OF SERIOUS: ${message.content}`;
        default:
            return "We're not sure what's going on.";
    }
}
const navMenu = {
    list: [
        {
            title: "home",
            href: "http://google.com",
            order: 1,
        },
    ],
    code: "isAuth",
};
var Color;
(function (Color) {
    Color["Red"] = "#bbb";
    Color["Blue"] = "#222";
    Color["Grey"] = "#fff";
})(Color || (Color = {}));
Color.Blue;
