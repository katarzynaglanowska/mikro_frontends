declare module "testMF/App" {
  const App: React.ComponentType;

  export default App;
}

declare module "UILibrary/Button" {
  interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
    children?: React.ReactNode; 
  };

  const Button: React.FunctionComponent<ButtonProps>;

  export default Button;
}

declare module "UILibrary/Input" {
  interface InputProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    label: string;
    value: string
  }

  const Input: React.FunctionComponent<InputProps>;

  export default Input;
}