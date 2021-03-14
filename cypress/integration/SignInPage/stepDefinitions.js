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
    cy.get('input#email').should('have.value', this.userInfo.email)
    cy.get('input#passwd').type(this.userInfo.password);
    cy.get('select#days').select(this.userInfo.dobDay);
    cy.get('select#months').select(this.userInfo.dobMonth);
    cy.get('select#years').select(this.userInfo.dobYear);

    if (this.userInfo.newsletter) {
        cy.get('input#newsletter').click();
    }

    if (this.userInfo.specialOffers) {
        cy.get('input#optin')
    }

    cy.get('input#firstname').should('have.value', this.userInfo.firstName);
    cy.get('input#lastname').should('have.value', this.userInfo.lastName);
    cy.get('input#company').type(this.userInfo.company);
    cy.get('input#address1').type(this.userInfo.address);
    cy.get('input#city').type(this.userInfo.city);
    cy.get('select#id_state').select(this.userInfo.state);
    cy.get('input#postcode').type(this.userInfo.zipCode);
    cy.get('input#phone_mobile').type(this.userInfo.mobilePhone);
    cy.get('button#submitAccount').click();
});

Then('An access account is created', function() {
    cy.url().should('equal', `${Cypress.config().baseUrl}index.php?controller=my-account`)
});