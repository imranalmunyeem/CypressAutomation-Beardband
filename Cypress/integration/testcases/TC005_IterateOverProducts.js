///<reference types="cypress"/>

describe("Iterate over Elements", ()=>{
    it("Log information of all fragrance products", ()=>{
        cy.visit("https://www.beardbrand.com/");
        cy.get(':nth-child(1) > .Header__Icon').click();
        cy.get('.SidebarMenu__Nav--primary > :nth-child(1) > .u-h6').click();
        cy.get('[style="overflow: visible; height: auto;"] > :nth-child(1) > :nth-child(1) > .Collapsible__Button').click();
        

    })
})
