export function getId () {
  return Math.random().toString(32)
}

export function isEmpty (obj) {
  return Object.keys(obj).length === 0
}