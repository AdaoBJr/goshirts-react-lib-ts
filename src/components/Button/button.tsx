import { ButtonHTMLAttributes } from 'react';

import defaultClasses from './button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  label?: string;
}

const button: React.FC<ButtonProps> = props => {
  const { id, type, label, children, ...restProps } = props;

  return (
    <div>
      <label htmlFor={id || label}>{label}</label>
      <button id={id || label} {...restProps}>
        {children}
      </button>
    </div>
  );
};

export default button;
