import { create } from "zustand";

const useText = create((set) => ({
  isExpand: false,

  //   function toggle untuk button
  toggleText: () => (state) => ({ isExpand: !state }),
}));

export default useText;
