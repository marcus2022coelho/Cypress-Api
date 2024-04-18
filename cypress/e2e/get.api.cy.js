/// <reference types="cypress" />

describe('Buscar dispositivos', () =>{

    it ('Buscar um dispositivo especifico',() => {
        cy.request({
            method: 'GET',
            url: '/objects/7',
            failOnStatusCode: false
        }).as('getDispositivoEspecifico')

        //validacoes
        cy.get('@getDispositivoEspecifico').then((response )=>{
            expect(response.status).equal(200)
            expect(response.body.id).equal('7')
            expect(response.body.name).equal('Apple MacBook Pro 16')
            expect(response.body).not.empty
            expect(response.body.data).not.empty

            expect(response.body.data.year).not.string
            //Quando o campo possui espaço no nome
            expect(response.body.data['CPU model']).not.empty
            expect(response.body.data['CPU model']).equal('Intel Core i9')


        })
        




    })

})