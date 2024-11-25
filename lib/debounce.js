import { debounce } from "lodash";
import { useCallback } from "react";

function useDebouncedInputHandler(callback, delay = 1200) {
  const debouncedCallback = useCallback(
    () => debounce(callback, delay),
    [callback, delay]
  );

  const handleChange = (event) => {
    debouncedCallback(event.target.value);
  };

  return handleChange;
}

export default useDebouncedInputHandler;
