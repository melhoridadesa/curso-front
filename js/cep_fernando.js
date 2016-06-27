function buscarCEP (){
	document.getElementById('loading-layer').style.display = 'block';
	var cep = new XMLHttpRequest();
	cep.open('GET', 'http://apps.widenet.com.br/busca-cep/api/cep/05329-040.json', true)
	cep.send();

	var response = null;

	cep.onreadystatechange = function() {
		document.getElementById('loading-layer').style.display = 'none';
		if (cep.readyState == 4 && cep.status == 200) {
			response = JSON.parse(cep.responseText);
			document.getElementById('endereco').value = response.address;
		}
	}
}




for (i=0; i<=lista_input.length; i++){
console.log(lista_input[i], i)
}