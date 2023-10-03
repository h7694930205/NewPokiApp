export const setItem = (key: string, value: any) => {
  try {
    localStorage.setItem(key, value);
    return { error: false };
  } catch (error) {
    return { error: true };
  }
};

export const getItem = (key: string) => {
  try {
    const value = localStorage.getItem(key);
    return { data: value, error: !value ? true : false };
  } catch (error) {
    return { data: null, error: true };
  }
};

export const removeItem = (key: string) => {
  try {
    localStorage.removeItem(key);
    return { error: false };
  } catch (error) {
    return { error: true };
  }
};

export const removeAll = () => {
  try {
    localStorage.clear();
    return { error: false };
  } catch (error) {
    return { error: true };
  }
};
