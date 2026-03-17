import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: string;
  onClose: () => void;
}

export const Alert = ({ children, onClose, color }: Props) => {
  return (
    <div>
      <button
        type="button"
        className="btn-close p-3"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
      <div className={"alert alert-dismissible alert-" + color}>{children}</div>
    </div>
  );
};

export default Alert;
