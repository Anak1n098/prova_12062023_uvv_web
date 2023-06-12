function letraMaiuscula(str) {
    return /[A-Z]/.test(str);
}


function letraMinuscula(str) {
    return /[a-z]/.test(str);
}


function possuiNumero(str) {
    return /[0-9]/.test(str);
}

function senhaValida(senha){
    if(letraMaiuscula(senha) && letraMinuscula(senha) && possuiNumero(senha) && senha.length >= 8){
        return true;
    }else{
        return false;
    }
}

function resultado(senha){
    if(senhaValida(senha)){
        console.log('Senha válida!!')
        return true;
    }else{
        console.log('Senha inválida!!')
        return false;
    }
}