declare module "testMF/App" {
  const App: React.ComponentType;

  export default App;
}

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

declare module "shell/types/storeState" {
  export interface CounterState {
    value: number;
  }
  export interface UserState {
    name: string;
  }
}

declare module "shell/hooks/useStore" {
  function useStore(): {
    incrementCounter: () => void;
    decrementCounter: () => void;
    setUserName: () => void;
  };

  export default useStore;
}

declare module "shell/hooks/useStoreSelector" {
  import type { CounterState, UserState } from "container/types/storeState";
  export type RootState = {
    counter: CounterState;
    user: UserState;
  };

  export interface TypedUseSelectorHook<TState> {
    <TSelected>(selector: (state: TState) => TSelected): TSelected;
    <Selected = unknown>(selector: (state: TState) => Selected): Selected;
  }

  export const useStoreSelector: TypedUseSelectorHook<RootState>;
}

declare module "shell/providers/StoreProvider" {
  import React from "react";

  type Props = {
    children: React.ReactNode;
  };
  export default function StoreProvider({ children }: Props): JSX.Element;
}
