import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_PATH = path.join(__dirname, "Projeto2_arquivo.md");
const LINK_REGEX = /\[([^\]]*)\]\((https?:\/\/[^$#\s][^\s]*)\)/g;

async function extractLinks() {
  try {
    const content = await fs.readFile(FILE_PATH, "utf-8");

    const matches = [...content.matchAll(LINK_REGEX)];

    if (matches.length === 0) {
      console.log(chalk.yellow("Nenhuma referência encontrada no arquivo."));
      return;
    }

    console.log(chalk.bold.cyan("\nReferências Técnicas Encontradas:\n"));
    console.log(chalk.white("─".repeat(60)));

    const maxNome = Math.max(...matches.map((m) => m[1].length));
    const maxIndex = String(matches.length).length;

    matches.forEach((match, index) => {
      const nome = match[1];
      const url = match[2];
      const numLabel = `[${index + 1}]`.padEnd(maxIndex + 2);
      console.log(
        chalk.bold.green(numLabel) +
        " " +
        chalk.bold("Referência:") +
        " " +
        chalk.white(nome.padEnd(maxNome)) +
        " " +
        chalk.gray("|") +
        " " +
        chalk.bold("Link:") +
        " " +
        chalk.blue.underline(url)
      );
    });

    console.log(chalk.white("─".repeat(60)));
    console.log(
      chalk.bold.cyan(`\nTotal de referências encontradas: ${matches.length}\n`)
    );
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(
        chalk.bgRed.white.bold(
          `ERRO: Arquivo não encontrado: ${FILE_PATH} `
        )
      );
    } else {
      console.log(
        chalk.bgRed.white.bold(`ERRO INESPERADO: ${error.message} `)
      );
    }
  }
}

extractLinks();
