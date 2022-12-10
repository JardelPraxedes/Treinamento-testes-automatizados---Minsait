///<reference types="cypress"/>
import Login from '../support/pages/login' //importando a classe criada 
import Produtos from '../support/pages/produtos'
describe("testando objets criados", ()=>{
    it('testando login',()=>{ 
        Login.logar()
        Produtos.produtos();
    })

}) 