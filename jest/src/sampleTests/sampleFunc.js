export function increment (i) {
  if (typeof i !== 'number') throw new TypeError()
  return i + 1
}

export function findById (arr, id) {
  return arr.find(d => d._id === id)
}
