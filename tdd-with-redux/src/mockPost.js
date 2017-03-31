export function post (url, data, callback) {
  localStorage.setItem(url, JSON.stringify(data))
  setTimeout(() => callback(data), 500)
}

export function get (url, callback) {
  const data = localStorage.getItem(url)
  callback(data)
}
