import {Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"

When('I add a new element to the cart', () => {
    cy.get('div.product-container:nth-child(1)').invoke('hover');
    cy.get('a[data-id-product="1"]').eq(0).click();
});

Then('A pop up is properly displayed', () => {
    cy.get('div#layer_cart').should('be.visible');
});

When('I serach for the item {string}', (itemName: string) => {
    cy.get('input#search_query_top').type(itemName);
});

When('I click over the results', () => {
    cy.get('div.ac_results > ul > li').as('result');
    cy.get('@result').should('be.visible');
    cy.get('@result').click();
});

Then('Item details are displayed', () => {
    cy.url().should('equal', `${Cypress.config().baseUrl}index.php?id_product=1&controller=product`);
});