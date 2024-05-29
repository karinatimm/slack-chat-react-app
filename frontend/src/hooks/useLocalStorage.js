const localStorageActions = {
  setItem: (key, value) => localStorage.setItem(key, value),
  getItem: (key) => localStorage.getItem(key),
  clearAll: () => localStorage.clear(),
};

const useLocalStorage = (action) => localStorageActions[action];

export default useLocalStorage;
