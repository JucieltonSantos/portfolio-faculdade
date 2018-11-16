function enviarEmail(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var Empresa = document.getElementById("Empresa").value;
    var texto1 = document.getElementById("texto1").value;
  
    var no = nome.toString();
    var em = email.toString();
    var ph = phone.toString();
    var emp = Empresa.toString();
    var text = texto1.toString();
  
    Email.send(em,
    "eltonsumare2@gmail.com",
    no,
    'Mensagem: ' + text + 'Celular: ' + ph,
    {token: "57915cd7-48c5-4c6c-a069-c7e0392c15c1"});
    alert("E-mail Enviado com Sucesso!!!")
    location.reload();
  }