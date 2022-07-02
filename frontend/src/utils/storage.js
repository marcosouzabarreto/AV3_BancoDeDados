import Cookie from 'js-cookie';

const storage = {};

try {
  if (!window.localStorage) throw Error('No local storage');

  storage.set = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));
  storage.get = (key) => {
    const item = localStorage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  storage.remove = (key) => localStorage.removeItem(key);
} catch (err) {
  storage.set = Cookie.set;
  storage.get = Cookie.get;
  storage.remove = Cookie.remove;
}

export default storage;
