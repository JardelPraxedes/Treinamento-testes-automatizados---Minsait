//metodos de ações na pagina

const el = require("./elements").ELEMENTS;

class Login {
    logar(){
        cy.visit(el.url);
        cy.get(el.user_login).type(el.campo_login)
        cy.get(el.passaword_login).type(el.campo_senha)
        cy.get(el.botao_login).click()
    }
    
}

export default new Login()