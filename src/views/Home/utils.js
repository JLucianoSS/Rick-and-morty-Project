

//GENERA UN NUMERO ALEATORIO ENTRE 1 Y 826
 const getRandomId = () => {
  const numeroAleatorio = Math.random();
  const numeroEnRango = numeroAleatorio * 826;
  const numeroFinal = Math.floor(numeroEnRango) + 1;
  return numeroFinal;
};

export default getRandomId;