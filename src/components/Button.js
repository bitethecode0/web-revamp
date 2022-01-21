import React from 'react';
import './Button.css';

const STYLES = [
    'btn--primary',
    'btn--outline'
];

const SIZES = [
    'btn--medium',
    'btn--large'
];

export const Button = ({
    children, 
    type,
    onClick,
    style,
    size
}) => {
   const buttonStyle = STYLES.includes(style) ? style: STYLES[0];
   const buttonSize = SIZES.includes(size) ? size : SIZES[0];

   return (
       <button className={`btn ${buttonStyle} ${buttonSize}`} onClick={onClick} type={type}>{children}</button>
   ) 
};