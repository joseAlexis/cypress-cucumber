import { When, And } from "cypress-cucumber-preprocessor/steps"

before(function () {
    cy.task('userInfo').then(function (user) {
        this.userInfo = user;
    })
})

When('Creating an Account', function () {
    cy.get('a.login').click();
    cy.get('input#email_create').type(this.userInfo.email);
    cy.get('button#SubmitCreate').click();
});

And('Completing the form', function () {
    this.userInfo.gender === 'Mr.' ? cy.get('div#uniform-id_gender1').click() : cy.get('div#uniform-id_gender2').click();
    cy.get('input#customer_firstname').type(this.userInfo.firstName);
    cy.get('input#customer_lastname').type(this.userInfo.lastName);
    cy.get('input#email').its('val').should('contain', this.userInfo.email)
    cy.get('input#passwd').type(this.userInfo.password);
    cy.get('input#days').select(this.userInfo.dobDay);
    cy.get('input#months').select(this.userInfo.dobMonth);
    cy.get('input#years').select(this.userInfo.dobYear);
    
    if(this.userInfo.newsletter) {
        cy.get('input#newsletter').click();
    }
    
    if(this.userInfo.specialOffers) {
        cy.get('input#optin')
    }

    cy.get('input#firstname').type(this.userInfo.firstName);
    cy.get('input#lastname').type(this.userInfo.firstName);
});