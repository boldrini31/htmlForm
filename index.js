function confirmEmail() {
  const email = document.getElementById("email").value;
  const conEmail = document.getElementById("conEmail").value;

  if (email != conEmail) {
    console.log('Confirmação de email diferente')
    const barra = document.getElementsById("conEmail").innerHTMl.style.border.color = "red";
  }
  else {
    const barra = document.getElementsById("conEmail").style.border.color = "lightgray";
  }
}

function confirmPass() {
  const pass = document.getElementById("pass").value;
  const conPass = document.getElementById("conPass").value;

  if (pass != conPass) {
    console.log('Password e Confirmação diferentes')
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
  }
  else {
    console.log("CPF Inválido");
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
  }
  else {
    console.log("Sobrenome OK!")
    const snome = sobrenome.trim();
    console.log(snome)
  }
}

function validaNome() {
  const nomeValido = document.getElementById("nome").value;

  const padrao = /[^a-z à-ú]/gi;

  const valida_nome = nomeValido.match(padrao);


  if (valida_nome || !nomeValido) {
    alert("Nome contem caracteres invalidos ou é vazio")
  }
  else {
    console.log("Nome OK!")
    const nome = nomeValido.trim();
    console.log(nome)
  }

}