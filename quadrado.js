function verificarRaizInteira(n) {
    let raiz = Math.sqrt(n);
  
    if (Number.isInteger(raiz)) {
      console.log(n + ' é um quadrado perfeito, sua raiz é ' + raiz);
      return true;
    } else {
      console.log(n + ' não é um quadrado perfeito, sua raiz é ' + raiz);
      return false;
    }
  }