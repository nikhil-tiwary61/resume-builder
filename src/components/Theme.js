import { useState } from "react";

export default function Theme() {
  const [theme, setTheme] = useState("Dark");
  function handleClick() {
    if (theme === "Light") {
      setTheme("Dark");
      document.body.classList.remove("dark-mode");
    } else {
      setTheme("Light");
      document.body.classList.add("dark-mode");
    }
  }
  return <button onClick={handleClick}>{theme}</button>;
}
