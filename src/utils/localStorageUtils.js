const LocalStorageUtils = {
  /**
   * Lê do localStorage. Se object=true, faz JSON.parse
   * @param {string} keyName
   * @param {boolean} [object=false]
   * @returns {string|null|any}
   */
  getItem: (keyName, object = false) => {
    const value = localStorage.getItem(keyName);
    if (!value || value === 'undefined') return null;
    return object ? JSON.parse(value) : value;
  },

  /**
   * Persiste no localStorage. Serializa objetos.
   * @param {string} keyName
   * @param {any} value
   */
  setItem: (keyName, value) => {
    const toStore = typeof value === 'object' ? JSON.stringify(value) : value;
    localStorage.setItem(keyName, toStore);
  },
};

export default LocalStorageUtils;
