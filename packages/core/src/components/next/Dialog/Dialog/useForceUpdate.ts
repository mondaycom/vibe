import { useReducer } from "react";

// the second argument of useReducer is the dispatch function
// after calling dispatch we will set a new object in the state
// if the state will change by reference it will force rerender of the component

const reducerAlwaysReturningNewObj = () => ({});

export default function useForceUpdate() {
  return useReducer(reducerAlwaysReturningNewObj, {})[1];
}
