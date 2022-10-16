import { defineConfig } from 'cypress';
import { faker } from '@faker-js/faker';

// Cypress Cucumber PreProcessor dependencies
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
    watchForFileChanges: false,
    projectId: "axhrgu",
    chromeWebSecurity: false,
    e2e: {
        baseUrl: "http://automationpractice.com/",
        specPattern: "**/*.feature",

        async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config)

            // bind to the event we care about
            on('file:preprocessor', createBundler({
                plugins: [createEsbuildPlugin(config)],
            })),
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
            return config;
        }
    }
})