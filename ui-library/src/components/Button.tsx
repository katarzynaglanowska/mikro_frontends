import React from "react"

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
  children?: React.ReactNode; 
};

const Button = ({children, onClick}: ButtonProps) => {

  return <button onClick={onClick}>{children}</button>
}

export default Button
