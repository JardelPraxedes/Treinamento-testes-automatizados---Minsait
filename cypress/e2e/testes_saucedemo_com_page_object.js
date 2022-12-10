///<reference types="cypress"/>
import Login from '../support/pages/login' //importando a classe criada 
describe("testando objets criados", ()=>{
    it('testendo objets',()=>{ 
        Login.logar()
    })

}) 