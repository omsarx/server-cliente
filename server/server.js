const { Socket } = require('node:dgram');
const net = require('node:net'); 
const server = net.createServer()
//const readline = require('readline-sync')

//recibe el nombre de un evento, se crea el socket
server.on('connection', (Socket)=>{
    Socket.on('data', (data)=>{
        console.log('Mensaje recibido desde el Cliente: ' + data)   //peticion al servidor por el cliente
        Socket.write('Recibido!') //respuesta del servidor al cliente
       // sendResp()    
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
function sendResp(){
    // \n es salto de linea \t es tabulador
    var line = readline.question('\nRespuesta:\t')
    if (line == "0"){
        server.end()
    }else{
        server.write(line)
    }
}
*/