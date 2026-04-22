import fs from 'fs';

function extraiLinks(texto) {
  const regex = /(https?:\/\/[^\s]+)/g;
  return texto.match(regex) || [];
}

export async function pegaLinks(entrada) {
  // se for URL direta
  if (entrada.startsWith('http')) {
    return [entrada];
  }

  // se for arquivo
  const texto = await fs.promises.readFile(entrada, 'utf-8');
  return extraiLinks(texto);
}