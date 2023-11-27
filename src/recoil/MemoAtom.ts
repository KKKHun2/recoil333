import { atom, selector,RecoilValue } from "recoil";

export{}
declare global{
  interface MemoItem{
    memoN:number;
    id?:number;
    title?: string;
    text?: string;
     
}
}

export const MemoAtom = atom<MemoItem[]> ({
    key: "MemoAtom",
    default: [],
  });
  
  export const ClearAtom = atom<MemoItem[]> ({
    key: "ClearAtom",
    default: [],
  });

  export const DeleteAtom = atom<MemoItem[]> ({
    key: "DeleteAtom",
    default: [],
  });