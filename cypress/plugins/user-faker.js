const { faker } = require('@faker-js/faker');

const userInfo = () => {

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

module.exports.userInfo = userInfo;