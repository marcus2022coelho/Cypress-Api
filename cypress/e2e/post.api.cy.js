/// <reference types="cypress" />

describe('Cadastrar dispositivo', () => {

    const cadastrar_dispositivo_body = require('../fixtures/cadastrar_dispositivo_sucesso.json')

    it('Cadastrar um dispositivo especifico', () => {

       
        //está sendo usado o command para abstrair o comando
        cy.cadastrarDispositivo(cadastrar_dispositivo_body)
                .as('postDispositivo')
        
        
        //validacoes
        cy.get('@postDispositivo').then((response) => {

            const dataAt = new Date().toISOString().slice(0,10)
        

            expect(response.status).equal(200)
            expect(response.body.id).not.empty
            expect(response.body.createdAt).not.empty
            expect(response.body.createdAt.slice(0,10)).equal(dataAt)
    

        })

    })

})