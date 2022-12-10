//metodos de ações na pagina

const el = require("./elements").ELEMENTS;

class Produtos {
    produtos(){
        cy.get(el.carrinho).should('be.visible')

    }
    
}

export default new Produtos(); //criando novo objeto produto