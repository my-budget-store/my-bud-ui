import { useState, useEffect } from "react";

let globalState: any = {};
let listeners: any[] = [];
let actions: any = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const useDispatch = (actionType: any, payload: any) => {
    globalState = actions[actionType](globalState, payload);

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, useDispatch];
};

export const initStore = (userActions: any, initialState: any) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
