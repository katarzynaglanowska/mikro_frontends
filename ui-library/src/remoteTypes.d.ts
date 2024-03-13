declare module "UILibrary/Button" {
  interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
  }

  const Button: React.FunctionComponent<ButtonProps>;
  export default Button;
}

declare module "UILibrary/Input" {
  interface InputProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    label: string;
  }

  const Input: React.FunctionComponent<InputProps>;

  export default Input;
}
