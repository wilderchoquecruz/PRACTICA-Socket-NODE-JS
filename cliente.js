var dgram = require('dgram');
var client = dgram.createSocket("udp4");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('--------------------------------- ');
  console.log('> Bienvenido al sistema LAB 273 ');
  console.log('> Ingrese usuario y contraseña (user/pass)');  
client.on('message', function (msg){
    console.log(msg.toString());
    console.log('> Ingrese usuario y contraseña (user/pass)');  
    // client.close();
});

rl.on('line', function (mensaje) {

    // console.log('Enviamos'+mensaje);
    if(mensaje == 'salir'){
        client.close();
        rl.close();
    }else{
        client.send(mensaje,0,mensaje.length,7000,'localhost', function (err, bytes){});
    }
    // rl.close();
});


client.on('close', function (){
    console.log('desconectado del servidor');
});