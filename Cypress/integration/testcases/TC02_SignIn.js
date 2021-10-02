///<reference types = "cypress"/>


describe("Sign-In", ()=>{
    it("Sign in is successful with valid credentials", ()=>{
        cy.visit("https://www.beardbrand.com/");
        cy.get('.Header__Icon.hidden-phone').click();
        cy.url().should("include", "www.beardbrand.com/account/login");
        cy.title().should("include", "Account – Beardbrand");
        cy.get('#customer_login > :nth-child(4) > .Form__Input').type("almunyeem@gmail.com");
        cy.get('#customer_login > :nth-child(4) > .Form__Input').should("have.attr", "name", "customer[email]");
        cy.get(':nth-child(5) > .Form__Input').type("$123abc$");
     
   })
   

})




    
