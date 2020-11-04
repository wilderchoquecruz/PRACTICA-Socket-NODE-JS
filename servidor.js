var dgram = require('dgram');
var server = dgram.createSocket("udp4");
var cc=false;

server.on("message", function (msg, client) {
    console.log("> Cliente conectado "+msg);
    

    if (msg == 'dcopalupe/123456') {
        msg= 'Dan Israel Copa Lupe';
     const ans = '> Bienvenido '+msg+"!!!!! ";
     

     server.send(ans, 0, ans.length, client.port, client.address, 
     function(){ console.log('');});
     cc=true;
    }
    if (msg == 'jalanocaquino/1q2w3e4') {
       
        msg= 'Jorge Andres Alanoca Quino';
        const ans = '> Bienvenido '+msg+"!!!!! ";
       
        server.send(ans, 0, ans.length, client.port, client.address, 
        function(){ console.log('');});
        cc=true;  
    }

    if (msg == 'acondoriquispe/54321') {
        msg= 'Ana Condori Quispe';
        const ans = '> Bienvenido '+msg+"!!!!! ";
        server.send(ans, 0, ans.length, client.port, client.address, 
        function(){ console.log('');});
        cc=true; 
    }
    if(cc==false){

        var cadena = msg;
        var r=cadena.indexOf("/");
        //console.log(cadena.slice(0,r));
        msg=cadena.slice(0,r);

        
        const ans = '> El usuario ' +msg+ ' es incorrecto o no existe';
        server.send(ans, 0, ans.length, client.port, client.address, 
        function(){ console.log('');});
        cc=true; 
    }


    cc=false;
    
});

server.on('listening', function () {
    const address = server.address();
    console.log('Servidor corriendo en puerto : '+ address.port);
});

server.bind(7000);
//node servidor.js
// cliente.js