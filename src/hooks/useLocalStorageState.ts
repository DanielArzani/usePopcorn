import { Dispatch, SetStateAction, useState, useEffect } from 'react';

/**
 * A hook for adding state to localStorage and loading up that state on mount. It can be used to replace a regular useState hook with added functionality of localStorage syncing
 * @param initialState - The initial state value. This will be used if no value is found in localStorage for the given key.
 * @param key - The key under which the state will be stored in localStorage.
 * @returns A tuple containing the current state value and a function to update it.
 * @example const [name, setName] = useLocalStorageState<string>('John Doe', 'username'); // Now, the 'name' variable will be initialized with the value from localStorage if it exists, or 'John Doe' if not. Any updates to 'name' will also be saved to localStorage under the key 'username'.
 */
export default function useLocalStorageState<T>(
  initialState: T,
  key: string
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : initialState;
  });

  // Save value to local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
