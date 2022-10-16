import { Given } from "@badeball/cypress-cucumber-preprocessor"

Given('I navigate to the shopping page', () => {
    cy.visit('index.php');
});