///<reference types="cypress"/>

describe("Top Articles", ()=>{
    it("Verify whether the first article matches with the headline", ()=>{
        cy.visit("https://www.beardbrand.com/");
        cy.get('.Footer__Block--links > .Linklist > :nth-child(1) > .Link').click().then(function(linkText){
            cy.log("Clicked on link using text : " +linkText.text());
            cy.wait(3000);
        })
           
        })

        it("Verify whether the first article matches with the headline", ()=>{
            cy.visit("https://www.beardbrand.com/");
            cy.get('.Footer__Block--links > .Linklist > :nth-child(2) > .Link').click().then(function(linkText){
                cy.log("Clicked on link using text : " +linkText.text());
                cy.wait(3000);
            })
               
            })
        
        it("Verify whether the first article matches with the headline", ()=>{
                cy.visit("https://www.beardbrand.com/");
                cy.get('.Footer__Block--links > .Linklist > :nth-child(3) > .Link').click().then(function(linkText){
                    cy.log("Clicked on link using text : " +linkText.text());
                    cy.wait(3000);
                })
                   
                })

        it("Verify whether the first article matches with the headline", ()=>{
                    cy.visit("https://www.beardbrand.com/");
                    cy.get('.Footer__Block--links > .Linklist > :nth-child(4) > .Link').click().then(function(linkText){
                        cy.log("Clicked on link using text : " +linkText.text());
                        cy.wait(3000);
                    })
                       
                    })
        
        it("Verify whether the first article matches with the headline", ()=>{
                        cy.visit("https://www.beardbrand.com/");
                        cy.get('.Footer__Block--links > .Linklist > :nth-child(5) > .Link').click().then(function(linkText){
                            cy.log("Clicked on link using text : " +linkText.text());
                            cy.wait(3000);
                        })
                           
                        })

    
    })




