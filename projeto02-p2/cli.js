import chalk from 'chalk';
import { extraiLinks } from './leitor.js';
import listaValidada from './httpValidacao.js';

const caminho = process.argv;

async function processaTexto(caminho) {
    const argumento = caminho[2];

    if (!argumento) {
        console.log(chalk.red('Favor informar um caminho de arquivo ou uma URL.'));
        return;
    }

    try {
        if (argumento.startsWith('http')) {
            // Se for uma URL direta
            const linkObj = [{ "Link Informado": argumento }];
            const resultado = await listaValidada(linkObj);
            console.log(chalk.yellow('Status do link informado:'));
            console.log(resultado);
        } else {
            // Se for um arquivo
            const resultado = await extraiLinks(argumento);
            if (typeof resultado === 'string') {
                console.log(chalk.red(resultado));
            } else {
                console.log(chalk.blue('Links encontrados:'), resultado);
                const linksValidados = await listaValidada(resultado);
                console.log(chalk.yellow('Links validados:'));
                console.log(linksValidados);
            }
        }
    } catch (erro) {
        console.log(chalk.red('Ocorreu um erro no processamento:'), erro.message);
    }
}

processaTexto(caminho);
