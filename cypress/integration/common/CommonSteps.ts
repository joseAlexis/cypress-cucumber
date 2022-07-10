import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I navigate to the shopping page', () => {
    cy.visit('index.php');
});