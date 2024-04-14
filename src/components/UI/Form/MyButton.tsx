import React, { FC, ReactNode } from 'react';

interface MyButtonProps {
  children?: string | number;
  icon?: ReactNode;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  rotate?: boolean;
}

const MyButton: FC<MyButtonProps> = ({ children, icon, onClick, active = false, disabled = false, rotate=false }) => {



  return (
    <button
      className={`inline-flex items-center justify-center transition-colors rounded-lg p-2
      ${
        active 
          ? "bg-red-500 text-sky-400yy" 
          : "text-slate-400"
      }
      ${
        !disabled
          ? "bg-white hover:bg-sky-100"
          : "text-red-300 bg-white cursor-not-allowed"
      }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <div className={`inline-block transform ${rotate && 'rotate-180'}`}>{icon}</div> }
      {children && <span className={`ml-2 ${icon ? 'hidden lg:block' : ''}`}>{children}</span>}
      
    </button>
  );
};

export default MyButton;
