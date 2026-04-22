#!/usr/bin/env node

import chalk from 'chalk';
import { pegaLinks } from './leitor.js';
import { validaLinks } from './httpValidacao.js';

const entrada = process.argv[2];

if (!entrada) {
  console.log(chalk.red('❌ Informe uma URL ou caminho de arquivo'));
} else {
  try {
    const links = await pegaLinks(entrada);
    const resultados = await validaLinks(links);

    console.log(chalk.blue('\n🔎 Resultado:\n'));

    resultados.forEach((item) => {
      console.log(item.url);
      console.log('→', item.mensagem);
      console.log('-------------------');
    });

  } catch (erro) {
    console.log(chalk.red('Erro:', erro.message));
  }
}