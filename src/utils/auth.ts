const TokenKey = 'token'

export function getToken() {
  //return Cookies.get(TokenKey)
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token:string) {
  //return Cookies.set(TokenKey, token)
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  //return Cookies.remove(TokenKey)
  return sessionStorage.removeItem(TokenKey)
}