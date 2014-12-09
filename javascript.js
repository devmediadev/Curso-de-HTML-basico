/* função que valida o formulário de login */

function validaLogin(){
	// pegar os valores digitados no campo de usuário e senha
	
	var usuario = document.getElementById("inputUsuario").value;
	var senha = document.getElementById("inputSenha").value;
	
	// verificar se ambos os campos foram preenchidos
	// se foram preenchidos, deixa enviar o formulário
	// senão, avisa que tem erro e não envia o formulário
	
	if(usuario == "" || senha == "") {
		alert("Preencha ambos os campos");
		return false;
	} else {
		alert("Preencheu os campos de forma correta");
		return true;
	}
	
	// Estudar: JQUERY
	
}