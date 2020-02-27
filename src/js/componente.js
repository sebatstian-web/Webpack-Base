import '../css/componente.css';

export const mensaje = (texto) => {
  const h1 = document.createElement('h1');

  h1.innerText = `Demostración de ${texto}!`;
  document.body.append(h1);
};
