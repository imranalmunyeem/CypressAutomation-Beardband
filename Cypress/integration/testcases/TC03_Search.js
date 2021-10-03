///<reference types="cypress"/>

describe("Search", ()=>{
    it("Search test should be successful using existing value", ()=>{
        cy.visit("https://www.beardbrand.com/");
        cy.get('[href="/search"]').click();
        cy.get('.EmptyState__Action > .Form > .Form__Input').type("Beard Oil");

    })


    it("Search test should not be successful using non existing value", ()=>{
        cy.visit("https://www.beardbrand.com/");
        cy.get('[href="/search"]').click();
        cy.get('.EmptyState__Action > .Form > .Form__Input').type("Computer");

    })
})