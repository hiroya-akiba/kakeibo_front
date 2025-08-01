import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;