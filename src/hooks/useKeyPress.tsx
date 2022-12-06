import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { togglePopupActionCreator } from "src/redux/features/popupSlice";

export const useKeyPress = (keys: any, callback: any, node = null) => {
  const dispatch = useDispatch();
  // implement the callback ref pattern
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  // handle what happens on key press
  const handleKeyPress = useCallback(
    (event: { shiftKey: any; key: any }) => {
      // check if one of the key is part of the ones we want
      if (keys.includes(event.key) && event.shiftKey) {
        // call the callback
        callbackRef.current(event);
        if (
          document.activeElement?.tagName !== "INPUT" &&
          document.activeElement?.tagName !== "TEXTAREA"
        ) {
          switch (event.key) {
            case "N":
              if (window.location.pathname === "/") {
                dispatch(togglePopupActionCreator("newSticky"));
              }
              break;
            case "C":
              if (window.location.pathname === "/") {
                // only if the user is not typing in any input

                dispatch(togglePopupActionCreator("newCategory"));
              }
              break;

            default:
              break;
          }
        }
      }
    },
    [dispatch, keys]
  );

  useEffect(() => {
    // target is either the provided node or the document
    const targetNode = node ?? document;
    // attach the event listener
    targetNode && targetNode.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () =>
      targetNode && targetNode.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress, node]);
};
