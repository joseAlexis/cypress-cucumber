import { Given } from "cypress-cucumber-preprocessor/steps";

Given('An ecommerce page', () => {
    cy.visit('index.php');
});