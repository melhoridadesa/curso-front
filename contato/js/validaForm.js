function validacao() {
	if(document.contato.nome.value=="") {
		alert("Preencher campos em destaque");
		document.contato.nome.focus();
		return false;

	}

}