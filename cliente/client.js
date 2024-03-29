const net = require('node:net');
const readline = require('readline-sync') //lee en linea de consola <-- entrada de datos
const options = {
    port: 4000,
    host: '127.0.0.1'
} 
const client = net.createConnection(options)

client.on('connect', ()=>{
    console.log('Conexion satisfactoria!!')
    //client.write('Hola Servidor')
    sendLine()
})

client.on('data', (data)=>{
    console.log('El Servidor dice: ' + data)
    sendLine()
})

client.on('error', (err)=>{
    console.log(err.message)
})

function sendLine(){
    // \n es salto de linea \t es tabulador
    var line = readline.question('\nDigite No. de Credencial:\t')
    if (line == "0"){
        client.end()
    }else{
        client.write(line)
    }
}