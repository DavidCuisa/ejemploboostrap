const login = document.getElementById("login");
const logout = document.getElementById("logout");
const loginUser = document.getElementById("loginUser");
const textLogin = document.getElementById("textLogin");
const textLogout = document.getElementById("textLogout");

// dar estilos
textLogin.style.visibility = "hidden";
textLogout.style.visibility = "hidden";

// esta funcion se activa con un evento mouseover
const show = () => {
  if (textLogin.style.visibility == "hidden") {
    textLogin.style.visibility = "visible";
  } else {
    textLogin.style.visibility = "hidden";
  }
};

const show2 = () => {
  if (textLogout.style.visibility == "hidden") {
    textLogout.style.visibility = "visible";
  } else {
    textLogout.style.visibility = "hidden";
  }
};

/*Propiedad localStorage me permite acceder al objeto local
Storage  y los datos persisten almacenados -en el navegador- 
(lo guarda de manera local) inicio de sesion que se vea el nombre 
del usuario...datos breves */

const iniciarSeson = () => {
  let usuario = prompt("Ingresa tu nombre");
  //setItem inserte un item o key.. dato , otro valor
  localStorage.setItem("name", usuario);

  loginUser.innerHTML = usuario;
};

if (localStorage.getItem("name")) {
  loginUser.innerHTML = localStorage.getItem("name");
}

const cerrarSesion = () => {
  loginUser.innerHTML = "";
  localStorage.removeItem("name");
};

login.onclick = function () {
  iniciarSeson();
};

logout.onclick = function () {
  cerrarSesion();
};
