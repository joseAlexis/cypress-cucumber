import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps"

Given('An ecommerce page', () => {
    cy.visit('index.php');
});

When('Try to add a element to the cart', () => {
    cy.get('div.product-container:nth-child(1)').invoke('hover');
    cy.get('a[data-id-product="1"]').eq(0).click();
});

Then('A pop up is properly displayed', () => {
    cy.get('div#layer_cart').should('be.visible');
});

When('Serach for an item', (dataTable) => {
    cy.get('input#search_query_top').type(dataTable.rawTable[1][0]);
});

And('click over the results', () => {
    cy.get('div.ac_results > ul > li').as('result');
    cy.get('@result').should('be.visible');
    cy.get('@result').click();
});

Then('Item details are displayed', () => {
    cy.url().should('equal', `${Cypress.config().baseUrl}index.php?id_product=1&controller=product`);
});