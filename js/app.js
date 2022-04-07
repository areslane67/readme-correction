document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let btn, warning, email, password;
    let exprmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let exprmdp = /^[a-zA-Z0-9._-]{2,15}$/;

    warning = document.querySelector(".menu p");
    email = document.getElementsByTagName("input")[1].value;
    password = document.getElementsByTagName("input")[2].value;
    btn = document.getElementsByTagName("input")[3];

    btn.addEventListener("click", e => {
        e.preventDefault();
        Connexion();
    });
    let Connexion = () => {

        email = document.getElementsByTagName("input")[1].value;
        password = document.getElementsByTagName("input")[2].value;

        if (email.match(exprmail) && password.match(exprmdp)) {
            warning.classList.add("success");
            warning.classList.remove("error");
            warning.innerText = "Connexion réussie";
            localStorage.setItem("user", email);
            sessionStorage.setItem("user", "sessionid");
        } else if (password.match(exprmdp)) {
            warning.classList.add("error");
            warning.innerText = "Mail invalide";
            warning.classList.remove("success");
        } else if (email.match(exprmail)) {
            warning.classList.add("error");
            warning.innerText = "Mot de passe invalide";
            warning.classList.remove("success");
        } else {
            warning.classList.add("error");
            warning.innerText = "Mail ou mot de passe incorrecte";
            warning.classList.remove("success");
        }
    };
});