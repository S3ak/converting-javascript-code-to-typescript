const password: Element = document.querySelector("[name='password'");
const button: HTMLButtonElement = document.querySelector("button");
const errorContainer: Element = document.querySelector(".errors");

interface Message {
	type: MessageType;
	message: string;
}

enum MessageType {
	Warning = "warning",
	Error = "error",
}

// let errors: string[] = [];
let errors: Array<Message> = [];

function validate() {
	const value = this.value;

	errors = [];

	clearContainer();

	if (value.trim().length < 5) {
		errors.push({ type: MessageType.Warning, message: "Too few characters" });
	}
	if (value.includes(" ")) {
		errors.push({ type: MessageType.Error, message: "No spaces allowed" });
	}

	errors.forEach(function (error) {
		const errorDiv = document.createElement("div");
		const errorContent: Text = document.createTextNode(error.message);
		errorDiv.appendChild(errorContent);
		errorDiv.classList.add(error.type);
		errorContainer.appendChild(errorDiv);
	});

	button.disabled = !buttonEnabled();
}
password.addEventListener("keyup", validate);

function clearContainer(): void {
	while (errorContainer.hasChildNodes()) {
		errorContainer.removeChild(errorContainer.lastChild);
	}
}
function buttonEnabled(): boolean {
	if (errors.length === 0) {
		return true;
	}
	return false;
}
