var http = require("http");

http.createServer(function(requisicao,resposta){
    resposta.end("<h1>Olá, essa e minha primeira aplicação HTTP com Noje.js</h1><h4> https://devrmg.github.io/devrm/</h4>");
}).listen(3000);

console.log("Meu servidor está rodando!");

var http = require("http");

 