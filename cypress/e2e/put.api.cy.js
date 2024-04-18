/// <reference types="cypress" />

describe('atualizar dispositivo', () => {

    it('atualizar um dispositivo especifico', () => {

        const body_cadastro = {
            "name": 'marcus14598',
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "unico",
                "Hard disk size": "1 TB"
            }
        }
        const body_put = {
            "name": 'marcus999',
            "data": {
                "year": 2024,
                "price": 1849.99,
                "CPU model": "unico",
                "Hard disk size": "1 TB"
            }
        }


        cy.request({
            method: 'POST',
            url: '/objects',
            body: body_cadastro,
            failOnStatusCode: false
        }).as('postDispositivo')

        //validacoes
        cy.get('@postDispositivo').then((response_post) => {
            expect(response_post.status).equal(200)
            cy.request({
                method: 'PUT',
                url: `/objects/${response_post.body.id}`,
                body: body_put,
                failOnStatusCode: false
            }).as('updateDispositivo')

            //validações do update
            cy.get('@updateDispositivo').then((response_put)=>{
                expect(response_put.status).equal(200)
                expect(response_put.body.name).equal('marcus999')
            })


        })

    })

})