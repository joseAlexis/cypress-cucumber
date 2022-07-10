import { When, And, Then } from "cypress-cucumber-preprocessor/steps"

before(function() {
    cy.task('userInfo').then(function (user) {
        cy.setLocalStorage('userInfo', JSON.stringify(user));
    });
});

When('I create a new user account', function () {
    cy.get('a.login').click();
    cy.getLocalStorage("userInfo").then(userInfo => {
        const user = JSON.parse(userInfo);
        
        // Email validation
        cy.get('input#email_create').type(user.email);
        cy.get('button#SubmitCreate').click();
        cy.get('form#account-creation_form').should('be.visible');

        // Personal Information form
        user.gender === 'Mr.' ? cy.get('div#uniform-id_gender1').click() : cy.get('div#uniform-id_gender2').click();
        cy.get('input#customer_firstname').type(user.firstName);
        cy.get('input#customer_lastname').type(user.lastName);
        cy.get('input#email').should('have.value', user.email)
        cy.get('input#passwd').type(user.password);
        cy.get('select#days').select(user.dobDay);
        cy.get('select#months').select(user.dobMonth);
        cy.get('select#years').select(user.dobYear);

        if (user.newsletter) {
            cy.get('input#newsletter').click();
        }

        if (user.specialOffers) {
            cy.get('input#optin')
        }

        cy.get('input#firstname').should('have.value', user.firstName);
        cy.get('input#lastname').should('have.value', user.lastName);
        cy.get('input#company').type(user.company);
        cy.get('input#address1').type(user.address);
        cy.get('input#city').type(user.city);
        cy.get('select#id_state').select(user.state);
        cy.get('input#postcode').type(user.zipCode);
        cy.get('input#phone_mobile').type(user.mobilePhone);
    });
    cy.get('button#submitAccount').click();
});

Then('My Account details are displayed', function () {
    cy.url().should('equal', `${Cypress.config().baseUrl}index.php?controller=my-account`);
    cy.get('h1.page-heading').should('be.visible').and('have.text', 'My account');
});