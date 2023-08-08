import { useEffect } from 'react';

/**
 * Will run a function or method when a key is pressed
 * @param key The key code for the keyboard event (e.g e.code === "Escape")
 * @param action A callback function that will say what to do on the keydown press
 */
export default function useKey(key: string, action: () => void) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === key) {
        action();
      } else {
        console.log(
          'You have incorrectly entered the wrong key code. For a full list of viable jey codes, please refer to: https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values'
        );
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
}
