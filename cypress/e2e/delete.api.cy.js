/// <reference types="cypress" />

describe('deletar dispositivo', () => {

    it('deletar um dispositivo especifico', () => {

        const body = {
            "name": 'marcus14598',
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "unico",
                "Hard disk size": "1 TB"
            }
        }

        cy.request({
            method: 'POST',
            url: '/objects',
            body: body,
            failOnStatusCode: false
        }).as('postDispositivo')

        //validacoes
        cy.get('@postDispositivo').then((response_post) => {
            expect(response_post.status).equal(200)
            cy.request({
                method: 'DELETE',
                url: `https://api.restful-api.dev/objects/${response_post.body.id}`,
                failOnStatusCode: false
            }).as('deleteDispositivo')

            //validações do delete
            cy.get('@deleteDispositivo').then((response_del)=>{
                expect(response_del.status).equal(200)
                expect(response_del.body.message).to.contain(response_post.body.id)
            })


        })

    })

})