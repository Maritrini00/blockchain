const SHA256 = require('crypto-js/sha256');


class Block {
    //index =identificador de la posición del bloque en la cadena
    //Data = contenido del bloque
    //previousHash = valor del bloque anterior de la cadena
    constructor(index,data,previousHash=''){
        this.index = index;
        this.data = data;
        this.previousHash = previousHash;
        this.date = new Date();
        this.nonce = 0;
        this.hash = this.createdHash();
    }

    createdHash(){
        return SHA256(`${this.index} ${this.data} ${this.date} ${this.nonce}`).toString();
    }
    //inicie con 0 el hash
    mine(difficulty){
        while(!this.hash.startsWith(difficulty)){
            this.nonce++;
            this.hash = this.createdHash();
        }
    }

    //0

    //cifrado
    //simetrico y asimetrico

    //a SHA256 = x
    //a SHA256 = x





}

module.exports = Block;