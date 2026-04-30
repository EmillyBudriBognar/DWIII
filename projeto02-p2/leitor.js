import fs from 'fs';

export async function extraiLinks(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinksDoTexto(texto);
    } catch (erro) {
        throw new Error(`Erro ao ler o arquivo: ${erro.message}`);
    }
}

export function extraiLinksDoTexto(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({
        [captura[1]]: captura[2]
    }));
    return resultados.length === 0 ? 'Não há links no arquivo.' : resultados;
}
