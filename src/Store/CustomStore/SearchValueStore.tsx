import { useState } from "react";
import { initStore } from "./Store";

export enum SearchActionKind {
  SetSearchValue = "setSearchValue",
}

export interface SearchValue {
  value: string;
}

const configureStore = () => {
  const actions = {
    setSearchValue: (globalState: any, payload: any) => {
      globalState.searchValue = payload;
      return globalState;
    },
  };

  initStore(actions, {
    searchValue: "",
  });
};

export default configureStore;

// interface SearchAction {
//   type: SearchActionKind;
//   payload: string;
// }

// export const SearchValueReducer = (
//   state: SearchValue,
//   action: SearchAction
// ) => {
//   const { type, payload } = action;

//   switch (type) {
//     case SearchActionKind.SetSearchValue:
//       return (state = {
//         value: payload,
//       });
//     default:
//       return state;
//   }
// };
