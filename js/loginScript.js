let btn = document.querySelector("#btnLogin");
let usuario = document.querySelector("#login");
let senha = document.querySelector("#senha");

btn.addEventListener("click", () =>{
    if ((usuario.value == "aluno") && (senha.value == "senai123")) {
        window.location.href = "restrito.html";
    }
    else {
        alert("Dados incorretos, tente novamente");

    }
})
