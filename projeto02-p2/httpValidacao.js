import fetch from 'node-fetch';
import chalk from 'chalk';

function traduzStatus(status) {
    switch (status) {
        case 200:
            return chalk.green('Site no ar e operante!');
        case 400:
        case 404:
            return chalk.red('Página não encontrada.');
        case 500:
            return chalk.yellow('Erro interno no servidor do site.');
        default:
            return `Status desconhecido: ${status}`;
    }
}

async function checaStatus(listaURLs) {
    try {
        const arrStatus = await Promise.all(
            listaURLs.map(async (url) => {
                try {
                    const response = await fetch(url);
                    return { status: response.status, message: traduzStatus(response.status) };
                } catch (erro) {
                    return { status: 'ERRO', message: chalk.red('Domínio inexistente ou erro de rede.') };
                }
            })
        );
        return arrStatus;
    } catch (erro) {
        throw new Error(`Ocorreu um erro na validação: ${erro.message}`);
    }
}

function geraArrayDeURLs(arrayLinks) {
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

export default async function listaValidada(listaLinks) {
    const links = geraArrayDeURLs(listaLinks);
    const statusLinks = await checaStatus(links);
    
    return listaLinks.map((objeto, indice) => ({
        ...objeto,
        status: statusLinks[indice].status,
        mensagem: statusLinks[indice].message
    }));
}
