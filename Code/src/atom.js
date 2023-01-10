import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: null,
});

export const alertState = atom({
  key: "alertState",
  default: {
    type: null,
    message: null,
  },
});
