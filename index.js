function confirmEmail() {
  const email = document.getElementById("email").value;
  const conEmail = document.getElementById("conEmail").value;

  if (email != conEmail) {
    alert('Confirmação de email diferente')
    document.getElementsById("conEmail").innerHTMl.style.border.color = "red";
  }
  else {
    document.getElementsById("conEmail").style.border.color = "lightgray";
  }
}

function confirmPass() {
  const pass = document.getElementById("pass").value;
  const conPass = document.getElementById("conPass").value;

  if (pass != conPass) {
    alert('Password e Confirmação diferentes')
  }
}

function required() {
  const empt = document.getElementsByClassName['required'].value;
  if (empt == "") {
    alert("Complete os campos obrigatorios em vermelho")
    return false;
  }
}

function validaCpf() {
  const regraValida = document.getElementById("cpf").value;
  const cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
  if (cpfValido.test(regraValida) == true) {
    alert("CPF Valido");
  }
  else {
    alert("CPF Inválido");
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
  const padrao = /[^a-zà-ú]/gi;
  const valida_sobrenome = sobrenome.match(padrao);

  if (valida_sobrenome || !sobrenome) {
    alert("Sobrenome contem caracteres invalidos ou é vazio")
  }
  else {
    console.log("Sobrenome OK!")
  }
}

function validaNome() {
  const nome = document.getElementById("nome").value;

  const padrao = /[^a-zà-ú]/gi;

  const valida_nome = nome.match(padrao);


  if (valida_nome || !nome) {
    alert("Nome contem caracteres invalidos ou é vazio")
  }
  else {
    console.log("Nome OK!")
  }

}