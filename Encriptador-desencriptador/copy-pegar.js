function copyToClipBoard() {

  var content = document.getElementById('msg');
  
  content.select();
  document.execCommand('copy');

  alert("Copiado!");
}
var boton3 = document.querySelector("#btncopy"); boton3.onclick = copyToClipBoard;