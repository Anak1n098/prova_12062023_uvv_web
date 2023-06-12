function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    
    let fatorial = numero;
  
    
    for (let i = numero - 1; i >= 1; i--) {
      fatorial *= i;
    }
  
    return fatorial;
  }
 
  for (let i = 1; i <= 10; i++) {
    const fatorial = calcularFatorial(i);
    console.log(`O fatorial de ${i} é ${fatorial}`);
  }