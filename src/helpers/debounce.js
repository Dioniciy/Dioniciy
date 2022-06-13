export const debounce = (callback) => {
  let timeout;
  return function (argument) {
    clearTimeout(timeout);
    timeout = setTimeout(callback, 100, argument);
  };
};
