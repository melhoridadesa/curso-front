$(document).ready(function(){

  // ------------------------ validacoes ------------------------  
  $('.inputs').focusout(function(){
    if($(this).val() == ''){      
      alert($(this).attr('placeholder') + " nao pode ficar em branco");
      $(this).css('border-color', 'red');
      $(this).focus();
    }  
    else{
      if($(this).attr('placeholder') == 'CPF'){
        var cpf = $(this).val();
        cpf = validaCPF(cpf);
        if(!cpf){
          alert('CPF invalido');
          $('#cpf').css('border-color', 'red');
          $('#cpf').focus();
        } 
      }
      $(this).css('border-color', 'initial');      
    }
  });
  // ------------------------ validacoes ------------------------  

  //  ------------------------ mascaras e tratativas  ------------------------
  $('#telefone').mask('(99)99999-9999');
  $('#telefone').bind('keydown',soNums); 
  $('#cpf').mask('999.999.999-99');  
  $('#cpf').bind('keydown',soNums); 
  //  ------------------------ mascaras e tratativas  ------------------------


});

  //  ------------------------ Funcoes  ------------------------

  // validando cpf
  function validaCPF(cpf) {  
      cpf = cpf.replace(/[^\d]+/g,'');    
      if(cpf == '') return false; 
      // Elimina CPFs invalidos conhecidos    
      if (cpf.length != 11 || 
          cpf == "00000000000" || 
          cpf == "11111111111" || 
          cpf == "22222222222" || 
          cpf == "33333333333" || 
          cpf == "44444444444" || 
          cpf == "55555555555" || 
          cpf == "66666666666" || 
          cpf == "77777777777" || 
          cpf == "88888888888" || 
          cpf == "99999999999")
              return false;       
      // Valida 1o digito 
      add = 0;    
      for (i=0; i < 9; i ++)       
          add += parseInt(cpf.charAt(i)) * (10 - i);  
          rev = 11 - (add % 11);  
          if (rev == 10 || rev == 11)     
              rev = 0;    
          if (rev != parseInt(cpf.charAt(9)))     
              return false;       
      // Valida 2o digito 
      add = 0;    
      for (i = 0; i < 10; i ++)        
          add += parseInt(cpf.charAt(i)) * (11 - i);  
      rev = 11 - (add % 11);  
      if (rev == 10 || rev == 11) 
          rev = 0;    
      if (rev != parseInt(cpf.charAt(10)))
          return false;       
      return true;   
  }
   
  function soNums(e){
   
      //teclas adicionais permitidas (tab,delete,backspace,setas direita e esquerda)
      keyCodesPermitidos = new Array(8,9,37,39,46);
       
      //numeros e 0 a 9 do teclado alfanumerico
      for(x=48;x<=57;x++){
          keyCodesPermitidos.push(x);
      }
       
      //numeros e 0 a 9 do teclado numerico
      for(x=96;x<=105;x++){
          keyCodesPermitidos.push(x);
      }
       
      //Pega a tecla digitada
      keyCode = e.which; 
       
      //Verifica se a tecla digitada é permitida
      if ($.inArray(keyCode,keyCodesPermitidos) != -1){
          return true;
      }    
      return false;
  }

  //  ------------------------ Funcoes  ------------------------
