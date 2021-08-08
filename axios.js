// const { default: axios } = require("axios");

const getBtn = document.getElementById("getBtn");
const postBtn = document.getElementById("getBtn");

getBtn.addEventListener("click", getData);

function getData() {
  axios.get("https://reqres.in/api/users").then((response) => {
    return console.log(response);
  });
}
postBtn.onclick = () => {
  axios
    .post("https://reqres.in/api/register", {
      email: "zhaks",
      password: "password2021",
    })
    .then((resp) => {
      return console.log(resp);
    });
};
