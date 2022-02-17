const password: Element = document.querySelector("[name='password'");
const button: HTMLButtonElement = document.querySelector("button");
const errorContainer: Element = document.querySelector(".errors");

let errors: string[] = [];

function validate(): void {
  const value: string = this.value;

  errors = [];

  clearContainer();

  if (value.trim().length < 5) {
    errors.push("Too few characters");
  }
  if (value.includes(" ")) {
    errors.push("No spaces allowed");
  }

  errors.forEach(function (error) {
    const errorDiv: HTMLDivElement = document.createElement("div");
    const errorContent: Text = document.createTextNode(error);
    errorDiv.appendChild(errorContent);
    errorDiv.classList.add("error");
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

//

enum MessageType {
  Error = "ERROR",
  Warning = "WARNING",
}

interface Foo {
  severity: MessageType;
  content?: string;
}

interface Bar {
  level: number;
  messageBlock: Foo;
}

function generateMessage(message: Foo) {
  switch (message.severity) {
    case MessageType.Error:
      return `This is SERIOUS: ${message.content}`;
    case MessageType.Warning:
      return `This is KIND OF SERIOUS: ${message.content}`;
    default:
      return "We're not sure what's going on.";
  }
}
interface NavItem {
  title: string;
  href: string;
  order: number;
}

interface NavMenu {
  list: NavItem[];
  code: string;
}

const navMenu: NavMenu = {
  list: [
    {
      title: "home",
      href: "http://google.com",
      order: 1,
    },
  ],
  code: "isAuth",
};

enum Color {
  Red = "#bbb",
  Blue = "#222",
  Grey = "#fff",
}

Color.Blue;
