function logue (){
    var nome = formuser.nome.value;
    var senha = formuser.senha.value;

    if (nome == ""){
    alert ('Preencha o campo nome.');
    formuser.nome.focus();
    return false 
    }
    
    if(senha == "" || senha.length <= 5){
        alert ('Preencha o campo senha com no minimo 6 caracteres.');
    formuser.senha.focus();
    return false 
  

    }


  }

    function cadastrar() {
    var nome = formuser2.nome.value;
    var senha = formuser2.senha.value;
    var rep_senha = formuser2.rep_senha.value;
    if (nome == "") {
        alert('Preencha o campo nome.');
        formuser2.nome.focus();
        return false;
    }
    if (senha == "" || senha.length <= 5) {
        alert('Preencha o campo senha com no minimo 6 caracteres.');
        formuser2.senha.focus();
        return false;
    }
    if (rep_senha == "" || rep_senha.length <= 5) {
        alert('Preencha novamente a senha.');
        formuser2.rep_senha.focus();
        return false;
    }
    if (senha != rep_senha) {
        alert('Senhas diferentes');
        form1.rep_senha.focus();
        return false;
    
}
}


