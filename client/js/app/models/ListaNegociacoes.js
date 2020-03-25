class ListaNegociacoes{

    constructor(){
        
        this._negociacoes = [];
    }
    //fiz usando o reflect.apply() para fins didaticos porem a arrow function funciona muito melhor

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
    }

}