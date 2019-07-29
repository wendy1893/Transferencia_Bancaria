var montoATransferir = document.getElementById("monto");
var transferir = document.getElementById("transferir");
var menu=document.getElementById("menu");

transferir.addEventListener("click", transferencia);
var hora = new Date();
document.write("La Hora es: " + hora.getHours() + ":" + hora.getMinutes());
horaReal = hora.getHours();

var bancoCliente="lisboa";
var cuentaCliente="corriente";
var saldoCliente=2000000;
var clienteVerificado=true;
var cuentaDestino="corriente"
var destinoVerificado=true;
var costoTransaccionOtroBanco = 100;
var costoTransaccionMismoBanco = 0;

function transferencia ()
{
  montoATransferir = parseInt(montoATransferir.value);
  var bancoDestino=menu.value;

  if(montoATransferir+costoTransaccionMismoBanco <= saldoCliente && clienteVerificado==true && destinoVerificado== true && bancoCliente == bancoDestino && (horaReal>=9 && horaReal<=12 || horaReal>=15 && hora<=20))
  {
    saldoCliente = saldoCliente - montoATransferir - costoTransaccionMismoBanco;
    resultado.innerHTML = "Transferencia realizada satisfactoriamente. <br/>Su saldo es de: " + saldoCliente;
  }
    else if (montoATransferir+costoTransaccionOtroBanco <= saldoCliente && clienteVerificado==true && destinoVerificado== true && bancoCliente != bancoDestino && (horaReal>=9 && horaReal<=12 || horaReal>=15 && hora<=20))
    {
      saldoCliente = saldoCliente - montoATransferir - costoTransaccionOtroBanco;
      resultado.innerHTML = "Transferencia realizada satisfactoriamente. <br /> Costo de la transaccion: " + costoTransaccionOtroBanco + " USD <br />Su saldo actual es de: " + saldoCliente + " USD";
    }

    else if (montoATransferir+costoTransaccionOtroBanco > saldoCliente || montoATransferir+costoTransaccionMismoBanco > saldoCliente)
    {
      resultado.innerHTML = "Error. <br />Su saldo es insuficiente para realizar esta operación. <br/> Su saldo es: "+saldoCliente;
    }
    else
    {
      resultado.innerHTML = "Error. <br />No esta permitido realizar transferencias en este horario. <br /> Horario de transferencias 9 a 12 ó de 15 a 20."
    }
}
