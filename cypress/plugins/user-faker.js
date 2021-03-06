const faker = require('faker');

const userInfo = () => {
    return {
        gender: "Mr." || "Mrs.",
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        dobDay: faker.random.number({ min: 1, max: 28 }),
        dobMonth: faker.random.number({ min: 1, max: 12 }),
        dobYear: faker.random.number({ min: 1900, max: 2021 }),
        newsletter: faker.random.boolean(),
        specialOffers: faker.random.boolean(),
        company: faker.company.companyName(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        mobilePhone: faker.phone.phoneNumber('##########')
    }
}

module.exports.userInfo = userInfo;