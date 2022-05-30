/**
 * 
 * Custom hook to set and retrieve values stored in local storage
 * @returns [readValue, setValue, clear]
 */

export const useLocalStorage: any = () => {

  const setValue = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const readValue = (key: string) => {
    return localStorage.getItem(key);
  };

  const clear = () => {
    localStorage.clear();
  };

  return [readValue, setValue, clear];
};
