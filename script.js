
document.getElementById("p1").innerHTML = "TASNIM";

document.getElementById("img").src = "download.png";

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}


const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    password.type = password.type === "password";
            this.classList.toggle("bi-eye") });
        