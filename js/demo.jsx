import { useEffect, useRef } from "react";

function CustomComp() {
  return <span>hello</span>;
}

const Form = () => {
  const buttonEl = useRef < HTMLButtonElement > null;
  const inputEl = useRef(null);

  const [inputValue, useInputeValue] = useState("");

  const [isDisabled, setIsDisabled] = useState(false);

  button.disabled = true;

  // This is the reverse way to do one way data-binding
  useEffect(() => {}, [inputValue.current.target.value]);

  return (
    <div>
      <CustomComp />
      <input ref={inputEl} />
      <button ref={buttonEl} disabled={isDisabled}>
        clickme
      </button>
    </div>
  );
};
