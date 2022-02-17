// const password: Element = document.querySelector("[name='password'");
// const button: HTMLButtonElement = document.querySelector("button");
// const errorContainer: Element = document.querySelector(".errors");
// // let errors: string[] = [];
// let errors: Array<string> = [];
// function validate() {
// 	const value = this.value;
// 	errors = [];
// 	clearContainer();
// 	if (value.trim().length < 5) {
// 		errors.push("Too few characters");
// 	}
// 	if (value.includes(" ")) {
// 		errors.push("No spaces allowed");
// 	}
// 	errors.forEach(function (error) {
// 		const errorDiv = document.createElement("div");
// 		const errorContent: Text = document.createTextNode(error);
// 		errorDiv.appendChild(errorContent);
// 		errorDiv.classList.add("error");
// 		errorContainer.appendChild(errorDiv);
// 	});
// 	button.disabled = !buttonEnabled();
// }
// password.addEventListener("keyup", validate);
// function clearContainer(): void {
// 	while (errorContainer.hasChildNodes()) {
// 		errorContainer.removeChild(errorContainer.lastChild);
// 	}
// }
// function buttonEnabled(): boolean {
// 	if (errors.length === 0) {
// 		return true;
// 	}
// 	return false;
// }
