var password = document.querySelector("[name='password'");
var button = document.querySelector("button");
var errorContainer = document.querySelector(".errors");
var MessageType;
(function (MessageType) {
    MessageType["Warning"] = "warning";
    MessageType["Error"] = "error";
})(MessageType || (MessageType = {}));
// let errors: string[] = [];
var errors = [];
function validate() {
    var value = this.value;
    errors = [];
    clearContainer();
    if (value.trim().length < 5) {
        errors.push({ type: MessageType.Warning, message: "Too few characters" });
    }
    if (value.includes(" ")) {
        errors.push({ type: MessageType.Error, message: "No spaces allowed" });
    }
    errors.forEach(function (error) {
        var errorDiv = document.createElement("div");
        var errorContent = document.createTextNode(error.message);
        errorDiv.appendChild(errorContent);
        errorDiv.classList.add(error.type);
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
