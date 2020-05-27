const storageKey = 'storageKey2020'

export default {
  get (keyName, storageType = 'localStorage') {
    let result =
      window[storageType].getItem(`${storageKey}__${keyName}`) || null
    if (result) {
      return JSON.parse(result)
    } else {
      return null
    }
  },
  set (keyName, data, storageType = 'localStorage') {
    window[storageType].setItem(
      `${storageKey}__${keyName}`,
      JSON.stringify(data)
    )
  }
}
