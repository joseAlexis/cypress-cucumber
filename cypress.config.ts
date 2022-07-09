import { defineConfig } from 'cypress';
import { faker } from '@faker-js/faker';

// Cypress Cucumber PreProcessor dependencies
const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
const resolve = require('resolve');

export default defineConfig({
    e2e: {
        baseUrl: "http://automationpractice.com/",
        specPattern: "**/*.feature",
        watchForFileChanges: false,
        projectId: "axhrgu",
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {

            // Cypress Cucumber Preprocessor options
            const options = {
                ...browserify.defaultOptions,
                typescript: resolve.sync('typescript', { baseDir: config.projectRoot })
            }
            
            // bind to the event we care about
            on('file:preprocessor', cucumber(options))
            on('task', {
                "userInfo"() {
                    return {
                        gender: "Mr." || "Mrs.",
                        firstName: faker.name.firstName(),
                        lastName: faker.name.lastName(),
                        email: faker.internet.email(),
                        password: faker.internet.password(),
                        dobDay: `${faker.datatype.number({ min: 1, max: 28 })}`,
                        dobMonth: `${faker.datatype.number({ min: 1, max: 12 })}`,
                        dobYear: `${faker.datatype.number({ min: 1900, max: 2021 })}`,
                        newsletter: faker.datatype.boolean(),
                        specialOffers: faker.datatype.boolean(),
                        company: faker.company.companyName(),
                        address: faker.address.streetAddress(),
                        city: faker.address.city(),
                        state: `${faker.address.state()}`,
                        zipCode: faker.address.zipCode('#####'),
                        mobilePhone: faker.phone.number('##########')
                    }
                }
            });
        }
    }
})