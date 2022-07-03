export function getId () {
  return Math.random().toString(32)
}

export function isEmpty (obj) {
  return Object.keys(obj).length === 0
}

export function getParamFromUrl (url, param) {
  try {
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.hash.split("?")[1]);
    return params.get(param);
  } catch (err) {
    // Ignore
  }
}