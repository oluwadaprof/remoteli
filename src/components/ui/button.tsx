import React from 'react';

type ButtonProps = {
    variant?: 'black' | 'white' | 'outline'  | 'danger';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string; 
};

const Button: React.FC<ButtonProps> = ({ variant = 'black', children, onClick, className = '' }) => {
    let baseClassName = 'px-4 py-2 rounded focus:outline-none';

    switch (variant) {
        case 'black':
            baseClassName += ' bg-black text-white hover:bg-gray-800';
            break;
        case 'white':
            baseClassName += ' bg-white text-black hover:bg-gray-200';
            break;
        case 'outline':
            baseClassName += ' border border-black text-black hover:bg-gray-100'; 
            break;
        case 'danger':
            baseClassName += ' border border-red-500 text-white hover:bg-white hover:text-red-700'; 
            break;
        default:
            break;
    }

    return (
        <button className={`${baseClassName} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;