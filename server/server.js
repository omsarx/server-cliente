const { Socket } = require('node:dgram');
const net = require('node:net'); 
const server = net.createServer()
const readline = require('readline-sync')

//recibe el nombre de un evento, se crea el socket
server.on('connection', (Socket)=>{
    Socket.on('data', (data)=>{
        console.log('Mensaje recibido desde el Cliente: ' + data)   //peticion al servidor por el cliente       
        //var calix = '2' // debe convertirse el valor en string para oider enviarse por net
        var line = readline.question('\nRespuesta:\t')
        Socket.write(line) //respuesta del servidor al cliente solo en string          
    })

    Socket.on('close', ()=>{
        console.log('Comunicacion finalizada')
    })

    Socket.on('error',(err)=>{
        console.log(err.message)
    })
})

server.listen(4000, () => {
    console.log('El servidor esta escuchando en la puerta: ', server.address().port)
})

/*
NOTAS: 
-> Debe iniciarse primero el servidor y posteriormente el cliente
-> Debe cerrarse primero el cliente y despues el servidor
*/