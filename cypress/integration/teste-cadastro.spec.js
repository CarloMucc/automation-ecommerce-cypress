/// <reference types="cypress" />
 
var Chance = require('chance')
var chance = new Chance()
 
describe('Cadastro', () => {
    it('Ao inserir os dados e finalizar, então o cadastro deve ser efetuado', () => {
 
        cy.visit('/')
       
        cy.get('a.login').click()
        cy.get('input#email_create').type(chance.email())
        cy.url().should('contain', 'my-account')
        cy.get('button#SubmitCreate').click()
        cy.get('input#id_gender1').check()
        cy.get('input[name=customer_firstname]').type(chance.first())
        cy.get('input[name=customer_lastname]').type(chance.last())
        cy.get('input[name=passwd]').type('11223344c')
        cy.get('select#days').select('17')
        cy.get('select#months').select('July')
        cy.get('select#years').select('2002')
        cy.get('input[name=newsletter]').check()
        cy.get('input[name=optin]').check()
        cy.get('input[name=company]').type(chance.company())
        cy.get('input[name=address1]').type(chance.address())
        cy.get('input[name=address2]').type('Apartment number 45')
        cy.get('input#city').type(chance.city())
        cy.get('select#id_state').select('Minnesota')
        cy.get('input#postcode').type(chance.zip())
        cy.get('select[name=id_country]').select('United States')
        cy.get('textarea#other').type('in front of the national park')
        cy.get('input#phone').type(chance.phone())
        cy.get('input#phone_mobile').type('(555) 555-1234')
        cy.get('input[name=alias]').type(chance.address())
        cy.get('button.button-medium').click()
        cy.get('h1.page-heading').should("have.text", "My account")
        
    });
});
