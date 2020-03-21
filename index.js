function confirmEmail() {
  const email = document.getElementById("email").value;
  const conEmail = document.getElementById("conEmail").value;

  if (email != conEmail) {
    console.log('Confirmação de email diferente')
    document.getElementById("conEmail").style.borderColor = "red";
  }
  else {
    document.getElementById("conEmail").style.borderColor = "LightGray";
  }
}

function confirmPass() {
  const pass = document.getElementById("pass").value;
  const conPass = document.getElementById("conPass").value;

  if (pass != conPass) {
    console.log('Password e Confirmação diferentes')
    document.getElementById("conPass").style.borderColor = "red";
  }
  else {
    document.getElementById("conPass").style.borderColor = "LightGray";
  }
}

function required() {
  const empt = document.getElementsByClassName['required'].value;
  if (empt == "") {
    console.log("Complete os campos obrigatorios em vermelho")
    return false;
  }
}

function validaCpf() {
  const regraValida = document.getElementById("cpf").value;
  const cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
  if (cpfValido.test(regraValida) == true) {
    console.log("CPF Valido");
    document.getElementById("cpf").style.borderColor = "LightGray";
  }
  else {
    console.log("CPF Inválido");
    document.getElementById("cpf").style.borderColor = "red";
  }
}

function fMasc(objeto, mascara) {
  obj = objeto
  masc = mascara
  setTimeout("fMascEx()", 1)
}

function fMascEx() {
  obj.value = masc(obj.value)
}

function mCPF(cpf) {
  cpf = cpf.replace(/\D/g, "")
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
  return cpf
}

function validaSobrenome() {
  const sobrenome = document.getElementById("snome").value;
  const padrao = /[^a-z  à-ú]/gi;
  const valida_sobrenome = sobrenome.match(padrao);

  if (valida_sobrenome || !sobrenome) {
    console.log("Sobrenome contem caracteres invalidos ou é vazio")
    document.getElementById("snome").style.borderColor = "red";
  }
  else {
    console.log("Sobrenome OK!")
    document.getElementById("snome").style.borderColor = "LightGray";
    const snome = sobrenome.trim();
    console.log(snome)
  }
}

function mascara(o, f) {
  v_obj = o
  v_fun = f
  setTimeout("execmascara()", 1)
}

function execmascara() {
  v_obj.value = v_fun(v_obj.value)
}

function mascTel(v) {
  v = v.replace(/\D/g, "");
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
  v = v.replace(/(\d)(\d{4})$/, "$1-$2");
  return v;
}

function validaNome() {
  const nomeValido = document.getElementById("nome").value;

  const padrao = /[^a-z à-ú]/gi;

  const valida_nome = nomeValido.match(padrao);


  if (valida_nome || !nomeValido) {
    alert("Nome contem caracteres invalidos ou é vazio")
    document.getElementById("nome").style.borderColor = "red";
  }
  else {
    console.log("Nome OK!")
    document.getElementById("nome").style.borderColor = "LightGray";
    const nome = nomeValido.trim();
    console.log(nome)
  }

}

function buscaCep() {
  if (this.cep.length == 8) {
    axios.get('viacep.com.br/ws/${ this.cep }/json/')
      .then(function troca(conteudo) {
        if (!("erro" in conteudo)) {
          document.getElementById('rua').value = (conteudo.logradouro);
          document.getElementById('bai').value = (conteudo.bairro);
          document.getElementById('city').value = (conteudo.localidade);
          document.getElementById('est').value = (conteudo.uf);
        }
        else {
          alert("CEP não encontrado.");
        }
      })
      .catch( error => alert("Erro encontrado."))
  }
}

/*function limpa(){
  document.getElementById().value = ("");
}*/

