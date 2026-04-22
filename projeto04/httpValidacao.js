import fetch from 'node-fetch';
import chalk from 'chalk';

function traduzStatus(status) {
  if (status === 200) {
    return chalk.green('Site no ar e operante!');
  }

  if (status === 400 || status === 404) {
    return chalk.red('Página não encontrada.');
  }

  if (status === 500) {
    return chalk.yellow('Erro interno no servidor do site.');
  }

  return chalk.gray(`Status: ${status}`);
}

export async function validaLinks(lista) {
  const resultados = [];

  for (const url of lista) {
    try {
      const res = await fetch(url);
      const mensagem = traduzStatus(res.status);

      resultados.push({
        url,
        status: res.status,
        mensagem
      });

    } catch (erro) {
      resultados.push({
        url,
        status: 'erro',
        mensagem: chalk.red(' Domínio inexistente ou erro de rede.')
      });
    }
  }

  return resultados;
}