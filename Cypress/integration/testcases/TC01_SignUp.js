///<reference types="cypress"/>
    describe("SignUp", ()=>{
    it("Sign up is successful with valid inputs", ()=>{
        cy.visit("https://www.beardbrand.com/");
        cy.get('.Header__Icon.hidden-phone').click();
        cy.get('#customer_login > .Form__Hint > .Link').click();
        //Url check
        cy.url().should("include", "www.beardbrand.com/account/register");
        //Page title check
        cy.title().should("include", "Create Account – Beardbrand");
        //Form Validation
        cy.get(':nth-child(4) > .Form__Input').type("Imran Al");
        cy.get(':nth-child(5) > .Form__Input').type("Munyeem");
        cy.get(':nth-child(6) > .Form__Input').type("almunyeem@gmail.com");
        cy.get(':nth-child(6) > .Form__Input').should("have.attr", "name", "customer[email]");
        cy.get(':nth-child(7) > .Form__Input').type("$123abc$")
        cy.log("Test is completed!");

    })
})





    