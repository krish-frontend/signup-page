

let app=document.getElementById("app");

let title= document.createElement("h2")
title.placeholder="Signup";

let username= document.createElement("input")
username.placeholder= "Enter Username";

let email= document.createElement("input")
email.placeholder="Enter E-mail";

let password= document.createElement("input")
password.placeholder="Enter Password: ";
password.type="Password"

let btn= document.createElement("button")
btn.innerText="Signup ->"

let mssg= document.createElement("p")

btn.addEventListener('click', function() {
    let username = usernameInput.value;
    let password = passwordInput.value;

    result.innerText = 'Username: ' + Krish + '| E-mail:'+ krish123 +' | Password: ' + password;
});

    




app.appendChild(title);
app.appendChild(username);
app.appendChild(document.createElement("br"));
app.appendChild(email);
app.appendChild(document.createElement("br"));
app.appendChild(password);
app.appendChild(btn);
app.appendChild(mssg);


//applying css

document.body.style.display="flex";
document.body.style.justifyContent="center";
document.body.style.alignItems="center";
document.body.style.height="100vh";
document.body.style.backgroundColor="lightblue"

let cont=document.getElementById("cont")
cont.style.width= "20vw"
cont.style.height="50%"
// cont.style.alignContent="center"
cont.style.display="flex"
cont.style.flexDirection="column"
cont.style.backgroundColor="red"
cont.style.flexDirection="center"
