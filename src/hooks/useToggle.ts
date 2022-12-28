// lib
import { useState, useCallback } from "react";

const useToggle = (initialState: Boolean = false) => {
  // state
  const [componentState, setComponentState]: [Boolean, any] =
    useState<Boolean>(initialState);
  // toggle
  const Toggle = useCallback(() => {
    setComponentState(!componentState);
  }, [componentState]);
  // export
  return [componentState, Toggle];
};

export default useToggle;
