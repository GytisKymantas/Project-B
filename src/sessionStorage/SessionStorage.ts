export const setStorage = (name: string, value: string) => {
  window.sessionStorage.setItem(name, JSON.stringify(value));
};

export const getStorage = (name: string) => {
  const value = window.sessionStorage.getItem(name);
  return value ? JSON.parse(value) : null;
};
