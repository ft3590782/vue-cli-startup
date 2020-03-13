const storageKey = "myStorageKey";

export default {
  get(keyName) {
    let result =
      window.localStorage.getItem(`${storageKey}__${keyName}`) || null;
    if (result) {
      return JSON.parse(result);
    } else {
      return null;
    }
  },
  set(keyName, data) {
    window.localStorage.setItem(
      `${storageKey}__${keyName}`,
      JSON.stringify(data)
    );
  }
};
