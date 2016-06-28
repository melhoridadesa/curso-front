
$(document).ready(function(){
	//Mascaras
	$("#cep").mask("99999-999");
	$("#telefone").mask("(999) 9999-99999");
	$('#cpf').mask("999.999.999-99");

	//Buscar o CEP
	$('#verificar_cep').click(function(){
		var cep_para_busca = $('#cep').val();
		$.ajax({
			type :'GET',
			url: "http://apps.widenet.com.br/busca-cep/api/cep/"+cep_para_busca+".json",
			beforeSend: function() {
				$('#loading').show();
				//console.log('mandou');
		    },
			success: function(data) {
				$('#rua').val(data.address);
				$('#cep').val(data.code);
				$('#bairro').val(data.district);
				$('#cidade').val(data.city);
				$('#estado').val(data.state);
				$('.desabilitar').prop("disabled", true);
			},complete: function() {
		        $('#loading').hide();
		    }
		});
		return false;
	});
	
	$('form').submit(function(){
		$('input').removeClass('erro_class');
		//Validacao CPF
		var validar_cpf = /^([0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}|[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/
		cpf_valor = $('#cpf');
		if (validar_cpf.test(cpf_valor.val()) == true) {
			console.log('CPF Válido');
		}else{
			console.log("CPF Inválido");
			cpf_valor.addClass('erro_class');
		}
		var validar_cep = /^\d{5}-\d{3}/;
		cep_valor = $('#cep');
		if (validar_cep.test(cep_valor.val()) == true) {
			console.log('CEP Válido');
		}else{
			console.log("CEP Inválido");
			cep_valor.addClass('erro_class');
		}
		var validar_email = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/; 
		email_valor = $('#email');
		if (validar_email.test(email_valor.val()) == true) {
			console.log('E-mail Válido');
		}else{
			console.log("E-mail Inválido");
			email_valor.addClass('erro_class');
		}
		//Validacao nome
		nome_valor = $('#nome').val();
		if(nome_valor == "" || nome_valor.length < 3){
			$('#nome').addClass('erro_class');
			console.log($('#nome').length);
		}	else{
			console.log('nome correto');
		}	
		//Validacao sobrenome
		sobrenome_valor = $('#sobrenome').val();
		if(sobrenome_valor == "" || sobrenome_valor.length < 3){
			$('#sobrenome').addClass('erro_class');
			console.log($('#sobrenome').length);
		}	else{
			console.log('nome correto');
		}	
		return false;
	});
	//valida telefone

});