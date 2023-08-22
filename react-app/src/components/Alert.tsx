import { ReactNode } from "react";

interface Properties {
  //text: string;
  children: ReactNode; // Use ReactNode for HTML input
  onClose: () => void;
}

function Alert({ children, onClose }: Properties) {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
