import fetch from 'node-fetch';
import chalk from 'chalk';

function traduzStatus(status) {
  if (status === 200) {
    return chalk.green('Site Operando Normalmente!');
  }

  if (status === 400 || status === 404) {
    return chalk.red('Página não encontrada.');
  }

  if (status === 500) {
    return chalk.yellow('Erro no servidor do site verifique se esta correto as informações.');
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
        mensagem: chalk.red('Não encontrado ou erro de rede.')
      });
    }
  }

  return resultados;
}