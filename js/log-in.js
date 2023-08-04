const form = document.getElementById("Form2");
const btn = document.getElementById("BtnLogin");
const user = document.getElementById("User");
const pass = document.getElementById("Password");

const BtnHandleLogin = (e) => {
	e.preventDefault();
	const isLoggedIn = logIn();
	if (isLoggedIn) {
		cambioColorBtn();
		msgText();
		setTimeout(() => {
			window.location.href = "/tienda.html";
		}, 200);
	}
};

form.addEventListener("submit", BtnHandleLogin);

function obtenerInfo() {
	const inputs = form.querySelectorAll("input");
	for (const input of inputs) {
		console.log(input.name + ": " + input.value);
	}
}

function borrarDatos() {
	user.value = "";
	pass.value = "";
}


function logIn() {
	const userValue = user.value;
	const passValue = pass.value;
	const userExpected = "Javier123";
	const passExpected = "1234";

	if (userValue === userExpected && passValue === passExpected) {
		alert("Login satisfactorio");
		return true;
	} else {
		alert("Usuario o contraseña incorrectos");
		return false;
	}
}

function msgText() {
	setTimeout(() => {
		alert("Login Satisfactorio, Bienvenido a la tienda");
	}, 200);
}

const cambioColorBtn = () => {
	btn.classList.replace("btn-primary", "btn-success");
	btn.style.transition = ".2s all";
};