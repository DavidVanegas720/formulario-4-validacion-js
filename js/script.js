// // const form = document.getElementById("form");

// function validacion() {

//     //  ----delcaracion de variables--
//     var name, lastName, email, password, confirmPassword, male, female, other, legal;

        name = document.getElementById("name");
//      lastName = document.getElementById('lastname');
//      email = document.getElementById('email');
//      password = document.getElementById('password');
//      confirmPassword = doc.getElementById('confirmpassword');
//      male = document.getElementById('male');
//      female = document.getElementById('female');
//      other = document.getElementById('other');
//      legal = document.getElementById('legal');

//      name = document.forms["form"] ["name"].value;
//      if (name ==="") {
//          alert("completa el campo nombre")
//          return false;
//      }
// }

const form= document.getElementById("form");

function validacion (event) {
    if (event.target.getElementById("name") ==="") {
        alert("completa el campo nombre");
        return false
    }
}

form.addEventListener("submit", validacion)