import { selector } from "recoil";
import { userState } from "../atoms/userState";

export const userNameLengthSelector = selector<number>({
  key: 'userNameLengthSelector', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(userState);

    return text.length;
  },
});