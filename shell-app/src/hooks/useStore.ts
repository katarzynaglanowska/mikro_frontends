import { useStoreDispatch } from "./useStoreDispatch";
import { decrement, increment } from "../store/features/counter/counterSlice";
import { setName } from "../store/features/user/userSlice";

export default function useStore() {
  const dispatch = useStoreDispatch();
  const incrementCounter = () => {
    dispatch(increment());
  };
  const decrementCounter = () => {
    dispatch(decrement());
  };
  const setUserName = (name: string) => {
    dispatch(setName(name));
  };

  return { incrementCounter, decrementCounter, setUserName };
}
