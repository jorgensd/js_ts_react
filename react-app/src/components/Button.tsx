import { ReactNode } from "react";

interface Properties {
  children: ReactNode;
  onClick: () => void;
  color?: "primary" | "secondary"; // Optional parameter ?
}

function Button({ children, onClick, color = "primary" }: Properties) {
  return (
    <button className={"btn btn-" + color} onClick={onClick} role="button">
      {children}
    </button>
  );
}

export default Button;
