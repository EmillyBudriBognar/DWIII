//Produtos Abstratos
class CartaoCredito {
    pagar(valor) {
        throw new Error("Método pagar() deve ser implementado");
    }
}
class Boleto {
    pagar(valor) {
        throw new Error("Método pagar() deve ser implementado");
    }
}
// ===== Produtos Concretos Banco Master
class CartaoCreditoBancoMaster extends CartaoCredito {
    pagar(valor) {
        console.log(`Pagamento de R$${valor} com Cartão de Crédito do Banco A`);
    }
}
class BoletoBancoMaster extends Boleto {
    pagar(valor) {
        console.log(`Pagamento de R$${valor} com Boleto do Banco Master`);
    }
}
//Produtos Concretos Banco Itau
class CartaoCreditoBancoItau extends CartaoCredito {
    pagar(valor) {
        console.log(`Pagamento de R$${valor} com Cartão de Crédito do Banco Itau`);
    }
}
class BoletoBancoItau extends Boleto {
    pagar(valor) {
        console.log(`Pagamento de R$${valor} com Boleto do Banco Itau`);
    }
}
//Fábrica Abstrata
class BancoFactory {
    criarCartaoCredito() {
        throw new Error("Método criarCartaoCredito() deve ser implementado");
    }
    criarBoleto() {
        throw new Error("Método criarBoleto() deve ser implementado");
    }
}
//Fábrica Concreta Banco Master
class BancoAFactory extends BancoFactory {
    criarCartaoCredito() {
        return new CartaoCreditoBancoMaster();
    }
    criarBoleto() {
        return new BoletoBancoMaster();
    }
}
//Fábrica Concreta Banco Itau
class BancoBFactory extends BancoFactory {
    criarCartaoCredito() {
        return new CartaoCreditoBancoItau();
    }
    criarBoleto() {
        return new BoletoBancoItau();
    }
}
//Cliente-Loja
class Vendas {
    constructor(factory) {
        this.factory = factory;
    }
    pagarComCartao(valor) {
        const cartao = this.factory.criarCartaoCredito();
        cartao.pagar(valor);
    }
    pagarComBoleto(valor) {
        const boleto = this.factory.criarBoleto();
        boleto.pagar(valor);
    }
}
//Atividade do banco
function criarFactory(banco) {
    if (banco === "A") {
        return new BancoAFactory();
    } 
    if (banco === "B") {
        return new BancoBFactory();
    }
    throw new Error("Banco não suportado");
}
//Rodando
const bancoEscolhido = "A";
const factory = criarFactory(bancoEscolhido);
const loja = new Vendas(factory);
loja.pagarComCartao(100);
loja.pagarComBoleto(200);