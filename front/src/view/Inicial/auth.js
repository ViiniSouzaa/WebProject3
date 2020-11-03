export function auth() {
    console.log(localStorage.token);
    return localStorage.token;
}

export function admin(){
    if(localStorage.admin == 'true')
      return true;
    else
      return false;
}

export function authCadastro() {
  console.log(localStorage.tokenCadastro);
  return localStorage.tokenCadastro;
}

export function setUser(token) {
  localStorage.setItem("token", token);
}

export function setAdmin(admin){
  localStorage.setItem('admin', admin);
}

export function setUserCadastro(token) {
  localStorage.setItem("tokenCadastro", token);
}

export function logout() {
  localStorage.removeItem("token");
  window.location.reload();
}
  