const username = "gmkonan"

export function getPosts() {
  return fetch(`https://dev.to/api/articles?username=${username}`)
}